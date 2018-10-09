<template>
  <q-layout>
    sss
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'List',
  methods: {
    visibleLayout () {
      this.$q.platform.is.desktop
    }
  },
  created () {
    this.visibleLayout()
  }
}
</script>

<style scoped>

</style>
