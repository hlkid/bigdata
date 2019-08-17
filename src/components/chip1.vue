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
        <canvas id="canvasl" width="150" height="150"></canvas>
      </div>
      <div class="canvasBox canvasRight">
        <canvas id="canvasr" width="150" height="150"></canvas>
      </div>
      
  </div>
</template>

<script>
export default {
    data(){
        return{
          cardAll:"16,523",
          cardNow:"13"
        }
    },
    mounted(){
      this.canvasDrawL();
      this.canvasDrawR();
    },
    methods:{
      //左侧画布
      canvasDrawL:function(){
        var ctx = canvasl.getContext('2d');//生成画笔对象
        ctx.lineWidth = 5;//线条的宽度
        ctx.font = '60px SimHei';//字体样式
        var start = 40, end = -90;//起止点
        ctx.clearRect(0, 0, 150, 150);//清除画布已有内容
        //绘制圆弧
        ctx.beginPath();//开始绘制路径
        ctx.arc(150, 150, 50, start * Math.PI / 180, end * Math.PI / 180);//绘制一个弧线
        if (end - start < 120) {    //1/3范围内 红色
            ctx.strokeStyle = 'red';//轮廓/描边的颜色
            ctx.fillStyle = 'red';//填充颜色
        } else if (end - start < 240) {
            ctx.strokeStyle = 'orange';
            ctx.fillStyle = 'orange';
        } else {
            ctx.strokeStyle = 'green';
            ctx.fillStyle = 'green';
        }
        ctx.stroke();//对一条路径描边
      },
      //右侧画布
      canvasDrawR:function(){
        var ctx = canvasr.getContext('2d');//生成画笔对象
        ctx.lineWidth = 5;//线条的宽度
        ctx.font = '60px SimHei';//字体样式
        var start = 40, end = -90;//起止点
        ctx.clearRect(0, 0, 150, 150);//清除画布已有内容
        //绘制圆弧
        ctx.beginPath();//开始绘制路径
        ctx.arc(150, 150, 50, start * Math.PI / 180, end * Math.PI / 180);//绘制一个弧线
        if (end - start < 120) {    //1/3范围内 红色
            ctx.strokeStyle = 'red';//轮廓/描边的颜色
            ctx.fillStyle = 'red';//填充颜色
        } else if (end - start < 240) {
            ctx.strokeStyle = 'orange';
            ctx.fillStyle = 'orange';
        } else {
            ctx.strokeStyle = 'green';
            ctx.fillStyle = 'green';
        }
        ctx.stroke();//对一条路径描边
      }
    }
}
</script>

<style lang="less" scoped>
.chipBox1{
  position: relative;
  .card{
    position: absolute;
    height: 30px;
    right: 38px;
    line-height: 30px;
    .txt{
      float: left;
      line-height: 30px;
      color: #fff;
    }
    b{
      font-size: 30px;
      color: #20FDFA;
      float: left;
      margin: 0 6px;
    }
  }
  .cardAll{
    top: 27px;
  }
  .cardNow{
    top:63px;
  }
  .canvasBox{
    position: absolute;
    top: 98px;
  }
  .canvasLeft{
    left: 95px;
  }
  .canvasRight{
    left: 377px;
  }
}
</style>