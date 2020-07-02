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
    <el-menu mode="horizontal" class="navbar" active-text-color="#30a4fc"  active-background-color="#50b9ce" >
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
