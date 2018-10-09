<template>
  <q-page>
     <q-datetime-picker v-model="model" type="date" />
    <q-list highlight>
      <q-list-header>Недавние покупки</q-list-header>
      <q-item v-for="product in products" :key="product.name">
        <q-item-side>
          <q-item-tile avatar>
            <q-icon name="thumb_up" />
          </q-item-tile>
        </q-item-side>
        <q-item-main :label="product.name" />
        <q-item-side right>
          {{product.cost}} BYN
        </q-item-side>
      </q-item>
      <q-item-separator />
      <q-list-header>Покупки за {{model.getDate()}}-{{model.getMonth()}}-{{model.getFullYear()}}</q-list-header>
      <q-item v-for="product in oldProducts" :key="product.cost">
        <q-item-side>
          <q-item-tile avatar>
            <q-icon name="thumb_up" />
          </q-item-tile>
        </q-item-side>
        <q-item-main :label="product.name" />
        <q-item-side right>
          {{product.cost}} BYN
        </q-item-side>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: 'History',
  data () {
    return {
      model: new Date(), // as in "right this moment"
      oldProducts: {
        1: {
          name: 'Чипсы',
          quantity: 15,
          cost: 2.30
        },

        2: {
          name: 'Пиво',
          quantity: 1,
          cost: 7.0
        },

        3: {
          name: 'Сосиски',
          quantity: 100,
          cost: 3.10
        }
      },
      products: {
        1: {
          name: 'Молоко',
          quantity: 15,
          cost: 2.30
        },

        2: {
          name: 'Селёдка',
          quantity: 1,
          cost: 0.70
        },

        3: {
          name: 'Туалетная бумага',
          quantity: 100,
          cost: 5.01
        },

        4: {
          name: 'Штаны',
          quantity: 1,
          cost: 40.50
        },

        5: {
          name: 'Пиво',
          quantity: 3,
          cost: 12.30
        }

      }
    }
  }
}
</script>
