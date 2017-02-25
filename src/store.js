import Vuex from 'vuex'
import authModule from './modules/auth/auth.module'
import groupsModule from './modules/groups/groups.module'

const isProduction = process.env.NODE_ENV === 'production'

export default new Vuex.Store({
  modules: {
    auth: authModule,
    groups: groupsModule
  },
  strict: !isProduction
})
