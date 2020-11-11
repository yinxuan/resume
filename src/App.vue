<template>
<!--  <div id="nav">-->
<!--    <router-link to="/">Home</router-link> |-->
<!--    <router-link to="/about">About</router-link>-->
<!--  </div>-->


  <div class="app-view">
    <TopBar />
    <div class="router-view">
      <router-view/>
    </div>
    <BottomBar />
  </div>

</template>

<script>
  import TopBar from "./components/TopBar";
  import BottomBar from "./components/BottomBar";
  export default {
    components: {
      TopBar,
      BottomBar
    }
  }
</script>
<style lang="scss">
  .app-view {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    .router-view {
      background: url("https://www.the-alley.hk/images/page/page-bg_00.jpg") 50% 50% no-repeat;
      padding: 100px 50px;
      background-size: cover;
    }
  }
</style>
