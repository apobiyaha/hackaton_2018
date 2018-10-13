<template>
  <q-page>
    <div class="row justify-center" v-for="(card, index) in cards" :key="index">
      <card  :brand="card.brand"
             :number="card.number"
             :is-active="card.active"
             :name="card.name"
             :balance="card.balance"
             @click.native="setActiveCard(index)"
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
import eventbus from '../eventbus/eventbus'

export default {
  name: 'Cards',
  components: { Card },
  data () {
    return {
      cards: [
        {
          brand: 'mastercard',
          number: '5555 5555 5555 4444',
          name: 'my salary card',
          currency: 'RUB',
          balance: '123',
          active: true
        },
        {
          brand: 'maestro',
          number: '6011 1111 1111 1117',
          name: 'my second card',
          currency: 'USD',
          balance: '12',
          active: false
        },
        {
          brand: 'visa',
          number: '4111 1111 1111 1111',
          name: 'top secret card',
          currency: 'EUR',
          balance: '111',
          active: false
        }
      ]
    }
  },
  methods: {
    setActiveCard (index) {
      for (let i = 0; i < this.cards.length; i += 1) {
        this.cards[i].active = false
      }
      this.cards[index].active = true
      eventbus.$emit('setPaymentCard', this.cards[index].number)
    }
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
