<template>
  <div class="chipBox chip9 box-s">
      <div class="basetit clearfloat box-s">
         <span class="line fl"></span>
         <p class="tit fl">宣传视频</p>
      </div>   
      <div class="video clearfloat">
        <video :src="videoSrc" width="365" height="205" autoplay controls loop></video>
      </div>
  </div>
</template>

<script>
import { libBaseInfo } from "../api/getData.js";
import { ajaxCallback } from "../js/common.js";
export default {
    data(){
        return {
            videoSrc: 'http://vfx.mtime.cn/Video/2019/02/04/mp4/190204084208765161.mp4'     //获取视频播放资源
        }
    },
    mounted(){
      this.libBaseInfo();
    },
    methods:{
       libBaseInfo: function() {
        let _this = this;
        let params = {
          
        }
        ajaxCallback( libBaseInfo, true, params, "GET", function(res) {
            console.log(res)
          }
        );
      },
    }
}
</script>

<style lang="less" scoped>
  .chip9{
    width: 548px !important;
    height: 310px;
    margin-right:0 !important;
    padding: 25px 20px;
    background: url(../assets/icon4.png) no-repeat !important;
    background-size: cover;
    
    .basetit{
      width: 100%;
      height: 18px;
      line-height: 18px;

      span{
        display: block;
        height: 16px;
        width: 5px;
        background-color: #00a2ff;
        margin-top: 2px;
        margin-right: 14px;
      }
      .tit{
        font-size: 18px;
        font-weight: bold;
        color: #fff;
      }
    }

    .video{
      width:365px;
      height: 205px;
      margin: 18px auto 0;
    }

  }
</style>