<template>
  <div class="chipBox chipBox1">
    <div class="title">
      <div class="titleSlide"></div>读者分析
    </div>
    <div class="card cardAll">
      <div class="txt">图书馆总计读者证 </div>
      <b>{{cardAll}}</b>
      <div class="txt"> 张 </div>
    </div>
    <div class="card cardNow">
      <div class="txt">今日办证 </div>
      <b>{{cardNow}}</b>
      <div class="txt"> 张</div>
    </div>
    <div class="canvasBox canvasLeft">
      <canvas id="canvasl1" width="160" height="160"></canvas>
      <canvas id="canvasl2" width="160" height="160"></canvas>
      <canvas id="canvasl3" width="160" height="160"></canvas>
      <canvas id="canvasl4" width="160" height="160"></canvas>
    </div>
    <div class="leftData">
      <div class="list">09 - 18岁
        <b>{{rate1}}%</b>
      </div>
      <div class="list">19 - 30岁
        <b>{{rate2}}%</b>
      </div>
      <div class="list">31 - 50岁
        <b>{{rate3}}%</b>
      </div>
      <div class="list">51 - 60岁
        <b>{{rate4}}%</b>
      </div>
    </div>
    <div class="canvasBox canvasRight">
      <canvas id="canvasr1" width="150" height="150"></canvas>
      <canvas id="canvasr2" width="150" height="150"></canvas>
      <img class="boy iconImg" src="../assets/boy.png">
      <img class="gril iconImg" src="../assets/gril.png">
      <div class="canvasRightTxt">
        <div class="rate">{{this.flagR1?rateR2:rateR1}}%</div>
        <div class="txt">{{this.flagR1?txtR2:txtR1}}</div>
      </div>
    </div>

  </div>
</template>

