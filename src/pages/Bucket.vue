<template>
  <q-page class="bucket--page">
    <q-modal ref="loader" class="maximized">
      <q-spinner-puff class="spinner" name="bars" color="primary" :size="150"></q-spinner-puff>
    </q-modal>

    <h3 class="caption">Корзина</h3>

    <div class="warning" v-if="showWarning">
      Корзина пуста
    </div>

    <q-list v-for="(item, index) in bucket" :key="index" highlight dense>
      <q-item v-touch-swipe.right="handleSwipeToRemoveItem">
        <q-item-main :label="item.name"/>
        <div class="item-secondary stamp">
          {{ item.cost }}
        </div>
      </q-item>
    </q-list>

    <div class="total-amount">
      <span>Всего: </span>
      <span>{{ countTotalAmount }}</span>
    </div>
    <div class="row justify-center" v-if="totalAmount !== 0.00">
      <q-btn color="positive"
             round
             size="3rem"
             class="q-ma-sm"
             @click="handlePay">
            <span style="font-size: 1.2rem;
                         font-weight: bold">
                Купить
            </span>
      </q-btn>
      <q-btn color="negative"
             round
             size="3rem"
             class="q-ma-sm"
             @click="clearBucket">
            <span style="font-size: 1.2rem;
                        font-weight: bold">
                Очистить
            </span>
      </q-btn>
    </div>
    <div v-else class="row justify-center">
      <q-btn round size="2.2rem"
             color="deep-orange"
             @click="$router.push('addPurchase')">
        <span style="font-size: 1.0rem;font-weight: bold">
          Добавить покупку
        </span>
      </q-btn>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Bucket',
  data () {
    return {
      totalAmount: 0.00,
      bucket: [{}],
      showWarning: false
    }
  },
  computed: {
    countTotalAmount () {
      if (this.bucket) {
        // eslint-disable-next-line
        this.bucket.map((item) => { this.totalAmount += item.cost });
        return this.totalAmount.toFixed(2) || this.totalAmount
      }
    }
  },
  methods: {
    clearBucket () {
      this.totalAmount = 0.00
      this.bucket = []
      window.localStorage.clear()
    },
    handlePay () {
      if (this.bucket !== null) {
        setTimeout(function () {
          this.$router.push('/app/qr')
          this.$refs.loader.toggle()
          this.totalAmount = 0.00
          this.bucket = []
          window.localStorage.clear()
        }.bind(this), 2000)
        this.$refs.loader.toggle()
      } else {
        this.showWarning = true
        setTimeout(function () {
          this.showWarning = false
        }.bind(this), 2000)
      }
    },
    handleSwipeToRemoveItem (obj) {
      let index = this.bucket.findIndex((item) => {
        if (obj.evt.target.innerHTML.indexOf(item.name) !== -1) {
          return true
        }
      })
      this.bucket.splice(index, 1)
      this.totalAmount = 0.00
    }
  },
  created () {
    this.bucket = JSON.parse(window.localStorage.getItem('bucket'))
  },
  beforeRouteLeave (to, from, next) {
    window.localStorage.setItem('bucket', JSON.stringify(this.bucket))
    next()
  }
}
</script>

<style scoped>
  .bucket--page {
    color: #555;
    font-weight: bold;
  }
  .total-amount {
    font-size: 20px;
    padding: 40px;
    text-align: center;
  }
  .warning {
    position: fixed;
    color: #DA2828;
    text-align: center;
    font-size: 20px;
    width: 100%;
    padding: 10px;
    top: 110px;
  }
  .spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
  }
</style>
