import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/main-styles.css'
import store from './vuex'

Vue.config.productionTip = false
Vue.use(Vuex)
const vuex_store = new Vuex.Store(store)
new Vue({
  store : vuex_store,
  render: h => h(App)
}).$mount('#app')
