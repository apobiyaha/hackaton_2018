<template>
  <q-layout-drawer :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null" v-model="leftDrawerOpen">
    <q-list no-border link inset-delimiter>
      <q-list-header>Выберите действие</q-list-header>

      <q-item @click.native="$router.push('/app')">
        <q-item-side icon="home"/>
        <q-item-main label="Домой" sublabel="Главная страница"/>
      </q-item>

      <q-item @click.native="$router.push('/app/bucket')">
        <q-item-side icon="shopping_cart"/>
        <q-item-main label="Корзина" sublabel="Ваши покупки"/>
      </q-item>

      <q-item @click.native="$router.push('/app/addPurchase')">
        <q-item-side icon="add_a_photo"/>
        <q-item-main label="Добавить покупку" sublabel="Сфотографировать штрихкод"/>
      </q-item>

      <q-item @click.native="$router.push('/app/cards')">
        <q-item-side icon="credit_card"/>
        <q-item-main label="Мои карты" sublabel="Редактировать кредитные карты"/>
      </q-item>

      <q-item @click.native="$router.push('/app/history')">
        <q-item-side icon="subject"/>
        <q-item-main label="История" sublabel="История ваших покупок"/>
      </q-item>

      <q-item @click.native="$router.push('/app/schedule')">
        <q-item-side icon="trending_up"/>
        <q-item-main label="Статистика" sublabel="За последний месяц"/>
      </q-item>

      <q-item @click.native="$router.push('/app/help')">
        <q-item-side icon="help"/>
        <q-item-main label="Помощь" sublabel="Руководство пользователя"/>
      </q-item>
      <q-item @click.native="$router.push('/')">
        <q-item-side icon="logout"/>
        <q-item-main label="Выход" sublabel="Завершить работу с приложением"/>
      </q-item>
    </q-list>
  </q-layout-drawer>
</template>

<script>
import eventbus from '../../eventbus/eventbus'

export default {
  name: 'Sidebar',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    drawerOpenHandler () {
      this.leftDrawerOpen = !this.leftDrawerOpen
    }
  },
  created () {
    eventbus.$on('leftDrawerOpen', this.drawerOpenHandler)
  }
}
</script>
