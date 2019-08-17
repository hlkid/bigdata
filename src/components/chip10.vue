<template>
  <div class="chip10">
      <div v-for="(item,index) in list" :key="index" class="view" :class="'view'+index">
          <img :src="item.img" alt="">
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            list:[{img:require("../assets/img.png")},{img:require("../assets/img.png")},{img:require("../assets/img.png")},
            {img:require("../assets/img.png")},{img:require("../assets/img.png")},{img:require("../assets/img.png")},
            {img:require("../assets/img.png")},{img:require("../assets/img.png")},{img:require("../assets/img.png")}]
        }
    },
    mounted(){

    },
    methods:{

    }
}
</script>

<style lang="less" scoped>
.chip10{
    width: 1301px;
    height: 932px;
    background: url(../assets/icon5.png) no-repeat;
    background-size: cover;
    float: left;
    margin-right: 12px;
    margin-left: 26px;
    .view{
        border-radius: 10px;
        width: 409px;
        height: 284px;
        float: left;
        margin-bottom: 11px;
        margin-right: 15px;
        overflow: hidden;
        img{
            border-radius: 10px;
            width: 100%;
        }
    }
    .view0,.view1,.view2{
        margin-top: 26px;
    }
    .view0,.view3,.view6{
        margin-left: 24px;
    }
}
</style>