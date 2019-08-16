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
    $.fn.leoweather = function (opts) {
        var defaults = {
            city: '',
            format: '{年}/{月}/{日} {时}:{分}:{秒} 星期{周} <b>{城市}天气</b> <img src="https://xuesax.com/tianqiapi/skin/sogou/{图标}.png" /> {天气} {最低气温}~{最高气温} {风向} {风级}'
        };
        var options = $.extend(defaults, opts);
        return this.each(function () {
            var obj = $(this),
                weather = new Array(),
                format = options.format,
                url = 'https://www.tianqiapi.com/api/?version=v1&city=' + options.city,
                model = format.match(/\{.*?\}/g),
                action = new Array();
            for (var i = 0; model.length > i; i++) {
                action[i] = model[i].replace(/{/g, '').replace(/}/g, '');
            };
            var valid = action.toString();
            $.ajax({
                url: url,
                dataType: "json",
                success: function (w) {
                    weather['city'] = w.city;
                    weather['data'] = w.data;
                    setTimer();
                    console.log(weather);
                }
            });

            function getContent(type) {
                if (type == '城市') {
                    return weather.city;
                }
                var day = /\+(\d).*?/g.exec(type);
                if (day != null) {
                    day = parseInt(day[1]);
                    if (day > 6) {
                        day = 0;
                    }
                } else {
                    day = 0;
                }
                if (/日期.*?/g.exec(type) !== null) {
                    if (/人性化日期.*?/g.exec(type) !== null) {
                        return weather.data[day].day;
                    }
                    return weather.data[day].date;
                }
                if (/天气.*?/g.exec(type) !== null) {
                    return weather.data[day].wea;
                }
                if (/图标.*?/g.exec(type) !== null) {
                    return weather.data[day].wea_img;
                }
                if (/当前气温.*?/g.exec(type) !== null) {
                    return weather.data[day].tem;
                }
                if (/最高气温.*?/g.exec(type) !== null) {
                    return weather.data[day].tem1;
                }
                if (/最低气温.*?/g.exec(type) !== null) {
                    return weather.data[day].tem2;
                }
                if (/风向.*?/g.exec(type) !== null) {
                    return weather.data[day].win[0];
                }
                if (/风级.*?/g.exec(type) !== null) {
                    return weather.data[day].win_speed;
                }
                if (/空气指数.*?/g.exec(type) !== null) {
                    return weather.data[day].air;
                }
                if (/空气等级.*?/g.exec(type) !== null) {
                    return weather.data[day].air_level;
                }
                if (/空气提示.*?/g.exec(type) !== null) {
                    return weather.data[day].air_tips;
                }
                if (/紫外线指数.*?/g.exec(type) !== null) {
                    return weather.data[day].index[0].level;
                }
                if (/紫外线提示.*?/g.exec(type) !== null) {
                    return weather.data[day].index[0].desc;
                }
                if (/穿衣指数.*?/g.exec(type) !== null) {
                    return weather.data[day].index[3].level;
                }
                if (/穿衣提示.*?/g.exec(type) !== null) {
                    return weather.data[day].index[3].desc;
                }
                if (/洗车指数.*?/g.exec(type) !== null) {
                    return weather.data[day].index[4].level;
                }
                if (/洗车提示.*?/g.exec(type) !== null) {
                    return weather.data[day].index[4].desc;
                }
                if (type == '年') {
                    var today = new Date();
                    var YY = today.getYear();
                    if (YY < 1900) YY = YY + 1900;
                    return '<span id="weather_YY">' + YY + '</span>'
                }
                if (type == '月') {
                    var today = new Date();
                    var MM = today.getMonth() + 1;
                    if (MM < 10) MM = '0' + MM;
                    return '<span id="weather_MM">' + MM + '</span>'
                }
                if (type == '日') {
                    var today = new Date();
                    var DD = today.getDate();
                    if (DD < 10) DD = '0' + DD;
                    return '<span id="weather_DD">' + DD + '</span>'
                }
                if (type == '时') {
                    var today = new Date();
                    var hh = today.getHours();
                    if (hh < 10) hh = '0' + hh;
                    return '<span id="weather_hh">' + hh + '</span>'
                }
                if (type == '分') {
                    var today = new Date();
                    var mm = today.getMinutes();
                    if (mm < 10) mm = '0' + mm;
                    return '<span id="weather_mm">' + mm + '</span>'
                }
                if (type == '秒') {
                    var today = new Date();
                    var ss = today.getSeconds();
                    if (ss < 10) ss = '0' + ss;
                    return '<span id="weather_ss">' + ss + '</span>'
                }
            }

            function setTimer() {
                var timer = 100;
                for (var i = 0; action.length > i; i++) {
                    var str = format.replace(/\{(.*?)\}/g, function (a, b) {
                        var fun = b.replace(/{/g, '').replace(/}/g, '');
                        return getContent(fun);
                    })
                };
                obj.html(str);
                var ClockTimer = setInterval(update, timer)
            }

            function update() {
                var today = new Date();
                var YY = today.getYear();
                if (YY < 1900) YY = YY + 1900;
                var MM = today.getMonth() + 1;
                if (MM < 10) MM = '0' + MM;
                var DD = today.getDate();
                if (DD < 10) DD = '0' + DD;
                var hh = today.getHours();
                if (hh < 10) hh = '0' + hh;
                var mm = today.getMinutes();
                if (mm < 10) mm = '0' + mm;
                var ss = today.getSeconds();
                if (ss < 10) ss = '0' + ss;
                var ww = today.getDay();
                $('#weather_YY').html(YY);
                $('#weather_MM').html(MM);
                $('#weather_DD').html(DD);
                $('#weather_hh').html(hh);
                $('#weather_mm').html(mm);
                $('#weather_ss').html(ss);
                $('#weather_ww').html(ww);
            }
        });
    };

export default {
    data(){
        return{

        }
    },
    mounted(){
      //	插件说明
      //	时间：	{时段}{年}{月}{日}{时}{分}{秒}{周}
      //	天气： {城市}{天气}{气温}{风向}{风级}{图标}{最高气温}{最低气温}{}{}{}{}{}{}{}
      //	图标：	自己去选取样式网址，https://www.tianqiapi.com/diy.php?style=ya

      $('#weather1').leoweather({
          format: '<div class="mid clearfloat box-s">' +
              '<div class="fl left"><img src="https://xuesax.com/tianqiapi/skin/cake/{图标}.png" /></div>' +
              '<div class="fr right"><p>{最低气温}~{最高气温}</p><samp></samp><p>{年}/{月}/{日} {时}:{分}:{秒}</p></div>' +
              '</div>'
      });
    },
    methods:{

    }
}
</script>

<style lang="less">
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
    width: 100%;
    height: 48px;
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