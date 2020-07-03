<template>
    <div class="body">
        <el-table
                :data="tableData"
                :cell-style="{padding:'5px px 5px 0'}"
                stripe
                style="text-align: center;overflow-y: auto">
            <el-table-column
                    prop="client_ID"
                    label="ID"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="userName"
                    label="用户名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="real_NAME"
                    label="真实姓名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="sex"
                    label="性别">
            </el-table-column>
            <el-table-column
                    prop="email"
                    label="邮箱">
            </el-table-column>

            <el-table-column
                    prop="mobile"
                    label="手机">
            </el-table-column>
            <el-table-column
                    prop="phone"
                    label="电话">
            </el-table-column>

        </el-table>


    </div>
</template>

<script>
    import {getAdminList} from "@/api";
    export default {
        name: "AdminList",
        data(){
            return{
                tableData: [],
            }
        },
        mounted(){
            this.getInfo()
        },
        methods:{
            getInfo(){
                let _this = this
                getAdminList()
                    .then(res => {
                        console.log(res)
                        _this.tableData=res;
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        }
    }
</script>

<style scoped>

</style>