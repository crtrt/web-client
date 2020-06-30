<template>
  <div id="app">
    <div v-if="$route.meta.keepAlive">
      <the-header />
      <router-view class="content"></router-view>
    </div>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
  import TheHeader from './components/TheHeader'

export default {
  name: 'App',
  components: {
    TheHeader,
  }
}
</script>

<style  lang="scss" scoped>
  @import './assets/css/app.scss';
</style>

