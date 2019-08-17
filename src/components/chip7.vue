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
    <div class="picbox" v-if="list.length>0">
      <div v-for="(item,index) in list" :key="index" class="item">
        <div class="num rotatesimg">{{nowpage*4+index+1}}</div>
        <img :src="item.imgSrc" class="rotates rotatesimg" />
        <div class="txtBox">
          <div class="txtTitle over">{{item.title}}</div>
          <div class="txt over">作者：{{item.txt1}}</div>
          <div class="txt over">出版社：{{item.txt2}}</div>
          <div class="txt over">借阅量：{{item.txt3}}</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nowpage:0,
      num: "23,514",
      allpage:1,//总页数
      timer:"",//定时器
      list: [],
      resList:[
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
  mounted() {
    this.allpage=Math.ceil(this.resList.length / 4);
    for(let i=0;i<4;i++){
      this.list.push(this.resList[i])
    }
    if(this.resList.length>4){
      this.timer = setInterval(this.timeInterval, 6000);
    }else{
      this.list=this.resList
    }
  },
  beforeDestroy() {
      clearInterval(this.timer);
    },
  methods: {
    //设置定时器循环轮播数据
    timeInterval:function(){
      let _this=this;
      let tempPage=this.nowpage+1;
      this.list=[];
      setTimeout(function(){
        for(let i=4*tempPage;i<4*tempPage+4;i++){
        if(_this.resList[i]){
          _this.list.push(_this.resList[i])
        }
      }
      },50)
      console.info(this.nowpage,this.allpage)
      if(Number(tempPage+1)>=Number(this.allpage)){
        this.nowpage=-1
      }else{
        this.nowpage=this.nowpage+1
      }
    }
  }
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
  margin-top: 24px;
  float: left;
  margin-left: 47px;
  transition: all 1s;
  .item{
    width: 104px;
    height: 212px;
    margin-right: 45px;
    float: left;
    position: relative;
    .num{
      width: 21px;
      height: 21px;
      border-radius: 5px 0 5px 0;
      position: absolute;
      left: 0;
      top: 0;
      line-height: 21px;
      text-align: center;
      color: #fff;
      background: #F2CA1A;
      font-size: 12px;
      z-index: 999;
    }
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
        margin-top: 5px;
        margin-bottom: 5px;
        text-align: center;
      }
      .txt{
        color: #CBCCCD;
        text-align: left;
        font-size: 9px;
        width: 100%;
        float: left;
        transform:scale(0.8);
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