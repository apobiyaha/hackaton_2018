<template>
  <q-page>
    <q-list separator>
      <q-collapsible indent icon="alarm" label="Срочные товары" sublabel="2 товара скоро закончатся">

        <q-collapsible indent icon="receipt" label="Предложения">

          <q-collapsible label="Сахар">
            <div>
              <q-list highlight>
                <q-list-header>Сегодня</q-list-header>
                <q-item>

                  <q-item-main label="Market1" />
                  <q-item-side right>
                    1.50
                  </q-item-side>
                </q-item>
                <q-item>
                  <q-item-main label="Market2" />
                  <q-item-side right >
                  1.53
                  </q-item-side>
                </q-item>
                <q-item-separator />
                <q-list-header>Предыдущая покупка</q-list-header>
                <q-item>
                  <q-item-main label="Market1" />
                  <q-item-side right >
                    1.48
                  </q-item-side>
                </q-item>
              </q-list>
            </div>
          </q-collapsible>
          <q-collapsible label="Молоко">
            <div>
              <q-list highlight>
                <q-list-header>Сегодня</q-list-header>
                <q-item>

                  <q-item-main label="Market1" />
                  <q-item-side right>
                    0.95
                  </q-item-side>
                </q-item>
                <q-item>
                  <q-item-main label="Market2" />
                  <q-item-side right >
                    1.10
                  </q-item-side>
                </q-item>
                <q-item-separator />
                <q-list-header>Предыдущая покупка</q-list-header>
                <q-item>
                  <q-item-main label="Market1" />
                  <q-item-side right >
                    0.94
                  </q-item-side>
                </q-item>
              </q-list>
            </div>
          </q-collapsible>

        </q-collapsible>

        <q-collapsible indent icon="schedule" label="Акции">
          <div>Товар не на акции</div>
        </q-collapsible>

      </q-collapsible>

      <q-collapsible indent icon="favorite_border" label="Отложенные товары">
        <q-collapsible label="Сегодня">
          <div>Шампунь</div>
        </q-collapsible>
        <q-collapsible label="Вчера">
          <div>Зубочистки</div>
        </q-collapsible>
      </q-collapsible>

      <q-collapsible indent icon="local_shipping" label="Товары с доставкой">
        <div>
          <q-list highlight>
            <q-item>
              <q-item-main label="Питьевая вода" />
              <q-item-side right>
                0.45
              </q-item-side>
            </q-item>
            <q-item>
              <q-item-main label="Печенье" />
              <q-item-side right>
                0.25
              </q-item-side>
            </q-item>
          </q-list>
        </div>
      </q-collapsible>
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: 'Costs',
  data () {
    return {
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Dessert (100g serving)',
          align: 'left',
          field: 'name',
          sortable: true,
          classes: 'my-class',
          style: 'width: 500px'
        }
      ],
      tableData: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: '14%',
          iron: '1%'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
