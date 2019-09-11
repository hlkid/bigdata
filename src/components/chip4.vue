<template>
  <div class="chipBox">
      <div class="title">
          <div class="titleSlide"></div>
          活动预告
      </div>
      <div style="width:100%;float:left">
        <img class="imgLogo" :src="activitylist.actCover"/>
        <div class="msgBox">
          <div class="mainTitle">{{activitylist.actName}}</div>
          <div class="subTitle">发布时间：{{activitylist.publishTime}}</div>
          <div class="subTitle">报名日期：{{activitylist.signupDate}}</div>
          <div class="subTitle">签到时间：{{activitylist.signinDatetime}}</div>
          <div class="subTitle">活动时间：{{activitylist.holdTime}}</div>
          <div class="subTitle">活动名额：{{activitylist.votes}}（已报名{{activitylist.signNum}}）</div>
          <div class="subTitle">互动地点：{{activitylist.actAddr}}</div>
        </div>
      </div>
      
  </div>
</template>

<script>
import { activityList } from "../api/getData.js";
import { ajaxCallback } from "../js/common.js";
export default {
    data(){
        return{
          activitylist:""
        }
    },
    mounted(){
      this.activityList();
    },
    methods:{
      activityList: function() {
        let _this = this;
        let params = {
          rcount:1
        }
        ajaxCallback( activityList, true, params, "GET", function(res) {
            console.log(res.data.activitylist[0])
            _this.activitylist = res.data.activitylist[0]
          }
        );
      },
    }
}
</script>

<style lang="less" scoped>
.imgLogo{
  width:228px;
  height:192px;
  margin-top: 34px;
  margin-left: 27px;
  float: left;
}
.msgBox{
  float: left;
  color: #fff;
  margin-left: 29px;
  margin-top: 40px;
  .mainTitle{
    font-size: 21px;
    line-height: 21px;
    font-weight: bold;
  }
  .subTitle{
    margin-top: 14px;
    font-size: 12px;
    line-height: 12px;
  }
}
</style>