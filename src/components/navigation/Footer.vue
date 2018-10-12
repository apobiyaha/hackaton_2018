<template>
  <q-layout-footer class="layout-footer">
    <q-toolbar :inverted="$q.theme === 'ios'" color="white">
      <q-toolbar-title class="row justify-around">
        <q-modal ref="cardBalance" class="maximized" :content-css="{ padding: '50px' }">
          <h4>Баланс карты состоявляет:</h4>
          <p>12345 RUB</p>
          <q-btn color="primary" class="full-width" @click="$refs.cardBalance.toggle()">
            Закрыть
          </q-btn>
        </q-modal>

        <q-btn round color="negative" icon="home" @click="$router.push('/')"/>
        <q-btn round color="negative" icon="add_a_photo" @click="$router.push('/addPurchase')"/>
        <q-btn round color="negative" icon="shopping_cart" @click="$router.push('/bucket')"/>
        <q-btn round color="negative" icon="image_aspect_ratio" @click="$router.push('/qr')"/>
        <q-btn round color="negative" icon="local_atm" @click="$refs.cardBalance.toggle()"/>
      </q-toolbar-title>
    </q-toolbar>
  </q-layout-footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
  .layout-footer {
    box-shadow: none;
  }
</style>
