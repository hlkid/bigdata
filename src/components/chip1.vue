<template>
  <div class="chipBox">
      <div class="title">
        <div class="titleSlide"></div>读者分析
      </div>
      <canvas id="canvas" width="300" height="300"></canvas>
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    mounted(){
      // this.canbcasInit();
      this.test();
    },
    methods:{
      canbcasInit:function(){
        var ctx = canvas.getContext('2d');//生成画笔对象
        ctx.lineWidth = 30;//线条的宽度
        ctx.font = '60px SimHei';//字体样式
        var start = -90, end = -90;//起止点
        var timer = setInterval(function () {
            ctx.clearRect(0, 0, 300, 300);//清除画布已有内容
            end += 10;
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
            var percentage = Math.floor((end - start) / 360 * 100) + '%';//绘制文字
            var txtWidth = ctx.measureText(percentage).width; //获得文字的宽度
            ctx.fillText(percentage, 250 - txtWidth / 2, 250 + 30);  //绘制文本
            if (end >= 270) {
                clearInterval(timer);
            }
        }, 200)
      },
      test:function(){
        var ctx = canvas.getContext('2d');//生成画笔对象
        ctx.lineWidth = 5;//线条的宽度
        ctx.font = '60px SimHei';//字体样式
        var start = 40, end = -90;//起止点
        ctx.clearRect(0, 0, 300, 300);//清除画布已有内容
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

</style>