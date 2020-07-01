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
                <el-button type="primary" size="mini">修改</el-button>
            </el-table-column>



            <el-table-column width="100">
                <el-button type="warning" size="mini">删除</el-button>
            </el-table-column>


            <el-table-column width="100">
                <el-button type="success" size="mini">详情</el-button>
            </el-table-column>
        </el-table>



    </div>
</template>

<script>
    export default {
        name: "Volunteer",
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
                }]
            }
        },

    }
</script>

<style scoped>

</style>