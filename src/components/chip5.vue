<template>
  <div class="chipBox" v-if="flag">
    <div class="title">
      <div class="titleSlide"></div>累计借还
    </div>
    <div class="numberTitle">
      <div class="num">{{num1}}</div>
      <div class="num">{{num2}}</div>
      <div class="num">{{num3}}</div>
      <div class="num tips">,</div>
      <div class="num">{{num4}}</div>
      <div class="num">{{num5}}</div>
      <div class="num">{{num6}}</div>
      <div class="num tips">,</div>
      <div class="num">{{num7}}</div>
      <div class="num">{{num8}}</div>
      <div class="num">{{num9}}</div>
    </div>
    <div class="enterBox">
      <div class="return">
        <div class="num">{{returnNum}}</div>
        <div class="enterTitle">今日还书量</div>
      </div>
      <div class="borrow">
        <div class="num borrowNum">{{borrowNum}}</div>
        <div class="enterTitle">今日借书量</div>
      </div>

    </div>
    <div id="myChart5"></div>
  </div>
</template>

<script>
import { pastBookBorrows } from "../api/getData.js";
import { ajaxCallback } from "../js/common.js";
import echarts from "echarts/lib/echarts";

var option1 = {
  backgroundColor: "rgba(0,0,0,0)", //设置背景颜色
  title: {},
  legend: {
    data: ["还书量", "借书量"]
  },

  //  图表距边框的距离,可选值：'百分比'¦ {number}（单位px）
  grid: {
    top: "20px",
    left: "0px",
    right: "20px",
    bottom: "10px",
    containLabel: true
  },

  xAxis: {
    name: "", //设置x轴文字
    type: "category",
    axisTick: {
      show: false
    },
    splitLine: {
      show: false,
      //  改变轴线颜色
      lineStyle: {
        show: false,
        // 使用深浅的间隔色
        color: ["#9494AC"]
      }
    },
    axisLine: {
      lineStyle: {
        // 设置x轴颜色
        color: "#9494AC"
      }
    },
    // 设置X轴数据旋转倾斜
    axisLabel: {
      rotate: 0, // 旋转角度
      interval: 0 //设置X轴数据间隔几个显示一个，为0表示都显示
    },
    // boundaryGap值为false的时候，折线第一个点在y轴上
    // boundaryGap: false,
    data: [
      "7:00",
      "8:00",
      "9:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00"
    ]
  },

  yAxis: {
    show: true, //控制y轴的隐藏和显示
    name: "",
    type: "value",
    axisTick: {
      show: false
    },
    splitLine: {
      show: true,
      //  改变轴线颜色
      lineStyle: {
        // 使用深浅的间隔色
        color: ["#0D1F6E", "#2C2D26"]
      }
    },
    axisLine: {
      lineStyle: {
        show: false,
        // 设置y轴颜色
        color: "#9494AC"
      }
    }
  },
  tooltip: {
      trigger: 'axis',
      backgroundColor: "rgba(35, 47, 76, 0.5)",
      position: function (point, params, dom, rect, size) {
            // 固定在中部
            return [point[0], '40%'];
      },
      textStyle:{
          color:'rgba(124, 129, 173, 0.98)',
          fontSize: 12
      },
      axisPointer: {
          type: "shadow",
          label: {
              show: true,
              backgroundColor: 'transparent'
          },
          shadowStyle:{
              color:{
                  type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
                  colorStops: [{
                      offset: 0, color: 'rgba(100, 101, 171, 0)' // 0% 处的颜色
                  }, {
                      offset: 0.5, color: 'rgba(100, 101, 171, 0.2)' // 50% 处的颜色
                  },{
                      offset: 0.999999, color: 'rgba(100, 101, 171, 1)' // 100% 处的颜色
                  },{
                      offset: 1, color: 'rgba(100, 101, 171, 1)' // 100% 处的颜色
                  }],
                  global: false // 缺省为 false
              }
          }
      }
  },
  series: [
    {
      data: [],
      type: "bar",
      color: "#DBBC11",
      barWidth: "11",
      itemStyle: {
        normal: {
          barBorderRadius: [10, 10, 0, 0],
          //每个柱子的颜色即为colorList数组里的每一项,如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
          color: new echarts.graphic.LinearGradient(1, 0, 0, 1, [
            { offset: 0, color: "#FBD70C" },
            { offset: 1, color: "#222427" }
          ])
        }
      }
    },
    {
      data: [],
      type: "bar",
      color: "#00A2FF",
      barWidth: "11",
      itemStyle: {
        normal: {
          barBorderRadius: [10, 10, 0, 0],
          //每个柱子的颜色即为colorList数组里的每一项,如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
          color: new echarts.graphic.LinearGradient(1, 0, 0, 1, [
            { offset: 0, color: "#00A2FF" },
            { offset: 1, color: "#021641" }
          ])
        }
      }
    }
  ]
};

