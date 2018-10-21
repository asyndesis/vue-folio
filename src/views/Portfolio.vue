<template>
  <div class="brick-container">
    <Brick v-bind:item="item" v-for="(item, index) in portfolio" v-bind:key="index" v-bind:to="{path: '/portfolio/' + item.id}"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Brick from '@/components/Brick.vue'
import { mapGetters } from 'vuex'
import Details from '@/components/Details'

export default {
  name: 'home',
  components: {
    Brick,
    Details
  },
  watch:{
    $route (to, from){
      let newId = to.params.id || false;
      this.showDetails(newId);
    }
  },
  computed: {
    ...mapGetters([
      'portfolio'
    ])
  },
  mounted: function(){
    let id = this.$route.params.id || false;
    this.showDetails(id);
  },
  methods: {
    showDetails: function(id) {
      if (id){
        this.$store.dispatch("updateFolioOpen", true);
        this.$store.dispatch("updateActiveFolioId", id);
      }else{
        this.$store.dispatch("updateFolioOpen", false);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .brick-container{
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-flow: row wrap;
    padding:10px;
  }
</style>
