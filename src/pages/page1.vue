<template>
  <div class="page1 page">
      <headerTop></headerTop>
      <div class="container clearfloat box-s">
        <chip1 class="fl"></chip1>
        <chip2 class="fl"></chip2>
        <chip3 class="fl"></chip3>
        <chip4 class="fl"></chip4>
        <chip5 class="fl"></chip5>
        <chip6 class="fl"></chip6>
        <chip7 class="fl"></chip7>
        <chip8 class="fl"></chip8>
        <chip9 class="fl"></chip9>
      </div>
      
  </div>
</template>

<script>
import headerTop from "../components/headerTop.vue"; 
import chip1 from "../components/chip1.vue"; 
import chip2 from "../components/chip2.vue"; 
import chip3 from "../components/chip3.vue"; 
import chip4 from "../components/chip4.vue"; 
import chip5 from "../components/chip5.vue"; 
import chip6 from "../components/chip6.vue"; 
import chip7 from "../components/chip7.vue"; 
import chip8 from "../components/chip8.vue"; 
import chip9 from "../components/chip9.vue"; 

export default {
    data(){
        return{
            
        }
    },
    components: {headerTop,chip1,chip2,chip3,chip4,chip5,chip6,chip7,chip8,chip9},
}
</script>

<style>
.container{
    width: 100%;
    clear: both;
}
</style>