export default {
  data() {
    return {
      flag: false, //重新渲染
      num1: "",
      num2: "",
      num3: "",
      num4: "",
      num5: "",
      num6: "",
      num7: "",
      num8: "",
      num9: "",
      borrowNum: 0,
      returnNum: 0
    };
  },
  mounted() {
    this.dataInit();
    // this.drawLine();
  },
  methods: {
    dataInit: function() {
      let _this = this;
      ajaxCallback(pastBookBorrows, true, "", "GET", function(res) {
        console.log("55555", res);
        if (res.code == 0) {
          let allNum = res.data.pastBorrowsCount.borrowed + res.data.pastBorrowsCount.returned+"";
          let allNumArr = allNum.split("");
          _this.num9 =
            allNumArr[allNumArr.length - 1] == undefined
              ? 0
              : allNumArr[allNumArr.length - 1];
          _this.num8 =
            allNumArr[allNumArr.length - 2] == undefined
              ? 0
              : allNumArr[allNumArr.length - 2];
          _this.num7 =
            allNumArr[allNumArr.length - 3] == undefined
              ? 0
              : allNumArr[allNumArr.length - 3];
          _this.num6 =
            allNumArr[allNumArr.length - 4] == undefined
              ? 0
              : allNumArr[allNumArr.length - 4];
          _this.num5 =
            allNumArr[allNumArr.length - 5] == undefined
              ? 0
              : allNumArr[allNumArr.length - 5];
          _this.num4 =
            allNumArr[allNumArr.length - 6] == undefined
              ? 0
              : allNumArr[allNumArr.length - 6];
          _this.num3 =
            allNumArr[allNumArr.length - 7] == undefined
              ? 0
              : allNumArr[allNumArr.length - 7];
          _this.num2 =
            allNumArr[allNumArr.length - 8] == undefined
              ? 0
              : allNumArr[allNumArr.length - 8];
          _this.num1 =
            allNumArr[allNumArr.length - 9] == undefined
              ? 0
              : allNumArr[allNumArr.length - 9];
              _this.borrowNum= res.data.todayBorrowsCount.borrowed;
              _this.returnNum= res.data.todayBorrowsCount.returned;
          let yArrList = res.data.todayTimeBorrows;
          for (let i = 0; i < yArrList.length; i++) {
            option1.series[0].data.push(yArrList[i].borrowed);
            option1.series[1].data.push(yArrList[i].returned);
          }
          _this.flag = true;
          setTimeout(() => {
            _this.drawLine();
          }, 100);
        }
      });
    },
    drawLine() {
      let _this=this;
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart5"));
      // 绘制图表
      myChart.setOption(option1);
      // 动态显示tootip
      var faultByHourIndex1 = 0; //播放所在下标
      var faultByHourTime1 = setInterval(function() { //使得tootip每隔三秒自动显示
          myChart.dispatchAction({
              type: 'showTip', // 根据 tooltip 的配置项显示提示框。
              seriesIndex: 0,
              dataIndex: faultByHourIndex1
          });
          faultByHourIndex1++;
          if(faultByHourIndex1>=11){
            faultByHourIndex1=0
          }
      }, 3000 );
    }
  }
};
</script>

<style lang="less" scoped>
.numberTitle {
  margin-top: 22px;
  margin-right: 43px;
  float: right;
  color: #fff;
  line-height: 40px;
  text-align: center;
  font-weight: bold;
  .num {
    width: 33px;
    height: 40px;
    border: 2px solid rgba(18, 56, 182, 1);
    border-radius: 5px;
    float: left;
    margin-left: 4px;
    font-size: 30px;
  }
  .tips {
    width: 10px;
    height: 40px;
    border: none;
    font-size: 30px;
    line-height: 50px;
    margin-left: 6px;
  }
}
.enterBox {
  float: right;
  color: #fff;
  font-size: 12px;
  width: 330px;
  margin-right: 44px;
  text-align: right;
  margin-top: 23px;
  .borrow,
  .return {
    float: right;
    margin-left: 36px;
  }
  .enterTitle {
    line-height: 21px;
    float: right;
  }
  .num {
    font-size: 21px;
    line-height: 21px;
    font-weight: bold;
    color: #fbd70c;
    margin-left: 11px;
    float: right;
  }
  .borrowNum {
    color: #00a2ff;
  }
}
#myChart5 {
  width: 546px;
  height: 185px;
  margin-left: 51px;
  float: left;
}
</style>