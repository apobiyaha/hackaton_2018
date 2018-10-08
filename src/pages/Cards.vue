<template>
  <q-page>
    <div class="row justify-center" v-for="card in cards" :key="card">
      <card  :brand="card.brand"
             :number="card.number"
             :is-active="card.active"
             :name="card.name"
             :balance="card.balance"
             :currency="card.currency"
             @click="setActive(card)">
      </card>
    </div>
    <div class="row justify-center">
      <q-btn
        size="1.1rem"
        color="primary"
        icon="add_circle_outline"
        @click="countShots">
        <span style="font-size: 0.6rem">Add card</span>
      </q-btn>
    </div>
  </q-page>
</template>

<script>
import Card from '../components/card/Card'
export default {
  name: 'Cards',
  components: { Card },
  data () {
    return {
      cards: {
        1: {
          brand: 'mastercard',
          number: '5555 5555 5555 4444',
          name: 'my salary card',
          currency: 'RUB',
          balance: '123',
          active: true
        },
        2: {
          brand: 'maestro',
          number: '6011 1111 1111 1117',
          name: 'my second card',
          currency: 'USD',
          balance: '12',
          active: false
        },
        3: {
          brand: 'visa',
          number: '4111 1111 1111 1111',
          name: 'top secret card',
          currency: 'EUR',
          balance: '111',
          active: false
        }
      }
    }
  },
  methods: {
    // setActive (card) {
    //   this.cards.card.active = true;
    // }
  }
}
</script>

<style scoped>

</style>
