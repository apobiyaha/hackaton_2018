<template>
  <q-layout view="lHh Lpr lFf">
    <q-header></q-header>
    <q-sidebar></q-sidebar>
    <q-footer></q-footer>

    <q-page-container id="page-container">
      <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" :duration="{ enter: 300, leave: 300 }">
        <router-view/>
      </transition>
    </q-page-container>

  </q-layout>
</template>

<script>
import QHeader from '../components/navigation/Header'
import QSidebar from '../components/navigation/Sidebar'
import QFooter from '../components/navigation/Footer'

export default {
  name: 'MyLayout',
  components: { QHeader, QSidebar, QFooter }
}
</script>
