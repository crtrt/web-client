<template>
    <div>
        <vueRtmpPlayer ref="rtmpPlayer" class="vjs-custom-skin"
                       @play="onPlayerPlay($event)" @pause="onPlayerPause($event)"
                       @loadeddata="onPlayerLoadeddata($event)" @waiting="onPlayerWaiting($event)"
                       @playing="onPlayerPlaying($event)" @timeupdate="onPlayerTimeupdate($event)"
                       @ready="playerReadied" @statechanged="playerStateChanged($event)">
        </vueRtmpPlayer>
<!--        <el-button  size="mini"  type="warning" @click="handlePlay">播放</el-button>-->
<!--        <el-button  size="mini"  type="warning" @click="handlePause">暂停</el-button>-->

    </div>
</template>

<script>

    export default {
        name: "Camera",

        data(){
            return{
                visible: false,
                // src: 'rtmp://58.200.131.2:1935/livetv/hunantv',
                src:'rtmp://39.100.106.24:1935/stream/camera'
            }
        },
        mounted() {

        },
        methods: {
            // handlePlay() {
            //     this.$refs.rtmpPlayer.play();
            // },
            // handlePause() {
            //     this.$refs.rtmpPlayer.pause();
            // },
            // handleSetSrc() {
            //     this.$refs.rtmpPlayer.setSrc(this.src);
            // },
            // handleClose(){
            //     this.$refs.rtmpPlayer.reset();
            // },
            // 播放回调
            onPlayerPlay(player) {
                console.log('player play!', player)
            },
            // 暂停回调
            onPlayerPause(player) {
                console.log('player pause!', player)
            },
            // 当播放器在当前播放位置下载数据时触发
            onPlayerLoadeddata(player) {
                console.log('player Loadeddata!', player)
            },
            // 等待回调
            onPlayerWaiting(player) {
                console.log('player Waiting!', player)
            },
            // 正在播放回调
            onPlayerPlaying(player) {
               console.log('player Playing!', player)
            },
            // 当前播放位置发生变化回调
            onPlayerTimeupdate(player) {
                console.log('player Timeupdate!', player.currentTime())
            },
            // 状态变化回调
            playerStateChanged(playerCurrentState) {
                console.log('player current update state', playerCurrentState)
            },

            // 播放器就绪回调
            playerReadied(player) {
                console.log('example player 1 readied', player)
                // player.currentTime(10)
            }
        }
    };
</script>

<style scoped>

</style>