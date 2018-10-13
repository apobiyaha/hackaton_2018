<template>
  <q-page>
    <div class="row justify-center q-mt-lg">
      <div class="d-card" v-for="card in discountCards" :key="card.name">
        <div>
          {{card.name}}
        </div>
        <q-icon size="4rem" :name="card.logo"/>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'DiscountCards',
  data () {
    return {
      discountCards: [
        {
          name: 'market1',
          logo: 'devices'
        },
        {
          name: 'market2',
          logo: 'shopping_cart'
        },
        {
          name: 'market3',
          logo: 'store'
        },
        {
          name: 'market4',
          logo: 'work_outline'
        },
        {
          name: 'market5',
          logo: 'weekend'
        }
      ]
    }
  }
}
</script>

<style scoped>

  .d-card {
    border-radius: 5px;
    background-color: deepskyblue;
    height: 100px;
    width: 180px;
    margin: 10px;
    color: white;
    padding: 5px;
  }
  .d-card:hover {
    -webkit-box-shadow: 0px 10px 20px -6px rgba(50,205,50,1);
    -moz-box-shadow: 0px 10px 20px -6px rgba(50,205,50,1);
    box-shadow: 0px 10px 20px -6px rgba(50,205,50,1);
  }

</style>
