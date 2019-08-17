<template>
  <div class="chipBox chip3 box-s">
    <div class="tu clearfloat box-s">
      <img src="../assets/lib.png" alt="">
    </div>
    <div class="bottomtit cleafloat box-s over">
      公告：益起读书（让成长不孤读）活动即将开启，请大家及时报名参加~
    </div>
  </div>
</template>

<script>
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
.chip3{
    width: 548px !important;
    height: 310px;
    margin-right:0 !important;
    margin-bottom: 14px !important;
    padding: 25px 45px;
    background: url(../assets/icon4.png) no-repeat !important;
    background-size: cover;

    .tu{
      width: 100%;
      text-align: center;
      img{
        width: 364px;
        height: 205px;
      }
    }

    .bottomtit{
      width: 100%;
      font-size: 12px;
      color: #fff;
      background: url(../assets/music.png) left no-repeat;
      background-size: contain;
      padding-left: 24px;
      line-height: 17px;
      margin-top: 24px;
    }
}
</style>