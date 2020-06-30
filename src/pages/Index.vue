<template style="overflow-y: hidden">
    <div class="loginWrapper">
        <div class="back-ground" style="overflow-y: hidden; z-index: -1">
            <img src="../assets/image/index-background.jpg">
        </div>

        <el-tabs class="bd" type="border-card">

            <el-tab-pane label="管理员登录">
                <p class="title">
                    基于情感分析的智慧养老系统
                    <span style="display: inline-block; padding-left: 100%"></span>
                </p>
                <el-form :model="loginForm" :rules="loginRule" ref="loginForm" :label-position="labelPosition">


                    <el-form-item  prop="userName" class="login-item" style="margin: 0">
                        <el-input type="userName" v-model="loginForm.userName" placeholder="账号" @keyup.enter.native="submitForm('loginForm')"></el-input>
                    </el-form-item>
                    <el-form-item prop="pwd" style="margin-top: 20px;margin-bottom: 0px">
                        <el-input v-model="loginForm.pwd" placeholder="密码" type="password" @keyup.enter.native="submitForm('loginForm')"></el-input>
                    </el-form-item>
                    <el-form-item style="margin-top: 20px">
                        <el-button type="primary" @click="submitForm('loginForm')" class="submitBtn" round >登录</el-button>
                    </el-form-item>
                </el-form>
                <el-button type="text" style="display:block;margin:0 auto;margin-top: -10px" @click="dialogRegister=true">注册</el-button>
            </el-tab-pane>
        </el-tabs>


        <el-dialog
                v-if="isInit"
                title="注册"
                :visible.sync="dialogRegister">
            <el-form :model="registerForm" :rules="registerRule" ref="registerForm" label-width="80px" >
                <el-form-item label="用户名" prop="jobNumber" class="login-item">
                    <el-input v-model="registerForm.jobNumber"  placeholder="请输入用户名" @keyup.enter.native="registerform('registerForm')"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password" >
                    <el-input v-model="registerForm.password" placeholder="请输入您的账号密码" type="password" @keyup.enter.native="registerform('registerForm')"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="passwordConfirm" >
                    <el-input v-model="registerForm.passwordConfirm" placeholder="请再次输入密码确认" type="password" @keyup.enter.native="registerform('registerForm')"></el-input>
                </el-form-item>
                <el-form-item label="姓名" prop="name" class="login-item" >
                    <el-input v-model="registerForm.name" placeholder="请输入您的姓名" @keyup.enter.native="registerform('registerForm')"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email" >
                    <el-input v-model="registerForm.email" placeholder="邮箱作为找回密码的唯一途径，请输入常用邮箱，便于密码找回"  @keyup.enter.native="registerform('registerForm')"></el-input>
                </el-form-item>
                <el-form-item label="联系电话" prop="phone" >
                    <el-input v-model="registerForm.phone" placeholder="请输入您的联系电话"  @keyup.enter.native="registerform('registerForm')"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogRegister = false">取 消</el-button>
                <el-button type="primary" @click="registerform('registerForm')">注 册</el-button>
             </span>
        </el-dialog>



    </div>
</template>

