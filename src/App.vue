<template>
  <div id="app">
    <Details/>
    <div id="site-wrap" v-bind:class="isScreenOpen">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Details from '@/components/Details'

export default {
  name: 'home',
  components: {
    Details
  },
  computed: {
    isScreenOpen: function(){
      if (this.$store.state.folioOpen !== false){
        return 'open';
      }
      return '';
    }
  }
}
</script>

<style lang="scss">
html{
  background:#555;
}
body{
  overflow-x: hidden;
  margin:0;
  padding:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  text-align: center;
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#site-wrap {
  transition: 0.3s ease right;
  min-height: 100%;
  min-width: 100%;
  position: relative;
  top: 0;
  bottom: 100%;
  right: 0%;
  z-index: 1;
  &.open{
    right: 100%;
    overflow:hidden;
    height:100vh;
  }
}
</style>
