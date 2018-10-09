<template>
  <div class="card" :class="{'card-active': isActive }">
    <div class="row justify-end">
      <div :class="['brand-base', brand]">
      </div>
    </div>
    <div class="row number">
      {{number}}
    </div>
    <div class="row number justify-around">
      <div class="name">
        {{name}}
      </div>
      <div>
        <q-btn
              round
              color="amber"
              @click="getBalance">
         <span style="font-size: 0.6rem">{{balance}} {{currency}}</span>
        </q-btn>
      </div>
    </div>
  </div>
</template>

<script>
import eventbus from '../../eventbus/eventbus'

export default {
  name: 'card',
  props: {
    brand: {
      default: 'visa'
    },
    number: {
      default: '4111 1111 1111 1111'
    },
    isActive: {
      default: false
    },
    name: {
      default: 'NoName'
    },
    balance: {
      default: '0'
    },
    currency: {
      default: 'RUB'
    }
  },
  methods: {
    getBalance () {
      eventbus.$emit('get-balance')
    }
  }
}
</script>

<style scoped>
  .card {
    margin: 10px;
    border-radius: 10px;
    width: 250px;
    height: 150px;
    background-color: #f1f1f1;
  }
  .card-active {
    border: limegreen solid 1px;
  }
  .brand-base {
    display: inline-block;
    width: 50px;
    height: 32px;
    margin-top: 10px;
    margin-right: 10px;
    background-size: contain;
  }
  .visa {
    background-image: url('../../assets/img/vendors/visa.svg');
  }
  .maestro{
    background-image: url('../../assets/img/vendors/maestro.svg');
  }
  .mastercard{
    background-image: url('../../assets/img/vendors/mastercard.svg');
  }
  .number {
    color: gray;
    margin-left: 30px;
    margin-top: 15px;
    font-weight: bold;
    font-size: 1.1rem;
  }
  .name {
    font-size: 0.8rem;
  }
</style>
