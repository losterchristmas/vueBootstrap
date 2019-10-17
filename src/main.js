// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import store from './store/store'
Vue.use(axios)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store:store,//使用store
  el: '#app',
  router,
  components: { App }, 
  template: '<App/>'
})
