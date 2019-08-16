<template>
  <div class="chipBox chip6">
    <div class="top clearfloat box-s fl">
<div class="skin2" id="weather1"></div>
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
                <li>2</li>
                <li>0</li>
                <li>1</li>
                <li>9</li>
              </ul>
            </div>
            <p class="fl">年</p>
          </div>
          <div class="year month fl clearfloat">
            <div class="zuo clearfloat fl">
              <ul>
                <li>0</li>
                <li>1</li>
              </ul>
            </div>
            <p class="fl">月</p>
          </div>
          <div class="year month fl clearfloat">
            <div class="zuo clearfloat fl">
              <ul>
                <li>1</li>
                <li>9</li>
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
              <span class="fl">周二至周日</span>
              <span class="fl ml18">09：00~21：00</span>
          </p>
          <p class="fu-tit over">
            周一闭馆，双休日、国家法定节假日正常开放
          </p>
        </div>
      </div>
      <div class="right clearfloat fr box-s">
          <div class="tu clearfloat box-s fl">
            <img src="../assets/1.jpg" alt="">
          </div>
          <p class="tit fl">XXX公众号</p>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
//	插件说明
//	时间：	{时段}{年}{月}{日}{时}{分}{秒}{周}
//	天气： {城市}{天气}{气温}{风向}{风级}{图标}{最高气温}{最低气温}{}{}{}{}{}{}{}
//	图标：	自己去选取样式网址，https://www.tianqiapi.com/diy.php?style=ya

$('#weather1').leoweather({
    format: '<div class="mid">' +
        '<div class="fl"><img src="https://xuesax.com/tianqiapi/skin/cake/{图标}.png" /></div>' +
        '<div class="fr"><p>{最低气温}~{最高气温}</p><samp></samp><p>{年}/{月}/{日} {时}:{分}:{秒}</p></div>' +
        '</div>'
});
export default {
    data(){
        return{

        }
    },
    mounted(){

    },
    methods:{

    }
}
</script>

<style lang="less" scoped>
.chip6{
  width: 548px !important;
  margin-right:0;
  height:301px;
  background: none !important;

  .top{
    width: 100%;
    border: 1px solid #06076B;
    height: 48px;
  }
  .middle{
    width: 100%;
    border: 1px solid #06076B;
    height: 110px;
    margin-top: 11px;
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
                font-size: 16px;
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
    border: 1px solid #06076B;
    height: 116px;
    margin-top: 11px;
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
            background: #6495ED;
        }

        .skin2 .mid {
            overflow: hidden;
            padding: 20px;
        }

        .skin2 .mid .fl {
            float: left;
        }

        .skin2 .mid .fl img {
            height: 30px;
        }

        .skin2 .mid .fr {
            float: right;
        }

        .skin2 .mid .fr h2 {
            font-size: 20px;
            line-height: 28px;
            margin: 0;
        }

        .skin2 .mid .fr p {
            font-size: 17px;
            height: 18px;
            line-height: 30px;
            margin: 0;
            float: left;
            color: #fff;
            padding: 0 20px;
        }

        .skin2 .mid .fr samp {
            border-right: 1px solid #fff;
            float: left;
            height: 18px;
            display: block;
            margin-top: 6px;
        }

        .skin2 .mid .fr p:last-child {
            font-size: 14px;
        }
</style>