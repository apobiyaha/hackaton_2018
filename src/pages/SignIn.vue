<template>
  <q-layout view="1Hh Lpr lFf">
      <q-page-container id="page-container" class="row justify-center">
      <q-page v-if="state === 'SignIn'">
        <q-btn @click="$router.push('/app')">Войти</q-btn>
        <q-btn @click="state = 'Registration'">Еще нет аккаунта?</q-btn>
      </q-page>

      <q-page v-if="state === 'Registration'">
        регистрация
        <q-btn @click="state = 'SignIn'">У меня есть аккаунт</q-btn>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'SignIn',
  data () {
    return {
      state: 'SignIn'
    }
  }
}
</script>

<style scoped>

</style>
