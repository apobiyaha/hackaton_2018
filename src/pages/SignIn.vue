<template>
  <q-layout>
      <q-page-container id="page-container" class="row justify-center">
          <q-page v-if="state === 'SignIn'">
              <div class="avatar">
                  <img src="../assets/img/Avatar.png" width="100px">
              </div>
              <div class="login-form">
                  <h3 style="text-align: center">Вход в сервис</h3>
                  <div>
                      <label>Имя пользователя</label>
                      <q-input type="text" @focus="wrongField = false" :class="setErrorClass" v-model="login"></q-input>
                  </div>
                  <div>
                      <label>Пароль</label>
                      <q-input type="password" @focus="wrongField = false" :class="setErrorClass" v-model="password"></q-input>
                  </div>
                  <div>
                      <q-btn class="full-width btn" color="primary" @click="signIn">Войти</q-btn>
                  </div>
                  <div>
                      <a href="#" @click="state = 'Registration'">Еще нет аккаунта?</a>
                  </div>
              </div>
          </q-page>

          <q-page v-if="state === 'Registration'">
            <div class="avatar">
              <img src="../assets/img/Avatar.png" width="100px">
            </div>
            <div class="login-form">
              <h3 style="text-align: center">Регистрация</h3>
              <div>
                <label>Имя пользователя</label>
                <q-input type="text" @focus="wrongField = false" :class="setErrorClass" v-model="login"></q-input>
              </div>
              <div>
                <label>Пароль</label>
                <q-input type="password" @focus="wrongField = false" :class="setErrorClass" v-model="password"></q-input>
              </div>
              <div>
                <q-btn class="full-width btn" color="primary" @click="registration">Зарегистрировать</q-btn>
              </div>
              <div>
                <a href="#" @click="state = 'SignIn'">У меня есть аккаунт</a>
              </div>
            </div>
          </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'SignIn',
  data () {
    return {
      state: 'SignIn',
      login: '',
      password: '',
      authDataBase: [],
      wrongField: false
    }
  },
  watch: {
    state (newValue, oldValue) {
      if (newValue !== oldValue) {
        this.login = ''
        this.password = ''
        this.wrongField = false
      }
    }
  },
  computed: {
    setErrorClass () {
      return { 'error-input': this.wrongField }
    }
  },
  methods: {
    signIn () {
      JSON.parse(JSON.stringify(this.authDataBase)).forEach(account => {
        if (account.login === this.login && account.password === this.password) {
          this.wrongField = false
          this.$router.push('/app')
        } else {
          this.wrongField = true
        }
      })
    },
    registration () {
      if (this.login !== '' && this.password !== '' && this.login.length >= 8 && this.password.length >= 8) {
        let account = {
          login: this.login,
          password: this.password
        }
        this.authDataBase.push(account)
        window.localStorage.setItem('authDataBase', JSON.stringify(this.authDataBase))
        this.state = 'SignIn'
      } else {
        this.wrongField = true
      }
    }
  },
  created () {
    this.authDataBase = JSON.parse(window.localStorage.getItem('authDataBase')) || []
  }
}
</script>

<style scoped>
  .avatar {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .login-form {
    position: relative;
    top: 55%;
    transform: translate(0, -50%);
    padding: 50px;
    width: 400px;
  }
  .login-form div {
    margin-bottom: 20px;
  }
  .btn {
    margin-top: 40px;
  }
  label {
    font-weight: bold;
    font-size: 14px;
    color: gray;
  }
  a {
    color: #027BE2;
    text-decoration: none;
  }
  .error-input {
    border-bottom: 2px solid #DA2828;
  }
</style>
