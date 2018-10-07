<template>
  <q-layout-header>
    <q-toolbar color="negative" :inverted="$q.theme === 'ios'">
      <q-btn @click="openDrawer" aria-label="Menu" flat dense round>
        <q-icon name="menu" color="neutral"/>
      </q-btn>

      <q-toolbar-title>
        4111 1111 1111 1111
      </q-toolbar-title>
    </q-toolbar>
  </q-layout-header>
</template>

<script>
import eventbus from '../../eventbus/eventbus'

export default {
  name: 'Navbar',
  methods: {
    openDrawer () {
      eventbus.$emit('leftDrawerOpen')
    }
  }
}
</script>
