<template>
  <div class="details" v-bind:class="isScreenOpen">
    <div class="details-preview" v-bind:style="{ backgroundImage: 'url(' + require('@/assets/img/'+currentFolio.preview) + ')' }">

    </div>
  </div><!--/.offscreen-->
</template>

<script>
export default {
  name: 'Details',
  props: {
    item: Object
  },
  computed: {
    activeFolioId: function () {
      return this.$store.state.activeFolioId;
    },
    currentFolio: function(){
      return this.$store.getters.getFolioById(this.activeFolioId)
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
    transition:.3s ease all;
    opacity:0;
    &.open{
      opacity:1;
      right:0%;
    }
    .details-preview{
      height:50vh;
      background-size:cover;
      background-position:center center;
    }
  }
</style>
