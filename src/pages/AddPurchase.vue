<template>
  <q-page>
      <div class="code">
        <div class="code-window">
          <div class="row justify-between">
            <div class="corner-left-top"></div>
            <div class="corner-right-top"></div>
          </div>
          <div class="row code">
            <img  :class="{'code-image': !isCodeVisible, 'code-image-op1': isCodeVisible}" src="../assets/img/code.png" alt="">
          </div>
          <div class="row justify-between">
            <div class="corner-left-bottom"></div>
            <div class="corner-right-bottom"></div>
          </div>
        </div>
        <div class="row justify-center">
          <h4>Покупок в корзине: <b>{{counter}}</b></h4>
        </div>
        <div class="row shot-button justify-center">
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
export default {
  name: 'AddPurchase',
  data () {
    return {
      isCodeVisible: false,
      counter: 0
    }
  },
  methods: {
    countShots () {
      this.isCodeVisible = true
      setTimeout(function () {
        this.isCodeVisible = false
        this.counter += 1
      }.bind(this), 500)
    }
  }
}
</script>

<style scoped>
  h4 {
    color:#027be3;
  }
  .code {
    height: 150px;
    width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
  .shot-button{
    margin-top: 50px;
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
