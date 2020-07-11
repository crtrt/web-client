import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import * as echarts from "echarts";

import VideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css' //videoJs的样式
import 'vue-video-player/src/custom-theme.css' //vue-video-player的样式
import 'videojs-flash'; //引入才能播放rtmp视屏
import 'videojs-contrib-hls' //引入才能播放m3u8文件


Vue.use(VideoPlayer)
Vue.use(ElementUI)
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
