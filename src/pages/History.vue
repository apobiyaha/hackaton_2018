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
import products from '../products/list'
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
      products: products
    }
  }
}
</script>
