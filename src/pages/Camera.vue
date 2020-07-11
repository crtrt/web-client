<template>
    <div>
        <the-video />
    </div>
</template>

<script>
    import TheVideo from '../components/TheVideo'

    export default {
        name: "Camera",
        components: {
            TheVideo,

        },
        data(){
            return{
                index:'',
            }
        },
        mounted() {
            this.index = this.$route.params.index // 获得赋值
            console.log('this.index'+this.index)
        },
    }
</script>

<style scoped>

</style>