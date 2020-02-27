// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import { transferAccountpost } from './axios/api'
import { transferAccountget } from './axios/api'
import { accountQuery } from './axios/api'
import { accountQueryOne } from './axios/api'
import { accountDeleteUser } from './axios/api'
import { accountAddUser } from './axios/api'
import { accountUpdateUser } from './axios/api'

import 'element-ui/lib/theme-chalk/index.css'
import './mock'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$transferAccountpost = transferAccountpost
Vue.prototype.$transferAccountget = transferAccountget
Vue.prototype.$accountQuery = accountQuery
Vue.prototype.$accountQueryOne = accountQueryOne
Vue.prototype.$accountDeleteUser = accountDeleteUser
Vue.prototype.$accountAddUser = accountAddUser
Vue.prototype.$accountUpdateUser = accountUpdateUser

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
