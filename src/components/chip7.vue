<template>
  <div class="chipBox">
    <div class="title">
      <div class="titleSlide"></div>图书借阅排行榜
    </div>
    <div class="numBox">
      <div class="subTitle">近一个月共借出书籍</div>
      <b>{{num}} </b>
      <div class="subTitle">册</div>
    </div>
    <div class="picbox">
      <div v-for="(item,index) in list" :key="index" class="item">
        <img :src="item.imgSrc" class="rotates rotatesimg" />
        <div class="txtBox">
          <div class="txtTitle">{{item.title}}</div>
          <div class="txt txt1">作者：{{item.txt1}}</div>
          <div class="txt txt2">出版社：{{item.txt2}}</div>
          <div class="txt txt3">借阅量：{{item.txt3}}</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: "23,514",
      list: [
        {
          imgSrc: require("../assets/1.png"),
          title: "黑与白",
          txt1: "大卫.麦考利",
          txt2: "人名出版社",
          txt3: "356"
        },
        {
          imgSrc: require("../assets/1.png"),
          title: "黑与白",
          txt1: "大卫.麦考利",
          txt2: "人名出版社",
          txt3: "356"
        },
        {
          imgSrc: require("../assets/1.png"),
          title: "黑与白",
          txt1: "大卫.麦考利",
          txt2: "人名出版社",
          txt3: "356"
        },
        {
          imgSrc: require("../assets/1.png"),
          title: "黑与白",
          txt1: "大卫.麦考利",
          txt2: "人名出版社",
          txt3: "356"
        }
      ]
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="less" scoped>
.numBox {
  float: right;
  margin-right: 32px;
  margin-top: 26px;
  .subTitle {
    font-size: 15px;
    color: #fff;
    float: left;
    line-height: 30px;
  }

  b {
    font-size: 30px;
    color: #00ffcb;
    line-height: 30px;
    float: left;
    margin: 0 10px;
  }
}
.picbox {
  overflow: hidden;
  width: 100%;
  margin-top: 29px;
  float: left;
  margin-left: 47px;
  .item{
    width: 104px;
    height: 206px;
    margin-right: 45px;
    float: left;
    .img{
      width: 104px;
      height: 136px;
      border-radius: 5px;
      float: left;
    }
    .txtBox{
      color: #fff;
      .txtTitle{
        font-size: 12px;
        font-weight: bold;
        margin-top: 14px;
        margin-bottom: 9px;
        text-align: center;
      }
      .txt{
        color: #fff;
        text-align: left;
        font-size: 9px;
        margin-bottom: 9px;
        width: 100%;
        float: left;
      }
    }
  }
}
.picbox .rotatesimg {
  -webkit-animation: transform-5 2s ease 500ms alternate none 1;
  animation: transform-5 2s ease 500ms alternate none 1;
}
@-webkit-keyframes transform-5 {
  from {
    -webkit-transform: perspective(400px) rotateY(180deg);
    transform: perspective(400px) rotateY(180deg);
  }
  to {
    -webkit-transform: perspective(400px) rotateY(0deg);
    transform: perspective(400px) rotateY(0deg);
  }
}
@keyframes transform-5 {
  from {
    -webkit-transform: perspective(400px) rotateY(180deg);
    transform: perspective(400px) rotateY(180deg);
  }
  to {
    -webkit-transform: perspective(400px) rotateY(0deg);
    transform: perspective(400px) rotateY(0deg);
  }
}
</style>