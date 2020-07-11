<template>
    <div class="body">
        <el-table
                :data="tableData"
                :cell-style="{padding:'5px px 5px 0'}"
                stripe
                style="width: 100%;text-align: center;">
            <el-table-column
                    prop="id"
                    label="id">
            </el-table-column>
            <el-table-column
                    prop="oldperson_name"
                    label="老人名字">
            </el-table-column>
            <el-table-column
                    prop="event_location"
                    label="事件地点">
            </el-table-column>

            <el-table-column
                    prop="event_desc"
                    label="事件描述"
                    >
            </el-table-column>
            <el-table-column
                    prop="event_date"
                    label="事件时间"
                    >
            </el-table-column>

            <el-table-column width="100"    label="操作">
                <template slot-scope="scope" >
                    <el-button  size="mini"  type="primary" @click="getImg(scope.row.id)">查看图片</el-button>
                </template>
            </el-table-column>

        </el-table>


    </div>
</template>

<script>
    import {dataInfo} from "@/api";

    export default {
        name: "DataInfo",
        data(){
          return{
              tableData:[],
          }
        },
        mounted(){

            this.getDetailInfo()//获取数据

            const timer = setInterval(() =>{
                setTimeout( this.getDetailInfo, 0)
            }, 10000);
            // 通过$once来监听定时器，在beforeDestroy钩子可以被清除。
            this.$once('hook:beforeDestroy', () => {
                clearInterval(timer);
            })


        },
        methods:{
            getDetailInfo(){
                dataInfo()
                    .then(res => {

                        if(this.tableData!==res){
                            console.log("res??")
                            console.log(res)
                            this.tableData=res;
                        }


                    })

            },
            getImg(img){
                console.log(img)
            }
        }

    }
</script>

<style scoped>

</style>