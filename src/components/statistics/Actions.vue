<template>
<div>
  <q-list>
  <q-collapsible icon="explore" label="Магазины">
    <div>
      <q-list highlight>
        <q-item>
          <q-item-side>
            <q-item-tile icon="chat_bubble" color="green">
            </q-item-tile>
          </q-item-side>
          <q-item-main label="Market1" />
          <q-item-side right>
            <q-item-tile icon="star" color="orange" />
          </q-item-side>
        </q-item>
        <q-item-separator />
        <q-item>
          <q-item-side icon="chat_bubble" color="green" />
          <q-item-main label="Market2" />
          <q-item-side right icon="star_half" color="orange"/>
        </q-item>
        <q-item-separator />
        <q-item>
          <q-item-side icon="chat_bubble" color="green"/>
          <q-item-main label="Market3" />
          <q-item-side right icon="star_border" color="orange"/>
        </q-item>
      </q-list>
    </div>
  </q-collapsible>
  <q-collapsible icon="where_to_vote" label="Услуги">
    <div>
      Content
    </div>
  </q-collapsible>
  <q-collapsible icon="shopping_cart" label="Товары">
    <div>
      <q-list highlight>
        <q-item>
          <q-item-side>
            <q-item-tile icon="chat_bubble" color="green">
            </q-item-tile>
          </q-item-side>
          <q-item-main label="Картофель" />
          <q-item-side right>
            2.50
          </q-item-side>
        </q-item>
        <q-item-separator />
        <q-item>
          <q-item-side icon="chat_bubble" color="green" />
          <q-item-main label="Свинина" />
          9.30
        </q-item>
        <q-item-separator />
        <q-item>
          <q-item-side icon="chat_bubble" color="green"/>
          <q-item-main label="Сметана" />
          1.45
        </q-item>
      </q-list>
    </div>
  </q-collapsible>
  </q-list>
</div>
</template>

<script>
export default {
  name: 'Actions'
}
</script>

<style scoped>

</style>
