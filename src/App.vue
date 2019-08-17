<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
<style lang="less">
body {
  margin: 0;
  padding: 0;
  background: url(./assets/bigbg.png) no-repeat;
  background-size: cover;
  overflow-x: none;
}
#app {
  // width: 1920px;
  // height: 1080px;
  .container{
    width: 100%;
    box-sizing: border-box;
    padding: 0 19px;
  }
  .over {
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-text-overflow: ellipsis;
    -moz-text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    white-space: nowrap;
  }
  .fl {
    float: left;
    display: inline;
  }
  .fr {
    float: right;
    display: inline;
  }
  .clearfloat:after {
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0;
    zoom: 1;
  }
  .clear {
    clear: both;
    zoom: 1;
  }
  .dis_inBlock {
    display: inline-block;
    *display: inline;
    *zoom: 1;
  }
  .dis_block {
    display: block;
  }
  .box-s {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }

  .over2 {
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-text-overflow: ellipsis;
    -moz-text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  p {
    display: block;
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
  }
  ul{
    list-style:none;
    display: block;
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    padding-inline-start: 0px;
  }
  .page1 {
    width: 100%;
  }
  .page2 {
    width: 100%;
  }
  .chipBox {
    float: left;
    width: 640px;
    height: 301px;
    margin-bottom: 20px;
    background: url(./assets/icon3.png) no-repeat;
    background-size: cover;
    margin-right: 18px;
    .title {
      font-size: 20px;
      margin-left: 19px;
      margin-top: 20px;
      font-size: 18px;
      font-weight: bold;
      color: #fff;
      float: left;
      .titleSlide {
        width: 5px;
        height: 16px;
        background: #34defc;
        float: left;
        margin-right: 8px;
        margin-top: 5px;
      }
    }
  }
}
</style>
