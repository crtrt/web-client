<template>
    <div class="info">
        <p class="title">编辑老人信息</p>
        <hr/>
        <div class="personal">
            <el-form :model="infoForm"  ref="infoForm" label-width="80px" >
                <el-form-item label="序号" prop="old_id" class="login-item" >
                    <el-input v-model="infoForm.old_id" placeholder="请输入id" ></el-input>
                </el-form-item>
                <el-form-item label="姓名" prop="username" class="login-item" >
                    <el-input v-model="infoForm.username" placeholder="请输入姓名" ></el-input>
                </el-form-item>
                <el-form-item label="性别" prop="gender" >
                    <el-input v-model="infoForm.gender" placeholder="请输入性别" ></el-input>
                </el-form-item>
                <el-form-item prop="birthday" label="生日">
                    <el-date-picker type="date" placeholder="选择生日" value-format="yyyy-MM-dd"  v-model="infoForm.birthday" style="width: 100%;"></el-date-picker>
                </el-form-item>
                <el-form-item label="联系电话" prop="phone" >
                    <el-input v-model="infoForm.phone" placeholder="请输入联系电话" ></el-input>
                </el-form-item>
                <el-form-item label="身份证号" prop="id_card" >
                    <el-input v-model="infoForm.id_card" placeholder="请输入身份证号"  ></el-input>
                </el-form-item>
                <el-form-item label="房间号" prop="room_number" >
                    <el-input v-model="infoForm.room_number" placeholder="请输入房间号" ></el-input>
                </el-form-item>
                <el-form-item label="第一监护人" prop="fguardian_name" >
                    <el-input v-model="infoForm.fguardian_name" placeholder="请输入监护人名字"  ></el-input>
                </el-form-item>
                <el-form-item label="第一监护人关系" prop="fguardian_relationship" >
                    <el-input v-model="infoForm.fguardian_relationship" placeholder="请输入关系"  ></el-input>
                </el-form-item>
                <el-form-item label="第一监护人电话" prop="fguardian_phone" >
                    <el-input v-model="infoForm.fguardian_phone" placeholder="请输入电话"  ></el-input>
                </el-form-item>
                <el-form-item label="第一监护人微信" prop="fguardian_wechat" >
                    <el-input v-model="infoForm.fguardian_wechat" placeholder="请输入微信"  ></el-input>
                </el-form-item>
                <el-form-item label="第二监护人" prop="sguardian_name" >
                    <el-input v-model="infoForm.sguardian_name" placeholder="请输入监护人名字"  ></el-input>
                </el-form-item>
                <el-form-item label="第二监护人关系" prop="sguardian_relationship" >
                    <el-input v-model="infoForm.sguardian_relationship" placeholder="请输入关系"  ></el-input>
                </el-form-item>
                <el-form-item label="第二监护人电话" prop="sguardian_phone" >
                    <el-input v-model="infoForm.sguardian_phone" placeholder="请输入电话"  ></el-input>
                </el-form-item>
                <el-form-item label="第二监护人微信" prop="sguardian_wechat" >
                    <el-input v-model="infoForm.sguardian_wechat" placeholder="请输入微信"  ></el-input>
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
    import {getOldInfo, updateOldInfo} from "@/api";
    import {mapGetters} from "vuex";

    export default {
        name: "InfoEdit",
        data(){
            return{
                id:'',

                infoForm:{
                    old_id:'',
                    username: '',
                    gender:'',
                    phone:'',
                    id_card:'',
                    birthday:'',
                    room_number:'',
                    fguardian_name:'',

                    fguardian_relationship:'',
                    fguardian_phone:'',
                    fguardian_wechat:'',
                    sguardian_name:'',
                    sguardian_relationship:'',
                    sguardian_phone:'',
                    sguardian_wechat:'',
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
            getDetailInfo(old_id){
                console.log("id")
                console.log(old_id)
                let params = new URLSearchParams()
                params.append('old_id', old_id)
                getOldInfo(params)
                    .then(res => {
                        console.log(res)

                        this.infoForm.old_id=old_id
                        this.infoForm.username = res.oldperson.username
                        this.infoForm.gender = res.oldperson.gender
                        this.infoForm.id_card = res.oldperson.id_card
                        this.infoForm.birthday = res.oldperson.birthday
                        this.infoForm.phone = res.oldperson.phone
                        this.infoForm.room_number = res.oldperson.room_number
                        this.infoForm.fguardian_name = res.oldperson.firstguardian_name
                        this.infoForm.sguardian_name = res.oldperson.secondguardian_name
                        this.infoForm.fguardian_relationship = res.oldperson.firstguardian_relationship
                        this.infoForm.fguardian_phone = res.oldperson.firstguardian_phone
                        this.infoForm.fguardian_wechat = res.oldperson.firstguardian_wechat
                        this.infoForm.sguardian_relationship = res.oldperson.secondguardian_relationship
                        this.infoForm.sguardian_phone = res.oldperson.secondguardian_phone
                        this.infoForm.sguardian_wechat = res.oldperson.secondguardian_wechat
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

                params.append('old_id', this.infoForm.old_id)
                params.append('username', this.infoForm.username)
                params.append('gender', this.infoForm.gender)
                params.append('phone', this.infoForm.phone)
                params.append('id_card', this.infoForm.id_card)
                params.append('birthday', this.infoForm.birthday)
                params.append('room_number', this.infoForm.room_number)
                params.append('fguardian_name', this.infoForm.fguardian_name)
                params.append('sguardian_name', this.infoForm.sguardian_name)

                params.append('fguardian_relationship', this.infoForm.fguardian_relationship)
                params.append('fguardian_phone', this.infoForm.fguardian_phone)
                params.append('fguardian_wechat', this.infoForm.fguardian_wechat)
                params.append('sguardian_relationship', this.infoForm.sguardian_relationship)
                params.append('sguardian_phone', this.infoForm.sguardian_phone)
                params.append('sguardian_wechat', this.infoForm.sguardian_wechat)

                params.append('id', this.userId)

                updateOldInfo(params)
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
        padding: 30px;
        margin: 30px 10%;
    }
</style>
