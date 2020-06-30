<template>
  <div class="the-header" >
    <div class="header-logo" @click="goHome">
      <i class="el-icon-camera"></i>
      <span>  {{Name}}</span>
    </div>
<!--    <ul class="navbar" ref="change">-->
<!--      <li  v-for="item in navMsg" :key="item.path" @click="goPage(item.path, item.name)">-->
<!--        {{item.name}}-->
<!--      </li>-->
<!--    </ul>-->
    <el-menu mode="horizontal" class="navbar" active-text-color="#30a4fc" >
      <el-menu-item v-for="item in navMsg" :key="item.path" @click.native="goPage(item.path)">
        <span slot="title">{{ item.name }}</span>
      </el-menu-item>
    </el-menu>




  </div>
</template>

<script>


import { navMsg } from '../assets/data/header'

export default {
  name: 'the-header',
  data () {
    return {
      Name: '基于情感分析的智慧养老系统',
      navMsg: [], // 导航栏
    }
  },

  created () {
    this.navMsg = navMsg
  },
  mounted () {
    document.querySelector('#user').addEventListener('click', function (e) {
      document.querySelector('.menu').classList.add('show')
      e.stopPropagation()// 关键在于阻止冒泡
    }, false)
    // 点击“菜单”内部时，阻止事件冒泡。(这样点击内部时，菜单不会关闭)
    document.querySelector('.menu').addEventListener('click', function (e) {
      e.stopPropagation()
    }, false)
    document.addEventListener('click', function () {
      document.querySelector('.menu').classList.remove('show')
    }, false)
  },

  methods: {

    goHome () {
      this.$router.push({path: '/'})
    },
    goPage (path) {
      // document.querySelector('.menu').classList.remove('show')

      // if (!this.loginIn && path === '/my-music') {
      //   this.notify('请先登录', 'warning')
      // } else {
        this.$router.push({path: path})
      // }
    },



  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/the-header.scss';
</style>
