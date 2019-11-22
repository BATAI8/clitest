<template>
  <div>
    我是购物车
    <router-link to='/'>返回首页</router-link>
    <div class="block">
      <span class="demonstration">默认</span>
      <el-slider v-model="value1"></el-slider>
    </div>
    <!-- 轮播 -->
    <swiper
      :options="swiperOption"
      ref="mySwiper"
    >
      <!-- slides -->
      <swiper-slide>I'm Slide1</swiper-slide>
      <swiper-slide>I'm Slide222</swiper-slide>
      <!-- ... -->
      <!-- <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div> -->
    </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
require("swiper/dist/css/swiper.css");

export default {
  data() {
    return {
      value1: 0,
      value2: 5012312,
      value3: 36,
      value4: 40,
      value5: 40,
      swiperOption: {
        notNextTick: true,
        // 循环，
        loop: true,
        // 设定初始化时slide的索引
        initialSlide: 0,
        // 自动播放
        autoplay: {
          delay: 3000,
          // stopOnLastSlide: false,
          disableOnInteraction: true
        },
        // 滑动速度
        speed: 800
        // ......
        // 可自己修改、添加
      }
    };
  },
  methods: {
    formatTooltip(val) {
      return val / 100;
    }
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>
<style scoped>
.swiper-slide {
  border: 1px solid pink;
  height: 200px;
}
</style>