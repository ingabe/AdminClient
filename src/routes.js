import VueRouter from 'vue-router'

import Admin from 'components/Admin'
import Home from 'components/Home'
import TenantResources from 'components/TenantResources'
import ChangePassword from 'components/ChangePassword'
import Groups from 'components/Groups'
import Agents from 'components/Agents'

// Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Admin,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: '/TenantResources',
        name: 'TenantResources',
        component: TenantResources,
        children: [
          {
            path: 'Groups',
            name: 'Groups',
            component: Groups
          },
          {
            path: 'Agents',
            name: 'Agents',
            component: Agents
          }
        ]
      },
      {
        path: '/ChangePassword',
        name: 'ChangePassword',
        component: ChangePassword
      }
    ]
  },
  {
    path: '/ChangePassword2',
    component: ChangePassword
  },
  {
    path: '*',
    redirect: { name: 'Home' }
  }]

export default new VueRouter({
  mode: 'history',
  routes
})