<script>
import { readersAnasis } from "../api/getData.js";
import { ajaxCallback } from "../js/common.js";
export default {
  data() {
    return {
      flagR1:false,
      flagR2:false,
      timer:"",
      timer1:"",
      timer2:"",
      timer3:"",
      timer4:"",
      ending1:1,
      ending2:1,
      ending3:1,
      ending4:1,
      cardAll: "0",
      cardNow: "0",
      rateR1: 0,
      txtR1: "男性读者",
      rateR2: 0,
      txtR2: "女性读者",
      rate1: 0,
      rate2: 0,
      rate3: 0,
      rate4: 0
    };
  },
  mounted() {
    this.readersAnasis();
    // this.dataInitLeft();
    // this.dataInitRight();
  },
  beforeDestroy() {
      clearInterval(this.timer);
    },
  methods: {
    readersAnasis: function() {
      let _this = this;
      ajaxCallback( readersAnasis, true, "", "GET", function(res) {
          // console.log("1111",res);
          _this.cardAll=res.data.readerCount.readersCount;
          _this.cardNow=res.data.readerCount.pastCount;
          let allcount=0;
          let countList=res.data.ageStatics;
          for(let i=0;i<countList.length;i++){
            allcount+=countList[i].readersNum;
          }
          _this.rate1=allcount==0?0:((countList[0].readersNum/allcount)*100).toFixed(1);
          _this.rate2=allcount==0?0:((countList[1].readersNum/allcount)*100).toFixed(1);
          _this.rate3=allcount==0?0:((countList[2].readersNum/allcount)*100).toFixed(1);
          _this.rate4=allcount==0?0:((countList[3].readersNum/allcount)*100).toFixed(1);
          _this.dataInitLeft();
          let sexStaticsList=res.data.sexStatics;
          let sexAll=100;
          for(let k=0;k<sexStaticsList.length;k++){
            sexAll+=sexStaticsList[k].readersNum
          }
          _this.rateR1=sexAll==0?0:((sexStaticsList[1].readersNum/sexAll)*100).toFixed(1);
          _this.rateR2=sexAll==0?0:((sexStaticsList[0].readersNum/sexAll)*100).toFixed(1);
          _this.dataInitRight();
        }
      );
    },
    dataInitLeft:function(){
      let _this=this;
    //0-18周岁  参数依次半径、颜色、百分比、第几个定时器
    // this.test(1, 70, "#00FFCB", 62.5);
    this.timer1 = setInterval(function(){
      _this.test(1, 70, "#00FFCB", _this.rate1,1)
    }, 10);
    //19-30周岁  参数依次半径、颜色、百分比
    this.timer2 = setInterval(function(){
      _this.test(2, 55, "#FBD70C", _this.rate2,2);
    }, 10);
    // this.canvasDrawL(2, 55, "#FBD70C", 38.2);
    //19-30周岁  参数依次半径、颜色、百分比
    this.timer3 = setInterval(function(){
      _this.test(3, 40, "#0E6DE9", _this.rate3,3);
    }, 10);
    // this.canvasDrawL(3, 40, "#0E6DE9", 32.4);
    //19-30周岁  参数依次半径、颜色、百分比
    this.timer4 = setInterval(function(){
      _this.test(4, 25, "#34DEFC", _this.rate4,4);
    }, 10);
    // this.canvasDrawL(4, 25, "#34DEFC", 40);
    },
    dataInitRight:function(){
      let _this=this;
      //右侧画布参数依次传值为 1/2（男/女） 比例值
      _this.canvasDrawR(1, _this.rateR1);;
      this.timer5 = setInterval(function(){
        _this.canvasDrawR(1, _this.rateR1);;
      }, 3000);
      //右侧画布参数依次传值为 1/2（男/女） 比例值
      _this.canvasDrawR(2, _this.rateR2);;
      this.timer5 = setInterval(function(){
        _this.canvasDrawR(2, _this.rateR2);
      }, 3000);
    },
    //test中转
    test:function(index, r, color, rate,timeIndex){
      let ending=0
      switch (timeIndex) {
          case 1:
            this.ending1++;
            ending=this.ending1;
            break;
          case 2:
            this.ending2++;
            ending=this.ending2;
            break;
          case 3:
            this.ending3++;
            ending=this.ending3;
            break;
          case 4:
            this.ending4++;
            ending=this.ending4;
            break;
        
          default:
            break;
        }
      if(ending<=Number(rate)){
        this.canvasDrawL(index, r, color, ending)
      }else{
        switch (timeIndex) {
          case 1:
            clearInterval(this.timer1);
            this.ending=1
            break;
          case 2:
            clearInterval(this.timer2);
            this.ending=1
            break;
          case 3:
            clearInterval(this.timer3);
            this.ending=1
            break;
          case 4:
            clearInterval(this.timer4);
            this.ending=1
            break;
        
          default:
            break;
        }
        
      }
    },
    //左侧画布
    canvasDrawL: function(index, r, color, rate) {
      switch (index) {
        case 1:
          var ctx = canvasl1.getContext("2d"); //生成画笔对象
          break;
        case 2:
          var ctx = canvasl2.getContext("2d"); //生成画笔对象
          break;
        case 3:
          var ctx = canvasl3.getContext("2d"); //生成画笔对象
          break;
        case 4:
          var ctx = canvasl4.getContext("2d"); //生成画笔对象
          break;
        default:
          break;
      }

      ctx.lineWidth = 8; //线条的宽度
      ctx.lineCap = 'round';//进度条圆角
      ctx.font = "60px SimHei"; //字体样式
      var start = -90,
        end = this.countAngleFun(rate); //起止点
      ctx.clearRect(0, 0, 160, 160); //清除画布已有内容
      //绘制圆弧
      ctx.beginPath(); //开始绘制路径
      ctx.arc(75, 75, r, start * Math.PI / 180, end * Math.PI / 180, true); //绘制一个弧线
      ctx.strokeStyle = color; //轮廓/描边的颜色
      ctx.fillStyle = color; //填充颜色
      ctx.stroke(); //对一条路径描边
    },
    //右侧画布
    canvasDrawR: function(sex, rate) {
      if (sex == 1) {
        var ctx = canvasr1.getContext("2d"); //生成画笔对象
      } else {
        var ctx = canvasr2.getContext("2d"); //生成画笔对象
      }

      ctx.font = "60px SimHei"; //字体样式
      let start = -40;
      let end = this.countCicleFun(sex, rate); //起止点
      ctx.clearRect(0, 0, 150, 150); //清除画布已有内容
      //绘制圆弧
      ctx.lineWidth=this.flagR?10:17;
      if (sex == 1) {
        this.rateR1=rate;
        this.txtR1="男性读者";
        ctx.lineWidth=this.flagR1?10:17;
        this.flagR1=!this.flagR1;
        ctx.beginPath(); //开始绘制路径
        ctx.arc(75, 75, 63, start * Math.PI / 180, end * Math.PI / 180, true); //绘制一个弧线
        ctx.strokeStyle = "#AC4ED3"; //轮廓/描边的颜色
        ctx.fillStyle = "#AC4ED3"; //填充颜色
          ctx.stroke(); //对一条路径描边
        
      } else {
        this.rateR2=rate;
        this.txtR2="女性读者";
        ctx.lineWidth=this.flagR2?17:10;
        this.flagR2=!this.flagR2;
        ctx.beginPath(); //开始绘制路径
        ctx.arc(75, 75, 67, start * Math.PI / 180, end * Math.PI / 180, false); //绘制一个弧线
        ctx.strokeStyle = "#0E6DE9"; //轮廓/描边的颜色
        ctx.fillStyle = "#0E6DE9"; //填充颜色
        ctx.stroke(); //对一条路径描边
      }
    },
    //计算圆形的度数——num为百分数（百分之几）——用于左侧函数
    countAngleFun: function(num) {
      let endPoint = num / 100 * 360;
      return Number(-90 - endPoint);
    },
    //计算圆形的度数——num为百分数（百分之几）——用于右侧函数
    countCicleFun: function(sex, rate) {
      let endPoint = rate / 100 * 360;
      if (sex == 1) {
        return Number(-45 - endPoint);
      } else {
        return Number(-45 + endPoint);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.chipBox1 {
  position: relative;
  .card {
    position: absolute;
    height: 30px;
    right: 38px;
    line-height: 30px;
    .txt {
      float: left;
      line-height: 30px;
      color: #fff;
    }
    b {
      font-size: 30px;
      color: #20fdfa;
      float: left;
      margin: 0 6px;
    }
  }
  .cardAll {
    top: 27px;
  }
  .cardNow {
    top: 63px;
  }
  .canvasBox {
    position: absolute;
    top: 98px;
  }
  .canvasLeft {
    left: 95px;
    canvas {
      position: absolute;
      left: 0;
    }
  }
  .leftData {
    position: absolute;
    left: 178px;
    top: 95px;
    .list {
      font-size: 12px;
      color: #fff;
      line-height: 15px;
      b {
        margin-left: 8px;
        color: #77ffff;
        font-size: 12px;
        font-weight: normal;
      }
    }
  }
  .canvasRight {
    left: 377px;
    canvas {
      position: absolute;
      left: 0;
    }
    .canvasRightTxt {
      width: 80px;
      height: 60px;
      position: absolute;
      text-align: center;
      top: 45px;
      left: 35px;
      .rate {
        color: #00ffcb;
        font-size: 24px;
        font-weight: bold;
      }
      .txt {
        font-size: 18px;
        color: #fff;
      }
    }
    .iconImg {
      position: absolute;
    }
    .boy {
      top: 90px;
      left: 122px;
    }
    .gril {
      top: 28px;
      left: -12px;
    }
  }
}
</style>