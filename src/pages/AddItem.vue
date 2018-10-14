<template>
  <q-page>
    <h3 class="caption">Составить список покупок</h3>
    <div class="add-block">
      <label>Наименование товара</label>
      <q-input type="text" @focus="wrongField = false" :class="setErrorClass" v-model="item"></q-input>
      <q-btn color="primary" class="full-width add-btn" @click="addItem">Добавить</q-btn>
    </div>

    <p class="warn" v-if="itemList.length === 0">Список пуст</p>

    <q-list v-for="(item, index) in itemList" :key="index" highlight dense>
      <q-item v-touch-swipe.right="handleSwipeToRemoveItem">
        <q-item-main :label="item"/>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: 'AddItem',
  data () {
    return {
      item: '',
      wrongField: false,
      itemList: []
    }
  },
  computed: {
    setErrorClass () {
      return { 'error-input': this.wrongField }
    }
  },
  methods: {
    addItem () {
      if (this.item.length !== 0 && this.item !== '') {
        this.itemList.push(this.item)
        this.item = ''
        window.localStorage.setItem('homeList', JSON.stringify(this.itemList))
      } else {
        this.wrongField = true
      }
    },
    handleSwipeToRemoveItem (obj) {
      let index = this.itemList.findIndex((item) => {
        if (obj.evt.target.innerHTML.indexOf(item) !== -1) {
          return true
        }
      })
      this.itemList.splice(index, 1)
    }
  },
  created () {
    this.itemList = JSON.parse(window.localStorage.getItem('homeList')) || []
  }
}
</script>

<style scoped>
  .add-block {
    width: 80%;
    margin: auto;
  }
  label {
    font-weight: bold;
    font-size: 14px;
    color: gray;
  }
  .add-btn {
    margin: 40px 0;
  }
  .warn {
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    color: gray;
  }
  li {
    width: 100%;
  }
  .error-input {
    border-bottom: 2px solid #DA2828;
  }
</style>
