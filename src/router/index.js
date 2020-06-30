import Vue from 'vue'
import Router from 'vue-router'
// import LoginIn from '@/pages/LoginIn'
// import SignUp from '@/pages/SignUp'
import Index from '@/pages/Index'


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
    // {
    //   path: '/login-in',
    //   name: 'login-in',
    //   component: LoginIn
    // },
    // {
    //   path: '/sign-up',
    //   name: 'sign-up',
    //   component: SignUp
    // },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    // {
    //   path: '/song-list',
    //   name: 'song-list',
    //   component: SongList
    // },
    //
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
