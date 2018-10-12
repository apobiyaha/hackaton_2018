<template>
  <q-layout-header>
    <q-toolbar color="negative" :inverted="$q.theme === 'ios'">
      <q-btn @click="openDrawer" aria-label="Menu" flat dense round>
        <q-icon name="menu" color="neutral"/>
      </q-btn>

      <q-toolbar-title>
        {{ cardNumber }}
      </q-toolbar-title>
    </q-toolbar>
  </q-layout-header>
</template>

<script>
import eventbus from '../../eventbus/eventbus'

export default {
  name: 'Navbar',
  data () {
    return {
      cardNumber: '5555 5555 5555 4444'
    }
  },
  methods: {
    openDrawer () {
      eventbus.$emit('leftDrawerOpen')
    },
    handler (data) {
      this.cardNumber = data
    }
  },
  created () {
    eventbus.$on('setPaymentCard', this.handler)
  }
}
</script>