<script>

    // import Cookies from 'js-cookie';
    // import Pro from '../api/API_PRO'
    // import API from '../api'
    // import CliFooter from "../components/base/cliFooter";

    export default {
        components: {

        },

        data () {
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.registerForm.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                isInit: false,

                loadingLogin: false,
                labelPosition: 'left',
                loginForm: {
                    userName: '',
                    pwd: ''
                },
                loginRule: {
                    userName: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                        //{ min: 3, max: 10, message: '长度在 3 到 16 个字符', trigger: 'blur' }
                    ],
                    pwd: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                        //{ min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
                    ]
                },


                dialogRegister: false,
                registerForm:{
                    jobNumber: '',
                    password: '',
                    passwordConfirm: '',
                    name: '',
                    unit: '',
                    email: '',
                    phone: '',
                    phone2: '',
                    position:'',
                    job:'',
                },
                registerRule: {
                    jobNumber: [
                        { required: true,  message: '请输入教职工号', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                        // { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
                    ],
                    passwordConfirm:[{
                        required: true, message: '请确认密码', trigger: 'blur'
                    },
                        { validator: validatePass2, trigger: 'blur' }],
                    name:[{
                        required: true, message: '请输入姓名', trigger: 'blur'
                    }],
                    unit:[{
                        required: true, message: '请选择单位', trigger: 'blur'
                    }],
                    position:[{
                        required: true, message: '请选择职务', trigger: 'blur'
                    }],
                    job:[{
                        required: true, message: '请选择职称', trigger: 'blur'
                    }],
                    email:[{
                        required: true, message: '请输入邮箱', trigger: 'blur'
                    }],
                    phone:[{
                        required: true, message: '请输入联系电话', trigger: 'blur'
                    }],
                },

                unitList:[],
                identityList:[],
                isShow : false,
                other: '',
                universitiyList: [],


            }
        },

        mounted() {
            // 先登录
            this.isInit = true;
            this.misLogin();
            this.getUniversity();
            this.tokenLogin();
        },

        methods: {
            async submitForm (loginForm) {
                this.$refs[loginForm].validate((valid) => {
                    if (!valid) {
                        return
                    }
                    this.loadingLogin = true
                })
                let result = await this.$store.dispatch('login', {
                    userid: this.loginForm.userName,
                    password: this.loginForm.pwd
                })
                if (result.code) {
                    if (result.code === 100310) {
                        this.loadingLogin = false
                        alert('密码／用户名不能为空')
                        console.log('密码／用户名不能为空')
                        return
                    } else if (result.code === 300101) {
                        this.loadingLogin = false
                        alert('密码不正确')
                        console.log('密码不正确')
                        return
                    } else if (result.code === 300100) {
                        console.log(result)
                        this.loadingLogin = false
                        alert('用户名不存在！')
                        return
                    } else if(result.code === 300104){
                        console.log(result)
                        this.loadingLogin = false
                        alert('账户无效！')
                        return
                    } else if(result.code === 300108){
                        console.log(result)
                        this.loadingLogin = false
                        alert('此通道不允许非管理员账号登录！')
                        return
                    } else if(result.code === 300109){
                        console.log(result)
                        this.loadingLogin = false
                        alert('不允许此账号类型登录系统！')
                        return
                    } else {
                        console.log(result)
                        return
                    }
                }
                if (result.data.detail.identity.length>0){
                    this.loadingLogin = false
                    this.identityList = result.data.detail.identity
                    this.getSettingCode()

                }
            },

            userLogin(){

            },



            tokenLogin(){


            },

            registerform(registerForm){
                console.log(registerForm)
            },

            /**
             * 请求编码
             * */
            getSettingCode(){
                // let data = {
                //     token: Cookies.get('token'),
                // }
                // API.settingCode(data).then(res => {
                //     if(this.projectType === 2){
                //         Cookies.set('college', [])
                //         Cookies.set('teacher_position', [])
                //     } else {
                //         Cookies.set('college', res.college)
                //         Cookies.set('teacher_position', res.teacher_position)
                //     }
                //     Cookies.set('counsel_category', res.counsel_category)
                //
                //     console.log(this.identityList.length)
                //     let roleType = this.identityList.length === 0 ? 3 : this.identityList[0]
                //
                //     if (roleType === 1) {
                //         this.$router.push({path: `/main/school_admin`})
                //     } else if (roleType === 2) {
                //         this.$router.push({path: `/main/admin`})
                //     } else {
                //         this.$router.push({path: `/main/counseller`})
                //     }
                //     return res
                // }).catch(msg => {
                //     console.log(msg)
                //     alert('编码请求错误，请稍后再试!')
                // })
            },

            /**
             * 请求编码
             * */
            getUniversity(){
                // let data = {
                // }
                // API.settingCode(data).then(res => {
                //
                //     this.universitiyList = res.university
                //
                // }).catch(msg => {
                //     console.log(msg)
                //     alert('编码请求错误，请稍后再试!')
                // })
            },

            clickSelect(){
                console.log('register')
                if(this.registerForm.unit === '其他')
                    this.isShow = true;
                else
                    this.isShow = false;
            }
        }
    }
</script>

<style scoped>
    .back-ground{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }
    .back-ground>img{
        width: 100%;
        height: 100%;
    }

    .bd{
        width: 20rem;
        margin-left: 15%;
        margin-top: 15%;
        min-height: 15rem;
        background-color: white;
        border-radius: 5px;
    }

    .title{
        width:100%;
        text-align: justify;
        height: 2.5rem;
        font-weight:bold;
        font-size: 22px;
    }
    .title:after{
        display: inline-block;
        width: 100%;
        content: '';
    }

    .submitBtn{
        width: 100%;
        border-radius: 0;
        margin-bottom: 0px;
        background-color: #1965d9;
        border-width: 0;
        transition: 1s;
    }


</style>

