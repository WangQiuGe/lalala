import Vue from 'vue'
import Router from 'vue-router'
// 主入口
import transferAccounts from '@/components/transferAccounts'
import accountQuery from '@/components/accountQuery'
import accountAdd from '@/components/accountAdd'
// import accountQueryOne from '@/components/accountQueryOne'
import Main from '@/components/main'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '/accountQuery',
          component: accountQuery
        },
        {
          path: '/accountAdd',
          component: accountAdd
        },
        {
          path: '/transferAccounts',
          component: transferAccounts
        }
      ]

      // component: transferAccounts
      // children: [
      //   {
      //     path: 'service',
      //     component: () => import('@/pages/service')
      //   },
      //   {
      //     path: 'soluation',
      //     component: () => import('@/pages/soluation')
      //   }

      // ]
    }

  ]
})
