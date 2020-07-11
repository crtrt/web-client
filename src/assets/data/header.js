// 左侧导航栏
const navMsg = [{
  name: '首页',
  path: '/Home'
},

  {
  name: '老人',
  path: '/OldManage'
},
  {
    name: '摄像头',
    sub:[
      {
        name:'房间摄像头',
        path:'/Camera',
        index:1
      }
    ]
  },

  {
    name: '工作人员',
    path: '/Staff'
  },

  {
    name: '义工',
    path: '/Volunteer'
  },
  {
    name: '管理员',
    path: '/AdminList'
  },
  {
    name: '设置',
    path: '/Setting'
  },

]




export {
  navMsg,
}
