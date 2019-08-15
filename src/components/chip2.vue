<template>
  <div class="chipBox">
      <div class="title">
          <div class="titleSlide"></div>累计进馆
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
        <div class="num">{{enterNum}}</div>
        <div class="enterTitle">今日进馆人次</div>
         
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
          num1:"0",
          num2:"1",
          num3:"2",
          num4:"2",
          num5:"6",
          num6:"2",
          num7:"4",
          num8:"9",
          num9:"8",
          enterNum:1500
        }
    },
    mounted(){

    },
    methods:{

    }
}
</script>

<style lang="less" scoped>
.numberTitle{
  margin-top: 22px;
  margin-right: 43px;
  float: right;
  color: #fff;
  line-height: 40px;
    text-align: center;
    font-weight: bold;
  .num{
    width:33px;
    height:40px;
    border:2px solid rgba(18,56,182,1);
    border-radius:5px;
    float: left;
    margin-left: 4px;
    font-size: 30px;
  }
  .tips{
    width: 10px;
    height: 40px;
    border: none;
    font-size: 30px;
    line-height: 50px;
    margin-left: 6px;
  }
}
.enterBox{
  float: right;
  color: #fff;
  font-size: 12px;
  width: 330px;
  margin-right: 44px;
  text-align: right;
  margin-top: 23px;
  .enterTitle{
    line-height: 21px;
    float: right;
  }
  .num{
    font-size: 21px;
    line-height: 21px;
    font-weight: bold;
    color: #FBD70C;
    margin-left: 11px;
    float: right;
  }
}
</style>