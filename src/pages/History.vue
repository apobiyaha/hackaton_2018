<template>
  <q-page>
     <q-datetime-picker v-model="model" type="date" />
    <q-table
      :title="`Покупки за ${model.getDate()}-${model.getMonth()}-${model.getFullYear()}` "
      :data="products"
      :columns="columns"
      row-key="name"
    />
  </q-page>
</template>

<script>
export default {
  name: 'History',
  data () {
    return {
      model: new Date(), // as in "right this moment"
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Продукт',
          align: 'left',
          field: 'name',
          sortable: true,
          classes: 'my-class',
          style: 'width: 50px'
        },
        {
          label: 'Количество',
          field: 'quantity',
          align: 'left',
          sortable: true,
          classes: 'my-class',
          style: 'width: 50px'
        },
        {
          label: 'Стоимость',
          field: 'cost',
          sortable: true,
          align: 'left',
          classes: 'my-class',
          style: 'width: 50px'
        }
      ],
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
      products: [
        {
          name: 'Молоко',
          quantity: 15,
          cost: 2.30
        },

        {
          name: 'Селёдка',
          quantity: 1,
          cost: 0.70
        },

        {
          name: 'Туалетная бумага',
          quantity: 100,
          cost: 5.01
        },

        {
          name: 'Штаны',
          quantity: 1,
          cost: 40.50
        },

        {
          name: 'Пиво',
          quantity: 3,
          cost: 12.30
        }]

    }
  }
}
</script>
