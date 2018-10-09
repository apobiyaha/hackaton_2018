<template>
  <q-page class="bucket--page">
    <h3 class="caption">Корзина</h3>

    <q-list v-for="item in bucket" :key="item.name" highlight dense>
      <q-item v-touch-swipe.right="handleSwipeToRemoveItem">
        <q-item-main :label="item.name"/>
        <div class="item-secondary stamp">
          {{ item.cost }}
        </div>
      </q-item>
    </q-list>

    <div class="total-amount">
      <span>Всего: </span>{{ countTotalAmount }}
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Bucket',
  data () {
    return {
      totalAmount: 0,
      bucket: [
        {
          name: 'Колбаса',
          cost: 13
        },
        {
          name: 'Сыр',
          cost: 7.4
        },
        {
          name: 'Молоко',
          cost: 5.83
        },
        {
          name: 'Чай',
          cost: 4.54
        },
        {
          name: 'Печенье',
          cost: 8
        },
        {
          name: 'Чипсы',
          cost: 7.4
        },
        {
          name: 'Мясо',
          cost: 5.83
        },
        {
          name: 'Кофе',
          cost: 4.54
        },
        {
          name: 'Шоколад',
          cost: 8
        },
        {
          name: 'Конфеты',
          cost: 7.4
        },
        {
          name: 'Творог',
          cost: 5.83
        },
        {
          name: 'Сырки',
          cost: 4.54
        },
        {
          name: 'Рыба',
          cost: 8
        }
      ]
    }
  },
  computed: {
    countTotalAmount () {
      // eslint-disable-next-line
      this.bucket.map((item) => { this.totalAmount += item.cost });
      return this.totalAmount.toFixed(2)
    }
  },
  methods: {
    handleSwipeToRemoveItem (obj) {
      let index = this.bucket.findIndex((item) => {
        if (obj.evt.target.innerHTML.indexOf(item.name) !== -1) {
          return true
        }
      })
      this.bucket.splice(index, 1)
      this.totalAmount = 0
    }
  },
  created () {
    this.totalAmount = 0
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
</style>
