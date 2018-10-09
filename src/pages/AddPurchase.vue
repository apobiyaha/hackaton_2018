<template>
  <q-page>
      <div class="code">
        <div class="code-window">
          <div class="row justify-between">
            <div class="corner-left-top"></div>
            <div class="corner-right-top"></div>
          </div>
          <div class="row code">
            <img :class="{'code-image': !isCodeVisible, 'code-image-op1': isCodeVisible}" src="../assets/img/code.png" alt="">
          </div>
          <div class="row justify-between">
            <div class="corner-left-bottom"></div>
            <div class="corner-right-bottom"></div>
          </div>
        </div>
        <div class="row justify-center">
          <h4>Покупок в корзине: <b>{{counter}}</b></h4>
        </div>
        <div class="row" v-if="isShot">
          <div class="row q-ma-sm">
            Наименование: &nbsp;
            <b>{{products[currentShot].name}}</b>
          </div>
          <div class="row q-ma-sm">
            Стоимость:&nbsp;
            <b>{{products[currentShot].cost}}</b>
          </div>
        </div>
        <div class="row justify-center" v-if="isShot">
          <q-btn color="negative"
                 round
                 size="3rem"
                 class="q-ma-sm"
                 @click="returnProduct">
            <span style="font-size: 1.2rem;
                         font-weight: bold">
                Отклонить
            </span>
          </q-btn>
          <q-btn color="positive"
                 round
                 size="3rem"
                 class="q-ma-sm"
                 @click="purchaseProduct">
            <span style="font-size: 1.2rem;
                        font-weight: bold">
                В корзину
            </span>
          </q-btn>
        </div>
        <div class="row shot-button justify-center" v-if="!isShot">
          <q-btn  round
                  size="3rem"
                  color="primary"
                  icon="add_shopping_cart"
                  @click="countShots">
          </q-btn>
        </div>
      </div>
  </q-page>
</template>

<script>
import products from '../products/list'
export default {
  name: 'AddPurchase',
  data () {
    return {
      isCodeVisible: false,
      counter: 0,
      currentShot: -1,
      isShot: false,
      products: products
    }
  },
  watch: {
    currentShot: function () {
      if (this.currentShot >= products.length) {
        this.currentShot = 0
      }
    }
  },
  methods: {
    returnProduct () {
      this.isShot = false
    },
    purchaseProduct () {
      this.counter += 1
      this.isShot = false
    },
    countShots () {
      this.isCodeVisible = true
      setTimeout(function () {
        this.isCodeVisible = false
        this.currentShot += 1
        this.isShot = !this.isShot
      }.bind(this), 500)
    }
  }
}
</script>

<style scoped>
  h4 {
    color: #EB3E4A;
  }
  .code {
    height: 150px;
    width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
  .shot-button{
    margin-top: 10px;
  }
  .code-window{
    height: 230px;
    width: 400px;
    margin-top: 30px;
    border-radius: 10px;
    background-color: #FBF2EF;
  }
  .code-image{
    height: 180px;
    width: 380px;
    margin-left: 10px;
    opacity: 0.05;
  }
  .code-image-op1{
    height: 180px;
    width: 380px;
    margin-left: 10px;
    opacity: 1;
  }
.corner-left-top{
  width: 20px;
  height: 20px;
  border-left: firebrick solid 1px;
  border-top: firebrick solid 1px;
  margin: 10px;
}
  .corner-right-top{
  width: 20px;
  height: 20px;
  border-right: firebrick solid 1px;
  border-top: firebrick solid 1px;
  margin: 10px;
}
  .corner-left-bottom{
  width: 20px;
  height: 20px;
  border-left: firebrick solid 1px;
  border-bottom: firebrick solid 1px;
  margin: 10px;
}
  .corner-right-bottom{
  width: 20px;
  height: 20px;
  border-right: firebrick solid 1px;
  border-bottom: firebrick solid 1px;
  margin: 10px;
}
</style>
