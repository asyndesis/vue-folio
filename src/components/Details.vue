<template>
  <div class="details" v-bind:class="isScreenOpen">
    <router-link :to="{path: '/portfolio'}" class="close-button"></router-link>
      <swiper class="details-preview" :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="(image, index) in currentImages" v-bind:key="index" v-bind:style="{ backgroundImage: 'url(' + require('@/assets/img/'+image) + ')' }"></swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        <div class="swiper-scrollbar"   slot="scrollbar"></div>
      </swiper>
  </div><!--/.offscreen-->
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Details',
  data() {
    return {
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      }
    }
  },
  props: {
    item: Object
  },
  components:{
    swiper,
    swiperSlide
  },
  computed: {
    activeFolioId: function () {
      return this.$store.state.activeFolioId;
    },
    currentFolio: function(){
      return this.$store.getters.getFolioById(this.activeFolioId)
    },
    currentImages: function(){
      return this.currentFolio.images;
    },
    isScreenOpen: function(){
      if (this.$store.state.folioOpen !== false){
        return 'open';
      }
      return '';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .details{
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    right: -100vw;
    bottom: 0;
    z-index: 2;
    list-style: none;
    background: #111;
    transition:1s ease all;
    opacity:0;
    &.open{
      opacity:1;
      right:0%;
    }
    .swiper-slide{
      height:100vh;
      background-size:cover;
      background-position:center left;
      background-repeat:no-repeat;
    }
  }
  .close-button{
    z-index:10;
    top:10px;
    right:10px;
    position:fixed;
  }
</style>
