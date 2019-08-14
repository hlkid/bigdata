<template>
  <div class="page1 page">
      <headerTop></headerTop>
      <chip10></chip10>
      <chip3></chip3>
      <chip6></chip6>
      <chip9></chip9>
  </div>
</template>

<script>
import headerTop from "../components/headerTop.vue"; 
import chip10 from "../components/chip10.vue";
import chip3 from "../components/chip3.vue"; 
import chip6 from "../components/chip6.vue";
import chip9 from "../components/chip9.vue"; 

export default {
    data(){
        return{
            
        }
    },
    components: {headerTop,chip10,chip3,chip6,chip9},
}
</script>

<style>

</style>