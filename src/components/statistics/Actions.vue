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
          <q-item-main label="Евроопт" />
          <q-item-side right>
            <q-item-tile icon="chat_bubble" color="green" />
          </q-item-side>
        </q-item>
        <q-item-separator />
        <q-item>
          <q-item-side icon="chat_bubble" color="green" />
          <q-item-main label="Алми" />
          <q-item-side right icon="chat_bubble" />
        </q-item>
        <q-item-separator />
        <q-item>
          <q-item-side icon="chat_bubble" color="green"/>
          <q-item-main label="Гиппо" />
        </q-item>
      </q-list>
    </div>
  </q-collapsible>
  <q-collapsible icon="perm_identity" label="Люди">
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
            <q-item-tile icon="chat_bubble" color="green" />
          </q-item-side>
        </q-item>
        <q-item-separator />
        <q-item>
          <q-item-side icon="chat_bubble" color="green" />
          <q-item-main label="Свинина" />
          <q-item-side right icon="chat_bubble" />
        </q-item>
        <q-item-separator />
        <q-item>
          <q-item-side icon="chat_bubble" color="green"/>
          <q-item-main label="Сметана" />
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
