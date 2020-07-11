<template>
  <div id="app" scrolling="no">
    <div v-if="$route.meta.keepAlive">
      <the-header />
      <the-menu/>
      <router-view class="content"></router-view>
    </div>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
  import TheHeader from './components/TheHeader'
  import TheMenu from './components/TheMenu'
export default {
  name: 'App',
  components: {
    TheHeader,
    TheMenu,
  }
}
</script>

<style  lang="scss" scoped>
  @import './assets/css/app.scss';
</style>
