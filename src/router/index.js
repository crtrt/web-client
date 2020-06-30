import Vue from 'vue'
import Router from 'vue-router'
// import LoginIn from '@/pages/LoginIn'

import Index from '@/pages/Index'
import Home from '@/pages/Home'
import OldManage from '@/pages/OldManage'
import Setting from '@/pages/Setting'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/404'
    },
    {
      path: '/404',
      component: resolve => require(['../pages/404.vue'], resolve)
    },

    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/OldManage',
      name: 'OldManage',
      component: OldManage,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/Setting',
      name: 'Setting',
      component: Setting,
      meta: {
        keepAlive: true
      }
    },
    // {
    //   path: '/singer-album/:id',
    //   name: 'singer-album',
    //   component: SingerAlbum
    // },

  ],
  // scrollBehavior (to, from, savedPosition) {
  //   return { x: 0, y: 0 }
  // }
})
