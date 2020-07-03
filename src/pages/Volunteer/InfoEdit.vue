<template>
    <div class="info">
        <p class="title">编辑义工信息</p>
        <hr/>
        <div class="personal">
            <el-form :model="infoForm"  ref="infoForm" label-width="80px" >
                <el-form-item label="序号" prop="vol_id" class="login-item" >
                    <el-input v-model="infoForm.vol_id" placeholder="请输入id" ></el-input>
                </el-form-item>
                <el-form-item label="姓名" prop="name" class="login-item" >
                    <el-input v-model="infoForm.name" placeholder="请输入姓名" ></el-input>
                </el-form-item>
                <el-form-item label="性别" prop="gender" >
                    <el-input v-model="infoForm.gender" placeholder="请输入性别" ></el-input>
                </el-form-item>
                <el-form-item prop="birthday" label="生日">
                    <el-date-picker type="date" placeholder="选择生日" value-format="yyyy-MM-dd" v-model="infoForm.birthday"   style="width: 100%;"></el-date-picker>
                </el-form-item>
                <el-form-item label="联系电话" prop="phone" >
                    <el-input v-model="infoForm.phone" placeholder="请输入联系电话" ></el-input>
                </el-form-item>
                <el-form-item label="身份证号" prop="id_card" >
                    <el-input v-model="infoForm.id_card" placeholder="请输入身份证号"  ></el-input>
                </el-form-item>
                <el-form-item label="管理员id" prop="id" >
                    <el-input readonly v-model="infoForm.id"  ></el-input>
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
    import {getVolunteerInfo, updateVolunteerInfo} from "@/api";
    import {mapGetters} from "vuex";

    export default {
        name: "InfoEdit",
        data(){
            return{
                id:'',

                infoForm:{
                    vol_id:'',
                    name: '',
                    gender:'',
                    phone:'',
                    id_card:'',
                    birthday:'',
                    id:'',


                },

            }
        },
        computed: {
            ...mapGetters([
                'userId'
            ])
        },
        mounted() {
            this.id = this.$route.params.id // 获得赋值
            this.getDetailInfo(this.id)
        },
        methods:{

            getDetailInfo(id){
                console.log("id")
                console.log(id)
                let params = new URLSearchParams()
                params.append('vol_id', id)
                getVolunteerInfo(params)
                    .then(res => {
                        console.log(res)

                        this.infoForm.vol_id=id
                        this.infoForm.name = res.volunteer.name
                        this.infoForm.gender = res.volunteer.gender
                        this.infoForm.id_card = res.volunteer.id_card
                        this.infoForm.birthday = res.volunteer.birthday
                        this.infoForm.phone = res.volunteer.phone
                        this.infoForm.id=this.userId
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

                params.append('vol_id', this.infoForm.vol_id)
                params.append('username', this.infoForm.name)
                params.append('gender', this.infoForm.gender)
                params.append('phone', this.infoForm.phone)
                params.append('id_card', this.infoForm.id_card)
                params.append('birthday', this.infoForm.birthday)
                params.append('id', this.userId)

                updateVolunteerInfo(params)
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
            },
        }
    }
</script>


<style lang="scss" scoped>
    @import '../../assets/css/info.scss';
    .personal{
        margin: 50px;
        padding: 30px;
    }
</style>
