<template>
  <q-page>
    <div class="row justify-center q-mt-lg">
      <q-btn round v-for="service in services"
             :icon="service.icon"
             :key="service.name"
             :color="service.color"
             size="2.5rem"
             class="q-ma-md"
              >
        <span style="font-size: 1.0rem">{{service.name}}</span>
      </q-btn>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      services: [
        {
          name: 'Баланс',
          icon: 'local_atm',
          color: 'primary'
        },
        {
          name: 'Покупки',
          icon: 'shop',
          color: 'secondary'
        },
        {
          name: 'Корзина',
          icon: 'shopping_cart',
          color: 'amber'
        },
        {
          name: 'Статистика',
          icon: 'trending_up',
          color: 'brown 5'
        },
        {
          name: 'Акционы',
          icon: 'shop_two',
          color: 'deep-orange'
        },
        {
          name: 'Настройки',
          icon: 'settings',
          color: 'purple'
        },
        {
          name: 'Карточки',
          icon: 'payment',
          color: 'amber'
        },
        {
          name: 'Списки',
          icon: 'view_list',
          color: 'primary'
        }
      ]
    }
  }
}
</script>
