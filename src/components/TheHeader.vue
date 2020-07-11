<template>
  <div class="the-header" >
    <div class="header-logo" >
      <i class="el-icon-camera"></i>
      <span>  {{Name}}</span>
    </div>

     <div v-if="username != null && username !==''" style="margin-left: 1000px">
      <el-dropdown  >
          <span class="spanStyle">
               欢迎你! 用户：
<!--                <img v-if="avator" :src="avator" style="width: 50px;height:50px;"/>-->
               {{username}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
        <el-dropdown-menu slot="dropdown" >
          <el-dropdown-item @click.native="signout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>




  </div>
</template>

<script>


import { navMsg } from '../assets/data/header'
import {mapGetters} from "vuex";

export default {
  name: 'the-header',
  data () {
    return {
      Name: '基于情感分析的智慧养老系统',
      navMsg: [], // 导航栏
    }
  },
  computed: {
    ...mapGetters([
      'userId',
      'username',
      'avator',
    ])
  },
  created () {
    this.navMsg = navMsg
      console.log("this.avator")

      console.log(this.avator)
  },
  mounted () {

  },

  methods: {


      goPage(path) {
          this.$router.push({path: path})
      },

      //退出登录
      signout(){
          this.$message('退出成功')
          this.$router.push({path: '/'})
      },
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/the-header.scss';
</style>
