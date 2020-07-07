<template>
    <div class="body">
        <el-table
                :data="tableData"
                :cell-style="{padding:'5px px 5px 0'}"
                stripe
                style="width: 100%;text-align: center;max-height: 99%;overflow-y: auto">
            <el-table-column
                    prop="id"
                    label="id">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="用户名">
            </el-table-column>
            <el-table-column
                    prop="gender"
                    label="性别">
            </el-table-column>

            <el-table-column
                    prop="phone"
                    label="电话"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="id_card"
                    label="身份证号"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="birthday"
                    label="生日">
            </el-table-column>
            <el-table-column
                    prop="hire_date"
                    label="雇佣时间"
                    width="180">
            </el-table-column>


            <el-table-column width="100"    label="操作">
                <template slot-scope="scope" >
                    <el-button  size="mini"  type="primary" @click="updateVolunteer(scope.row.id)">修改</el-button>
                </template>
            </el-table-column>

            <el-table-column width="100" label="操作">
                <template slot-scope="scope" >
                    <el-button  size="mini"  type="warning" @click="deleteVolunteer(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>


        </el-table>

        <div style="display: flex; flex-direction: row-reverse;float:right; margin-right: 3%;padding-top: 10px">
            <el-button class="bottomButton" size="mini" type="primary" @click="dialogRegister=true">添加人员</el-button>
        </div>

        <el-dialog
                title="添加人员"
                :visible.sync="dialogRegister"
                :modal-append-to-body="false">
            <el-form :model="infoForm"  ref="infoForm" label-width="80px" >

                <el-form-item label="姓名" prop="name" class="login-item" >
                    <el-input v-model="infoForm.name" placeholder="请输入姓名" ></el-input>
                </el-form-item>
                <el-form-item label="性别" prop="gender" >
                    <el-input v-model="infoForm.gender" placeholder="请输入性别" ></el-input>
                </el-form-item>
                <el-form-item prop="birthday" label="生日">
                    <el-date-picker type="date" placeholder="选择生日" v-model="infoForm.birthday" style="width: 100%;"></el-date-picker>
                </el-form-item>
                <el-form-item label="联系电话" prop="phone" >
                    <el-input v-model="infoForm.phone" placeholder="请输入联系电话" ></el-input>
                </el-form-item>
                <el-form-item label="身份证号" prop="id_card" >
                    <el-input v-model="infoForm.id_card" placeholder="请输入身份证号"  ></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogRegister = false">取 消</el-button>
                <el-button type="primary" @click="addPerson(infoForm)">添 加</el-button>
             </span>
        </el-dialog>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import {addVolunteer, deleteVolunteerInfo,getVolunteerList} from "@/api";

    export default {
        name: "Volunteer",

        data(){
            return{
                tableData: [],

                dialogRegister: false,
                infoForm:{
                    name: '',
                    gender:'',
                    phone:'',
                    id_card:'',
                    birthday:'',
                    id:''  //系统管理员id
                },
            }
        },

        computed: {
            ...mapGetters([
                'userId'
            ])
        },
        mounted() {

            this.getInfo()

        },

        methods: {

            getInfo(){
                let _this = this
                getVolunteerList()
                    .then(res => {
                        console.log(res)
                        _this.tableData=res;
                    })
                    .catch(err => {
                        console.log(err)
                    })
            },
            addPerson(infoForm){
                console.log("infoForm")
                console.log(infoForm)
                let d = infoForm.birthday
                let datetime = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()

                let _this = this
                let params = new URLSearchParams()

                params.append('name', infoForm.name)
                params.append('gender', infoForm.gender)
                params.append('id_card', infoForm.id_card)
                params.append('phone', infoForm.phone)
                params.append('birthday', datetime)
                params.append('id', this.userId)


                addVolunteer(params)
                    .then(res => {
                        console.log(res)
                        if (res.code === 1) {
                            _this.$message.success('添加成功')
                            _this.dialogRegister=false
                            this.getInfo()

                        } else {
                            _this.$message.error('添加失败')
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })


            },

            deleteVolunteer(id){
                let _this = this
                let params = new URLSearchParams()
                params.append('vol_id', id)
                deleteVolunteerInfo(params)
                    .then(res => {
                        console.log(res)
                        if (res.code === 1) {
                            _this.$message.success('删除成功')
                            this.getInfo()

                        } else {
                            _this.$message.error('删除成功')
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })

            },
            updateVolunteer(id) {
                this.$router.push({path: `/Volunteer/InfoEdit/${id}`})
                this.$router.go(0)
            },


        },




    }
</script>

<style scoped>

</style>