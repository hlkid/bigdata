<template>
  <div class="chipBox chip6">
    <div class="top clearfloat box-s fl">

    </div>
    <div class="middle clearfloat box-s fl">
      <div class="left clearfloat fl">
        <p class="tit fl clearfloat">
          今日借阅图书的还书日期为
        </p>
        <div class="time fl clearfloat">
          <div class="year fl clearfloat">
            <div class="zuo clearfloat fl">
              <ul>
                <li>2</li>
                <li>0</li>
                <li>1</li>
                <li>9</li>
              </ul>
            </div>
            <p class="fl">年</p>
          </div>
        </div>
      </div>
      <div class="right clearfloat fr">

      </div>
    </div>
    <div class="bottom clearfloat box-s fl">

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
.chip6{
  width: 548px !important;
  margin-right:0;
  height:301px;
  background: none !important;

  .top{
    width: 100%;
    border: 1px solid #06076B;
    height: 48px;
  }
  .middle{
    width: 100%;
    border: 1px solid #06076B;
    height: 110px;
    margin-top: 11px;
    padding: 15px 30px;
    .left{
      width: 360px;
      .tit{
        width: 100%;
        color: #fff;
        font-size: 18px;
      }
    }
  }
  .bottom{
    width: 100%;
    border: 1px solid #06076B;
    height: 116px;
    margin-top: 11px;
  }
}
</style>