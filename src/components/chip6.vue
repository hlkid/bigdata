<template>
  <div class="chipBox chip6">
    <div class="top clearfloat box-s fl">
      <div class="skin2">
          <img :src="weatherData.dayPictureUrl" alt="" width="25" style="vertical-align:middle; margin-top:-6px;">
          <div class="tit" style="font-size:18px;"><span>{{weatherData.wd}}</span><span style="margin: 0 10px; display:inline-block; height:14px; border-left:2px solid #fff;"></span>{{data}}</div>
      </div>
    </div>
    <div class="middle clearfloat box-s fl">
      <div class="left clearfloat fl">
        <p class="tit fl clearfloat">
          今日借阅图书的还书日期为
        </p>
        <div class="time fl clearfloat">
          <div class="year fl clearfloat">
            <div class="zuo clearfloat fl">
              <ul>
                <li v-for="(item,index) in year" :key="index">{{item}}</li>
              </ul>
            </div>
            <p class="fl">年</p>
          </div>
          <div class="year month fl clearfloat">
            <div class="zuo clearfloat fl">
              <ul>
                <li v-for="(item,index) in month" :key="index">{{item}}</li>
              </ul>
            </div>
            <p class="fl">月</p>
          </div>
          <div class="year month fl clearfloat">
            <div class="zuo clearfloat fl">
              <ul>
                <li v-for="(item,index) in day" :key="index">{{item}}</li>
              </ul>
            </div>
            <p class="fl">日</p>
          </div>
        </div>
      </div>
      <div class="right clearfloat fr">
        <img src="../assets/icon1.png" alt="">
      </div>
    </div>
    <div class="bottom clearfloat box-s fl">
      <div class="left clearfloat fl box-s">
        <div class="zuo clearfloat fl box-s">
          开馆时间
        </div>
        <div class="you clearfloat fl box-s">
          <p class="tit over">
              <span class="fl">{{libroomInfo.openTime}}</span>
              <!-- <span class="fl ml18">09：00~21：00</span> -->
          </p>
          <p class="fu-tit over">
            {{libroomInfo.openRemark}}
          </p>
        </div>
      </div>
      <div class="right clearfloat fr box-s">
          <div class="tu clearfloat box-s fl">
            <img :src="libroomInfo.qrcode" alt="">
          </div>
          <p class="tit fl">{{libroomInfo.libname}}</p>
          <!-- 公众号 -->
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { libBaseInfo } from "../api/getData.js";
import { ajaxCallback } from "../js/common.js";

export default {
    data(){
        return{
          year:[],
          month:[],
          day:[],
          libroomInfo:"",
          news:"",
          weatherData:"",
          data:""
        }
    },
    mounted(){
      var _this = this;
      _this.libBaseInfo();
      _this.timer = setInterval(function() {
        _this.data = new Date().toLocaleString();
      });
    },
    beforeDestroy: function() {
      if (this.timer) {
        clearInterval(this.timer);
      }
    },
    methods:{
      libBaseInfo: function() {
        let _this = this;
        let params = {
          
        }
        ajaxCallback( libBaseInfo, true, params, "GET", function(res) {            
            var year = res.data.bookReturnDay[0].split('')
            var month = res.data.bookReturnDay[1].split('')
            var day = res.data.bookReturnDay[2].split('')
            _this.year = year;
            _this.month = month;
            _this.day = day;
            _this.libroomInfo = res.data.libroomInfo;
            _this.weatherData = res.data.weatherData;
            console.log(res.data.weatherData)
          }
        );
      },      
    },

}
</script>

<style lang="less">
.chip6{
  width: 548px !important;
  margin-right:0 !important;
  height:301px;
  background: none !important;
  margin-bottom: 14px !important;
  .top{
    width: 100%;
    border: 1px solid #0d2573;
    height: 48px;
  }
  .middle{
    width: 100%;
    border: 1px solid #0d2573;
    height: 110px;
    margin-top: 13px;
    padding: 15px 30px;
    .left{
      width: 360px;
      .tit{
        width: 100%;
        color: #fff;
        font-size: 18px;
      }
      .time{
        width: 100%;
        margin-top: 15px;
        .year{
          .zuo{
            ul{
              li{
                width: 28px;
                height: 34px;
                background-color: #0e6de9;
                color: #fff;
                text-align: center;
                line-height: 34px;
                border-radius: 5px;
                font-size: 24px;
                font-weight: bold;
                float: left;
                margin-right: 8px;
              }
            }
          }
          p{
            color: #fff;
            height: 34px;
            line-height: 34px;
            font-size: 15px;
            font-weight: bold;
          }
        }
        .month{
          margin-left: 8px;
        }
      }
    }
    .right{
      width: 62.5px;
      margin-top: 10px;
      img{
        width: 100%;
      }
    }
  }
  .bottom{
    width: 100%;
    border: 1px solid #0d2573;
    height: 116px;
    margin-top: 13px;
    padding: 13px 30px;
    .left{
      width: 360px;
      margin-top: 14px;
      .zuo{
        width:62px;
        height:62px;
        background: url(../assets/icon2.png) no-repeat;
        background-size: cover;
        color: #fff;
        font-size: 16px;
        font-weight: bold;
        padding: 12px 14px;
      }
      .you{
        width: 270px;
        margin-left: 15px;
        margin-top: 10px;
        .tit{
          width: 100%;
          font-size: 18px;
          color: #fff;
          float: left;
          .ml18{
            margin-left: 18px;
          }
        }
        .fu-tit{
          width: 100%;
          font-size: 12px;
          color: #cbccce;
          float: left;
          line-height: 20px;
        }
      }
    }
    .right{
      width: 70px;
      height: 86px;
      overflow: hidden;
      border-radius: 3px;
      background-color: #fff;

      .tu{
        width: 100%;
        height: 68px;
        padding: 4px;

        img{
          width: 100%;
        }
      }

      .tit{
        width: 100%;
        height: 18px;
        background-color: #00a2ff;
        text-align:center;
        line-height: 18px;
        font-size: 10px;
        color: #fff;
      }
    }
  }
}
.skin2 {
    display: inline-block;
    width: 100%;
    height: 48px;
    text-align: center;
    line-height: 48px;
    .tit{
      display: inline-block;
      color: #fff;
      margin-left: 10px;
    }
    .mid {
        overflow: hidden;
        width: 345px;
        height: 48px;
        margin: 0 auto;
        line-height: 48px;

        .left{
          img{
            height: 30px;
            margin-top: 9px;
          }
        }

        .right{
          p{
            font-size: 17px;
            height: 18px;
            margin: 0;
            float: left;
            color: #fff;
            padding: 0 15px;

            &::last-child {
                font-size: 14px;
            }
          }
          samp{
            border-right: 1px solid #fff;
            float: left;
            height: 18px;
            display: block;
            margin-top: 15px;
          }
        }
    }
}
</style>