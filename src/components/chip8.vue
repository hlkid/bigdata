<template>
  <div class="chipBox">
    <div class="title">
      <div class="titleSlide"></div>新书推荐
    </div>
    <div class="box">
      <div class="list">
        <div class="li_list clearfloat box-s" v-for="(item,index) in resList" :key="index">
          <p class="tit over fl">
            {{item.bookName}}
          </p>
          <div class="li_bottom clearfloat box-s">
            <p class="nr fl over">
                作者：{{item.author}}
            </p>
            <p class="nr fl over">
                出版社：{{item.publisher}}
            </p>
            <p class="nr fl over">
                索书号：{{item.callNo}}
            </p>
          </div>
        </div>
        <ul>
          <li class="p7" v-for="(item,index) in resList" :key="index" >
            <img :src="item.cover" alt />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { bookNewList } from "../api/getData.js";
import { ajaxCallback } from "../js/common.js";
export default {
  data() {
    return {
      currentindex:0,
      resList:[]
    };
  },
  mounted() {
    this.bookNewList();
    var $s = $(".box .list ul li");
    var cArr = ["p7", "p6", "p5", "p4", "p3", "p2", "p1"];
    var index = 2;
    $(".next").click(function() {
      nextimg();
    });
    $(".prev").click(function() {
      previmg();
    });
    //上一张
    function previmg() {
      cArr.unshift(cArr[6]);
      cArr.pop();      
      //i是元素的索引，从0开始
      //e为当前处理的元素
      //each循环，当前处理的元素移除所有的class，然后添加数组索引i的class
      $(".box .list ul li").each(function(i, e) {
        $(e)
          .removeClass()
          .addClass(cArr[i]);
      });
      index--;
      if (index < 0) {
        index = 6;
      }
      show();
    }

    //下一张
    function nextimg() {
      cArr.push(cArr[0]);
      cArr.shift();
      $(".box .list ul li").each(function(i, e) {
        $(e)
          .removeClass()
          .addClass(cArr[i]);      
      });  
      index++;     
      if (index > 6) {
        index = 0;
      }
      show(index);
    }

    //改变标题内容
    function show() {
      $(".box .list ul li")
        .eq(6-index)
        .addClass("active")
        .parent()
        .siblings()
        .children()
        .removeClass("active");
      $(".box .list .li_list")
        .eq(6-index)
        .addClass("listactive")
        .siblings()
        .removeClass("listactive");
    }

    // //点击class为p2的元素触发上一张照片的函数
    // $(document).on("click", ".p2", function() {
    //   previmg();
    //   return false; //返回一个false值，让a标签不跳转
    // });

    // //点击class为p4的元素触发下一张照片的函数
    // $(document).on("click", ".p4", function() {
    //   nextimg();
    //   return false;
    // });

    //          进入页面自动开始定时器
    var timer = setInterval(nextimg, 4000);
  },
  methods: {
    bookNewList: function() {
      let _this = this;
      let params = {
        rcount:7
      }
      ajaxCallback( bookNewList, true, params, "GET", function(res) {
          console.log(res.data.booklist)
          _this.resList = res.data.booklist
        }
      );
    },
  }
};
</script>

<style lang="less" scoped>
.box {
  width: 100%;
  height: 200px;
  position: relative;
  margin-top: 80px;
  margin-left: 55px;
}

.list {
  width: 320px;
  height: 200px;
  overflow: hidden;
  left: 0;
}
li {
  position: absolute;
  top: 0;
  left: 0;
  list-style: none;
  opacity: 0;
  transition: all 0.3s ease-out;
  -webkit-box-reflect: below 0px -webkit-linear-gradient(bottom, rgba(
          255,
          255,
          255,
          0.3
        )
        0%, transparent 40%, transparent 100%);
}
li:before {
  content: "";
  background: -moz-linear-gradient(
        top,
        white,
        white 30%,
        rgba(255, 255, 255, 0.9) 65%,
        rgba(255, 255, 255, 0.7)
      )
      0px 0px,
    -moz-element(li) 0px 0px no-repeat;
  /*百分比为调倒影的透明度*/
  -moz-transform: scaleY(-1);
  padding: 1px 0px;
  background-origin: padding-box, content-box;
  background-clip: padding-box, content-box;
  position: absolute;
  width: 114px;
  top: 149px;
  left: 0px;
}
.li_list{
  position: absolute;
  top: 0;
  left: 360px;
  z-index: 999;
  width: 178px;
  height: 200px; 
  display: none;   
  
  .tit{
    width: 100%;
    font-size: 21px;
    color: #fff;
    font-weight: bold;
    padding-bottom: 12px;
  }
  .li_bottom{
    width: 100%;
    .nr{
      width: 100%;
      height: 35px;
      line-height: 35px;
      font-size: 12px;
      color: #fff;
      border-bottom: 1px dashed #102e93;

      &:last-child{
        border-bottom: none;
      }
    }
  }
}
.listactive{
  display:block;
}

img {
  border: none;
  float: left;
  width: 100px;
  height: 130px;
}
.p1 {
  transform: translate3d(-5px, 0, 0) scale(0.81);
  opacity: 0.8;
  top: 5px;
  z-index: 1;
}
.p1 img {
  width: 100px;
  height: 130px;
}
.p2 {
  transform: translate3d(50px, 0, 0) scale(0.81);
  transform-origin: 0 50%;
  opacity: 0.8;
  z-index: 2;
}
.p3 {
  transform: translate3d(100px, 0, 0) scale(1);
  z-index: 3;
  opacity: 1;
}
.p4 {
  transform: translate3d(145px, 0, 0) scale(0.81);
  transform-origin: 100% 50%;
  opacity: 0.8;
  z-index: 2;
}
.p5 {
  transform: translate3d(205px, 0, 0) scale(0.81);
  opacity: 0.8;
  top: 5px;
  z-index: 1;
}
.p5 img {
  width: 100px;
  height: 130px;
}

.buttons {
  position: absolute;
  width: 1200px;
  height: 30px;
  bottom: 0;
  left: 50%;
  margin-left: -600px;
  text-align: center;
  padding-top: 10px;
  display: none;
}
.buttons a {
  display: inline-block;
  width: 35px;
  height: 5px;
  padding-top: 4px;
  cursor: pointer;
}
span {
  display: block;
  width: 35px;
  height: 1px;
  background: red;
}
.blue {
  background: blue;
}
</style>