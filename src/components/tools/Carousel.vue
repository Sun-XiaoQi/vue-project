<style>
    .mint-swipe {
        height: 200px;
        color: #fff;
        font-size: 30px;
        text-align: center;
        margin-bottom: 20px;
      }

      .mint-swipe-item {
        line-height: 200px;
      }
    .slide {
        background-color: #0089dc;
        color: #fff;
      }
       .img{
         min-height: 200px;
        width: 100%;
    }
</style>

<template>
   <mt-swipe :auto="3000">
      <!--为什么会这样：在vue中，遍历的时候，需要给一个不重复的key值，提升性能优化-->
      <!--mint-ui轮播图-->
      <mt-swipe-item class="slide" v-for="(item,index) in lunbotuData" :key="index">
          <a :href="item.url">
              <img :src="item.img" alt="" class="img">
          </a>
      </mt-swipe-item>
  </mt-swipe>
</template>

<script>
  export default {
    props: ['lunbotuData']
  }
</script>


