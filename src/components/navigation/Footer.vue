<template>
  <q-layout-footer>
    <q-modal ref="cardBalance" class="minimized" :content-css="{ padding: '50px' }">
      <h4>Баланс карты состоявляет:</h4>
      <p>12345 RUB</p>
      <button class="tertiary" @click="$refs.cardBalance.toggle()">Закрыть</button>
    </q-modal>
    <q-modal ref="QrCode" class="minimized" :content-css="{ padding: '50px' }">
      <img src="../../assets/img/Qr.png" alt="QR">
      <button class="tertiary" @click="$refs.QrCode.toggle()">Закрыть</button>
    </q-modal>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-fab icon="touch_app" direction="left" color="negative">
        <q-fab-action color="negative" class="white" icon="local_atm" @click="$refs.cardBalance.toggle()"/>
        <q-fab-action color="negative" class="white" icon="image_aspect_ratio" @click="$refs.QrCode.toggle()"/>
        <q-fab-action color="negative" class="white" icon="add_a_photo" @click="$router.push('/addPurchase')"/>
        <q-fab-action color="negative" class="white" icon="home" @click="$router.push('/')"/>
      </q-fab>
    </q-page-sticky>
  </q-layout-footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
