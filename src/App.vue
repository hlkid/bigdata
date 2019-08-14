<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="less">
body{
  margin: 0;
  padding: 0;
  width: 3840px;
  height: 2160px;
}
#app{
  .chipBox{
    float: left;
    width: 1000px;
    height: 500px;
    .title{
      border-left: 20px solid blue;
      font-size: 20px;
    }
  }
}
</style>
