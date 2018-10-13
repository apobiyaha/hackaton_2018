<template>
  <q-page>
    <div class="row justify-center q-mt-lg">
      <q-btn round v-for="service in services"
             :icon="service.icon"
             :key="service.name"
             :color="service.color"
             size="2.5rem"
             class="q-ma-md"
             @click="goTo(service)">
        <span style="font-size: 1.0rem">{{service.name}}</span>
      </q-btn>
    </div>
    <q-modal ref="cardBalance" class="maximized" :content-css="{ padding: '50px' }">
      <h4>Баланс карты состоявляет:</h4>
      <p>12345 RUB</p>
      <q-btn color="primary" class="full-width" @click="$refs.cardBalance.toggle()">
        Закрыть
      </q-btn>
    </q-modal>
  </q-page>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      services: [
        {
          name: 'Списки',
          icon: 'view_list',
          color: 'primary',
          path: '/app/add-item'
        },
        {
          name: 'Акционы',
          icon: 'shop_two',
          color: 'deep-orange',
          path: '/app/sale'
        },
        {
          name: 'Скидочные карты',
          icon: 'card_giftcard',
          color: 'brown 5',
          path: '/app/discount-cards'
        },
        {
          name: 'Баланс',
          icon: 'local_atm',
          color: 'amber'
        },
        {
          name: 'Настройки',
          icon: 'settings',
          color: 'purple',
          path: '/app/settings'
        },
        {
          name: ' Выход .',
          icon: 'logout',
          color: 'secondary',
          path: '/'
        }
      ]
    }
  },
  methods: {
    goTo (service) {
      switch (service.name) {
        case 'Баланс':
          this.$refs.cardBalance.toggle()
          break
        default:
          this.$router.push(service.path)
      }
    }
  }
}
</script>
