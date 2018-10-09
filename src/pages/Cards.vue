<template>
  <q-page>
    <div class="row justify-center" v-for="card in cards" :key="card.name">
      <card  :brand="card.brand"
             :number="card.number"
             :is-active="card.active"
             :name="card.name"
             :balance="card.balance"
             @get-balance="getBalanceRandom(card)"
             :currency="card.currency">
      </card>
    </div>
    <div class="row justify-center">
      <q-btn class="add-card"
        size="1.1rem"
        icon="add_circle_outline">
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
    getBalanceRandom (card) {
      this.cards[card].balance = Math.random() * (999 - 50) + 50
      console.log(card)
    }
    // setActive (card) {
    //   this.cards.card.active = true;
    // }
  }

}
</script>

<style scoped>
.add-card {
  margin: 10px;
  border-radius: 10px;
  width: 250px;
  height: 150px;
  background-color: #f1f1f1;
}
</style>
