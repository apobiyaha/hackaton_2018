<template>
  <q-layout-footer class="layout-footer">
    <q-toolbar :inverted="$q.theme === 'ios'" color="white">
      <q-toolbar-title class="row justify-around">
        <q-btn round color="negative" icon="home" @click="$router.push('/app')"/>
        <q-btn round color="negative" icon="add_a_photo" @click="$router.push('/app/addPurchase')"/>
        <q-btn round color="negative" icon="shopping_cart" @click="$router.push('/app/bucket')"/>
        <q-btn round color="negative" icon="image_aspect_ratio" @click="$router.push('/app/qr')"/>
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
