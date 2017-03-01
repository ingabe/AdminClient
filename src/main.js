// import '../src/style.scss';
import 'bootstrap/dist/css/bootstrap.css'
import 'vue-material/dist/vue-material.css'
import './vue-plugins'

import Vue from 'vue'
import VueMaterial from 'vue-material'
import App from './App'
import router from './routes'
import store from './store'
import VueI18n from 'vue-i18n'
import {locales} from './translation/translations'

Vue.use(VueMaterial)
Vue.use(VueI18n)

Vue.config.lang = 'en'

Object.keys(locales).forEach(function (lang) {
    Vue.locale(lang, locales[lang])
})

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App, VueMaterial }
})
