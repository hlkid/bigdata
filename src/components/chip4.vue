<template>
  <div class="chipBox">
      <div class="title">
          <div class="titleSlide"></div>
          活动预告
      </div>
      <div style="width:100%;float:left">
        <img class="imgLogo" :src="imgSrc"/>
        <div class="msgBox">
          <div class="mainTitle">{{title}}</div>
          <div class="subTitle">发布时间：{{txt1}}</div>
          <div class="subTitle">报名日期：{{txt2}}</div>
          <div class="subTitle">签到时间：{{txt3}}</div>
          <div class="subTitle">活动时间：{{txt4}}</div>
          <div class="subTitle">活动名额：{{txt5}}（已报名{{txt6}}）</div>
          <div class="subTitle">互动地点：{{txt7}}</div>
        </div>
      </div>
      
  </div>
</template>

<script>
export default {
    data(){
        return{
          imgSrc:require("../assets/listu.png"),
          title:"益起读书（让成长不孤独）",
          txt1:"2019-08-01",
          txt2:"2019-08-01~09-01",
          txt3:"2019-08-01 09:00~12:00",
          txt4:"2019-08-01 09:00~16:00",
          txt5:"200",
          txt6:"12",
          txt7:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        }
    },
    mounted(){

    },
    methods:{

    }
}
</script>

<style lang="less" scoped>
.imgLogo{
  width:228px;
  height:192px;
  margin-top: 34px;
  margin-left: 27px;
}
</style>