// import '../src/style.scss';
import 'bootstrap/dist/css/bootstrap.css'
import './vue-plugins'

import Vue from 'vue'
import VueMaterial from 'vue-material'
import App from './App'
import router from './routes'
import store from './store'

Vue.use(VueMaterial)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App, VueMaterial }
})
