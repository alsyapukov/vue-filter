import Vue from 'vue'
import App from './App.vue'
import router from './routes/'
import store from './store/'
import VueLocalStorage from 'vue-localstorage'
import axios from './axios'

Vue.use(VueLocalStorage)

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
