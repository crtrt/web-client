<template>
  <div class="info">
<!--    <p class="title">编辑个人资料</p>-->
<!--    <hr/>-->
    <div class="personal">
      <el-form :model="registerForm" class="demo-ruleForm" label-width="80px">
        <el-form-item prop="id" label="id">
          <el-input readonly  placeholder="id" v-model="registerForm.id"></el-input>
        </el-form-item>
        <el-form-item prop="name" label="用户名">
          <el-input v-model="registerForm.name" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password" label="密码">
          <el-input readonly  placeholder="密码" v-model="registerForm.password"></el-input>
        </el-form-item>
        <el-form-item prop="sex" label="性别">
          <el-input  readonly v-model="registerForm.sex" placeholder="性别"></el-input>
        </el-form-item>
        <el-form-item prop="realname" label="真实姓名">
          <el-input v-model="registerForm.realname" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="phone" label="手机">
          <el-input  placeholder="手机" v-model="registerForm.phone" ></el-input>
        </el-form-item>
        <el-form-item prop="mobile" label="电话">
          <el-input  placeholder="手机" v-model="registerForm.mobile" ></el-input>
        </el-form-item>
        <el-form-item prop="email" label="邮箱">
          <el-input v-model="registerForm.email" placeholder="邮箱"></el-input>
        </el-form-item>

      </el-form>
    <div class="btn">
      <div @click="saveMsg()">保存</div>
      <div @click="goback">取消</div>
    </div>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { updateAdminInfo,getAdminInfo } from '../api/index'

export default {
  name: 'info',
  data: function () {
    return {
      registerForm: { // 注册
        id:'',
        name: '',
        password: '',
        realname: '',
        sex: '',
        email: '',
        phone: '',
        mobile:'',
      },

    }
  },
  computed: {
    ...mapGetters([
      'userId'
    ])
  },

  mounted () {
    this.getMsg(this.userId)
  },
  methods: {
    getMsg (id) {

      let params = new URLSearchParams()
      params.append('id', id)
      getAdminInfo(params)
        .then(res => {
          console.log("res")
          console.log(res)
          this.registerForm.id=id
          this.registerForm.name = res.userName
          this.registerForm.password = res.password
          this.registerForm.realname = res.real_NAME
          this.registerForm.sex = res.sex
          this.registerForm.phone = res.phone
          this.registerForm.email = res.email
          this.registerForm.mobile = res.mobile

        })
        .catch(err => {
          console.log(err)
        })
    },
    goback () {
      this.$router.push({path: `/Home`})
      this.$router.go(-1)
    },
    saveMsg () {

      let params = new URLSearchParams()
      params.append('id', this.userId)
      params.append('name', this.registerForm.name)
      params.append('realname', this.registerForm.realname)
      params.append('phone', this.registerForm.phone)
      params.append('email', this.registerForm.email)
      params.append('mobile', this.registerForm.mobile)
      updateAdminInfo(params)
        .then(res => {
          if (res.code === 1) {
            this.showError = false
            this.showSuccess = true
            this.$notify.success({
              title: '编辑成功',
              showClose: true
            })

          } else {
            this.showSuccess = false
            this.showError = true
            this.$notify.error({
              title: '编辑失败',
              showClose: true
            })
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/info.scss';
  .personal{
    margin: 30px 10%;
  }
</style>
