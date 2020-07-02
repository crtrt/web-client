<template>
    <div class="body">
            <el-table
                    :data="tableData"
                    :cell-style="{padding:'5px px 5px 0'}"
                    stripe
                    style="width: 100%;text-align: center;max-height: 99%;overflow-y: auto">
                <el-table-column
                        prop="date"
                        label="日期"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="地址">
                </el-table-column>


                <el-table-column width="100">
                    <template slot-scope="scope" >
                        <el-button  size="mini"  type="primary" @click="update(scope.row.name)">修改</el-button>
                    </template>
                </el-table-column>



                <el-table-column width="100">
                    <template slot-scope="scope" >
                        <el-button  size="mini"  type="warning" @click="delete(scope.row.name)">删除</el-button>
                    </template>
                </el-table-column>


                <el-table-column width="100">
                    <template slot-scope="scope" >
                        <el-button  size="mini"  type="success" @click="detail(scope.row.name)">详情</el-button>
                    </template>
                </el-table-column>
            </el-table>

        <div style="display: flex; flex-direction: row-reverse;float:right; margin-right: 3%;padding-top: 10px">
            <el-button class="bottomButton" size="mini" type="primary" @click="dialogRegister">添加人员</el-button>
        </div>

        <el-dialog
                v-if="isInit"
                title="添加人员"
                :visible.sync="dialogRegister">
            <el-form :model="registerForm"  ref="registerForm" label-width="80px" >
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
    export default {
        name: "OldManage",
        data(){
            return{
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }],

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
            }
        },


        mounted() {
            // 先登录


        },

        methods: {

            getInfo(){

            },
            update (name) {
                console.log(name)
            },

            delete(){

            },
            detail(){

            }
        },




    }
</script>

<style scoped>

</style>