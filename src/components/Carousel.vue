<template>
  <div id="carouselExampleIndicators" class="carousel slide carousel-fade index-carousel" data-bs-ride="carousel" data-bs-pause="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>

  <div class="carousel-inner" ref="storeCarousel">
    <div class="carousel-item active">
      <img src="~@/assets/img/carousel-banner1.jpg" class="d-block carousel-img">
    </div>
    <div class="carousel-item">
      <img src="~@/assets/img/carousel-banner2.jpg" class="d-block carousel-img">
    </div>
    <div class="carousel-item">
      <img src="~@/assets/img/carousel-banner3.jpg" class="d-block carousel-img">
    </div>
  </div>

  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">上一頁</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">下一頁</span>
  </button>
</div>
</template>

<style>
/* 輪播區塊向下推125px，避免輪播圖被navbar遮擋到 */
.index-carousel {
    padding-top: 125px;
  }

/* 輪播指示器樣式 */
.carousel-indicators [data-bs-target] {
    border-radius: 50%;
    width: 15px;
    height: 15px;
    background-color: RoyalBlue;   
  }

.carousel-indicators .active {
    background-color: MidnightBlue;
  }

/* 輪播圖寬高設定 */
.carousel-img {
    max-width: 100%;
    height: auto;
  }
  
/* 輪播控制項樣式 */
.carousel-control-prev-icon,
.carousel-control-next-icon {
    height: 80px;
    width: 80px;
    outline: RoyalBlue;
    background-size: 100%, 100%;
    border-radius: 50%;
    border: 1px solid RoyalBlue;
    background-image: none;
  }

.carousel-control-next-icon:after {
    content: '>';
    font-size: 50px;
    color: MidnightBlue;
  }

.carousel-control-prev-icon:after {
    content: '<';
    font-size: 50px;
    color: MidnightBlue;
  }
/* RWD響應式網頁設計 */
/* 767px以下時隱藏輪播指示器及輪播控制項 */
    @media(max-width:767px) {
      .carousel-indicators,
      .carousel-control-prev,
      .carousel-control-next {
        display: none;
      }
  }
</style>

<script>
import Carousel from 'bootstrap/js/dist/carousel';

export default {
    data() {
        return {
            storeCarousel: {}
        }
    },

    mounted() {
        this.storeCarousel = new Carousel(this.$refs.storeCarousel,{interval:1000});
    }
};
</script>