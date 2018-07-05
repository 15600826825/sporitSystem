<template>
  <div class="main">
    <div class="wrapper">
      <div class="container-fluid">
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
          <router-view v-if="!$route.meta.keepAlive"></router-view>
        <div class="wrap-footer"></div>
      </div>
    </div>
    <!--<footer class="site-footer">
      <span>Copyright © 2017 hangu.com  &nbsp;&nbsp;Version:{{version}}</span>
      <span style="color: red" v-if="this.isDevelop">开发者模式</span>
    </footer>-->
  </div>
</template>

<script src="./main.js"></script>

<style scoped lang="scss">
@import "./main.scss";
</style>
