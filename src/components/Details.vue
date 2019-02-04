<template>
  <div class="details" v-bind:class="isScreenOpen">
    <router-link :to="{path: '/portfolio'}" class="close-button"></router-link>
    <a href="#" @click="showHideDetails" class="details-button icon info brick-button"></a>
      <swiper class="details-preview" :options="swiperOption" ref="mySwiper" v-bind:class="isDetailsOpen">
        <!-- slides -->
        <swiper-slide v-for="(image, index) in currentImages" v-bind:key="index" v-bind:style="{ backgroundImage: 'url(' + require('@/assets/img/'+image.image) + ')', backgroundPosition: (image.align || 'center') + ' center', backgroundSize: (image.size || 'cover') }">
          <div class="caption">{{image.desc}}</div>
        </swiper-slide>
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
        touchEventsTarget:'wrapper',
        shortSwipes:false,
        simulateTouch:false,
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
    },
    isDetailsOpen: function(){
      if (this.$store.state.detailsOpen !== false){
        return 'details-open';
      }
      return '';
    },
  },
  watch:{
    $route (){
      this.$refs.mySwiper.swiper.slideTo(0, 1000, false);
    }
  },
  methods: {
    showHideDetails: function(e) {
      e.preventDefault();
      if (this.$store.getters.detailsOpen){
        this.$store.dispatch("updateDetailsOpen", false);
      }else{
        this.$store.dispatch("updateDetailsOpen", true);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .details{
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    right: -100%;
    bottom: 0;
    z-index: 2;
    list-style: none;
    background: #111 url('../assets/img/spinner.gif') center center no-repeat;
    transition:1s ease all;
    &.open{
      right:0%;
    }
    .swiper-slide{
      position:relative;
      height:100vh;
      width:100%;
      background-size:cover;
      background-position:center left;
      background-repeat:no-repeat;
    }
  }
  .details-button{
    z-index:100;
    position:absolute;
    bottom:10px;
    left:10px;
    background-color:#333;
  }
  .caption{
    transition:.1s ease all;
    background:#333;
    position:absolute;
    bottom:0px;
    right:0px;
    left:0px;
    padding:20px;
    color:#FFF;
    opacity:0;
    padding-left:100px;
  }
  .details-open{
    .caption{
      opacity:1;
    }
    .details-button{
      background-color:#555;
    }
  }
  .close-button{
    z-index:10;
    top:10px;
    right:10px;
    position:absolute;
  }
  .swiper-button-white{
    background:#333;
    border-top:1px solid #888;
    display:block;
    width: 50px;
    height: 50px;
    border-radius:100%;
    background-position: 50%;
    background-size:50%;
    outline:none;
  }
  .swiper-button-next{
    &:before{
      content:'';
      width:100%;
      height:100%;
      display:block;
      background-repeat:no-repeat;
      background-position: 50%;
      background-size:30%;
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E");
    }
  }
  .swiper-button-prev{
    &:before{
      content:'';
      width:100%;
      height:100%;
      display:block;
      background-repeat:no-repeat;
      background-position: 50%;
      background-size:30%;
      background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E");
    }
  }
  @media (max-width: 768px){
    .swiper-slide{
      background-size:contain!important;
      background-position: center center!important;
    }
  }
</style>
