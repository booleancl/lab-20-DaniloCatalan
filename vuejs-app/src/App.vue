<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <LoginPage v-on:notify="notify" />
  </div>
    
</template>

<script>
import LoginPage from './components/LoginPage.vue'

export default {
  name: 'App',
  created() {
    this.$authService.setAuthenticated(true)
    console.log('App')
  },
  components: {
    LoginPage
  },
  methods: {
    notify(data) {
      console.log('a',data)
    },
    member(data){
      console.log('b',data)
    }
  },
}
</script>

