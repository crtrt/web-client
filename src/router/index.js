import Vue from 'vue'
import Router from 'vue-router'


import Index from '@/pages/Index'
import Home from '@/pages/Home'
import OldManage from '@/pages/OldPeople/OldManage'
import Setting from '@/pages/Setting'
import AdminList from '@/pages/AdminList'
import Staff from '@/pages/Staff/Staff'
import Volunteer from '@/pages/Volunteer/Volunteer'
import OldInfoDetail from '@/pages/OldPeople/InfoDetail'
import OldInfoEdit from '@/pages/OldPeople/InfoEdit'
import StaffInfoEdit from '@/pages/Staff/InfoEdit'
import VolunteerInfoEdit from '@/pages/Volunteer/InfoEdit'


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
    {
      path: '/AdminList',
      name: 'AdminList',
      component: AdminList,
      meta: {
        keepAlive: true
      }
    },

    {
      path: '/Staff',
      name: 'Staff',
      component: Staff,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/Volunteer',
      name: 'Volunteer',
      component: Volunteer,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/OldPeople/InfoDetail/:id',
      name: 'OldInfoDetail',
      component: OldInfoDetail,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/OldPeople/InfoEdit/:id',
      name: 'OldInfoEdit',
      component: OldInfoEdit,
      meta: {
        keepAlive: true
      }
    },

    {
      path: '/Staff/InfoEdit/:id',
      name: 'StaffInfoEdit',
      component: StaffInfoEdit,
      meta: {
        keepAlive: true
      }
    },


    {
      path: '/Volunteer/InfoEdit/:id',
      name: 'VolunteerInfoEdit',
      component: VolunteerInfoEdit,
      meta: {
        keepAlive: true
      }
    },
  ],
  // scrollBehavior (to, from, savedPosition) {
  //   return { x: 0, y: 0 }
  // }
})
