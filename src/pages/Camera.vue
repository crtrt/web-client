<template>
    <div>
        <myvideo></myvideo>
    </div>
</template>

<script>
    import myvideo from '../components/video'

    export default {
        name: "Camera",
        components: {
            myvideo,

        },
        data(){
            return{
                index:'',
            }
        },
        mounted() {
            this.index = this.$route.params.index // 获得赋值
        },
    }
</script>

<style scoped>

</style>