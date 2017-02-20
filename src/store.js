import Vuex from 'vuex'
import authModule from './modules/auth/auth.module'

const isProduction = process.env.NODE_ENV === 'development' // 'production'

export default new Vuex.Store({
  modules: {
    auth: authModule
  },
  strict: !isProduction
})
