<template>
    <div class="sidebar" >
        <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                @select="handleSelect"
                active-text-color="#ffd04b">
            <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="7">
                <i class="el-icon-user-solid"></i>
                <span slot="title">老人</span>
            </el-menu-item>
            <el-menu-item index="2">
                    <i class="el-icon-location"></i>
                    <span>摄像头</span>
            </el-menu-item>
            <el-menu-item index="8">
                <i class="el-icon-s-data"></i>
                <span slot="title">数据统计</span>
            </el-menu-item>

            <el-menu-item index="3" >
                <i class="el-icon-document"></i>
                <span slot="title">工作人员</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-share"></i>
                <span slot="title">义工</span>
            </el-menu-item>
            <el-menu-item index="5">
                <i class="el-icon-document"></i>
                <span slot="title">管理员</span>
            </el-menu-item>
            <el-menu-item index="6">
                <i class="el-icon-setting"></i>
                <span slot="title">设置</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "the-menu",
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
                if (key === '1') {
                    this.$router.push({path: '/Home'})
                } else if (key === '7') {
                    this.$router.push({path: '/OldManage'})
                } else if (key === '2') {
                    this.$router.push({path: `/Camera`})
                } else if (key === '3') {
                    this.$router.push({path: '/Staff'})
                } else if (key === '4') {
                    this.$router.push({path: '/Volunteer'})
                } else if (key === '5') {
                    this.$router.push({path: '/AdminList'})
                } else if (key === '6') {
                    this.$router.push({path: '/Setting'})
                }else if (key === '8') {
                    this.$router.push({path: '/DataInfo'})
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .sidebar {
        display: block;
        position: absolute;
        left: 0;
        top: 80px;
        bottom: 0;
        width: 200px;
        overflow-y: scroll;
    }
    .sidebar::-webkit-scrollbar {
        width: 0;
        display: none;
    }
    .sidebar-el-menu:not(.el-menu--collapse) {
        width: 200px;
    }
    .sidebar > ul {
        height: 100%;
    }
</style>