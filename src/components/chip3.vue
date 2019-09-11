<template>
  <div class="chipBox chip3 box-s">
    <div class="tu clearfloat box-s">
      <img :src="libroomInfo.cover" alt="" style="border-radius:5px;">
    </div>
    <div class="bottomtit cleafloat box-s over">
      {{news.title}}{{news.content}}
    </div>
  </div>
</template>

<script>
import { libBaseInfo } from "../api/getData.js";
import { ajaxCallback } from "../js/common.js";
export default {
    data(){
        return{
          libroomInfo:'',
          news:''
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
            _this.libroomInfo = res.data.libroomInfo;
            _this.news = res.data.news;
          }
        );
      },
    }
}
</script>

<style lang="less" scoped>
.chip3{
    width: 548px !important;
    height: 310px;
    margin-right:0 !important;
    margin-bottom: 14px !important;
    padding: 25px 45px;
    background: url(../assets/icon4.png) no-repeat !important;
    background-size: cover;

    .tu{
      width: 100%;
      text-align: center;
      img{
        width: 364px;
        height: 205px;
      }
    }

    .bottomtit{
      width: 100%;
      font-size: 12px;
      color: #fff;
      background: url(../assets/music.png) left no-repeat;
      background-size: contain;
      padding-left: 24px;
      line-height: 17px;
      margin-top: 24px;
    }
}
</style>