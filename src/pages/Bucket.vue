<template>
  <q-page class="bucket--page">
    <q-modal ref="loader" class="maximized">
      <q-spinner-puff class="spinner" name="bars" color="primary" :size="150"></q-spinner-puff>
    </q-modal>

    <h3 class="caption">Корзина</h3>

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
      <q-btn class="pay" round color="primary" icon="money" @click="handlePay"/>
      <q-btn round color="negative" icon="delete_forever" @click="clearBucket"/>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Bucket',
  data () {
    return {
      totalAmount: 0.00,
      bucket: [{}]
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
      setTimeout(function () {
        this.$router.push('/qr')
        this.$refs.loader.toggle()
        this.totalAmount = 0.00
        this.bucket = []
        window.localStorage.clear()
      }.bind(this), 2000)
      this.$refs.loader.toggle()
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
  .pay {
    margin: 0 10px 0 20px;
  }
  .spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
  }
</style>
