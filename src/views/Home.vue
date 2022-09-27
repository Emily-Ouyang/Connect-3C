<template>
  <NavbarFront></NavbarFront>
  <Carousel></Carousel>

  <div>
    <img src="~@/../src/assets/img/banner.png" class="banner-img">
  </div>

  <div class="my-3">
    <img src="~@/../src/assets/img/舊機換新機.png" class="old-turn-new-img">
  </div>
</template>

<style>
  .banner-img {
    display: block;
    margin: auto;
    max-width: 100%;
  }

  .old-turn-new-img {
    display: block;
    margin: auto;
    max-width: 100%;
  }
</style>

<script>
import NavbarFront from '@/components/NavbarFront.vue';
import Carousel from '@/components/Carousel.vue';

export default {
  name: 'Home',

  components: {
    NavbarFront,
    Carousel
  },

  created() {
    console.log(process.env.VUE_APP_API, process.env.VUE_APP_PATH);
  }
};
</script>