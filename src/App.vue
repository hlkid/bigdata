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
  background: url(./assets/bigbg.png) no-repeat;
  background-size: cover;
  overflow-x: none;
}
#app{
  width: 1920px;
  height: 1080px;  
  .page1{
    width: 100%;
    box-sizing: border-box;
    padding: 0 26px 10px 26px;
  }
  .page2{
    width: 100%;
    box-sizing: border-box;
    padding: 0 24px 10px 24px;
  }
  .chipBox{
    float: left;
    width: 637px;
    height: 298px;
    border: 1px solid #0F0A7C;
    margin-right: 20px;
    margin-bottom: 20px;
    .title{
      font-size: 20px;
      margin-left: 19px;
      margin-top: 20px;
      font-size: 18px;
      font-weight: bold;
      color: #fff;
      float: left;
      .titleSlide{
        width: 5px;
        height: 16px;
        background: #34DEFC;
        float: left;
        margin-right: 8px;
        margin-top: 5px;
      }
    }
  }
}
</style>
