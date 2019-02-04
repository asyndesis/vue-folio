<template>
  <div id="app">
    <router-link :to="{path: '/'}" id="menu" v-bind:class="isOnlyHome" class="icon home brick-button">
      
    </router-link>
    <div id="backdrop" v-bind:class="isRouteHome">
    </div>
    <div id="home" v-bind:class="isRouteHome">
      <div id="logo" v-bind:style="{ backgroundImage: 'url(' + require('@/assets/img/logo-trevor-design.png') + ')' }"></div>
      <div id="blue-bar">
      </div>
      <div id="clear-bar">
        <router-link :to="{path: '/portfolio'}">
          Portfolio
        </router-link>
        <img src="@/assets/img/divider.png" />
        <a href="http://www.trevorbonomi.com" target="_blank">
          Resume
        </a>
        <img src="@/assets/img/divider.png" />
        <a href="http://www.github.com/asyndesis" target="_blank">
          Github
        </a>
      </div>
    </div>
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
    },
    isRouteHome: function(){
      if (this.$route.name == 'home'){
        return 'open';
      }
      return '';
    },
    isOnlyHome: function(){
      if (this.$route.name == 'home'){
        return 'open';
      }
      if (this.$store.state.folioOpen !== false){
        return 'open';
      }
      return '';
    }
  }
}
</script>

<style lang="scss">
$buttonSize: 70px;
$buttonColor: #333;
html{
  background:#222;
}
body{
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
#home{
  left:0;
  position: fixed;
  top: -100vh;
  right: 0;
  bottom: 0;
  z-index:10;
  height:100vh;
  transition: all .5s ease-in-out;
  #logo{
    left:-100vw;
  }
  #clear-bar{
    right:-100vw;
  }
  &.open{
    top:0;
    #logo{
      left:0vw;
    }
    #clear-bar{
      right:0vw;
    }
  }
}
#backdrop{
  background:#222;
  top:0;
  left:0;
  position: fixed;
  right: 0;
  bottom: 0;
  z-index:9;
  transition: 1s ease all;
  height:100vh;
  opacity:0;
  pointer-events: none;
  &.open{
    opacity:1;
  }
}
#blue-bar{
  position:absolute;
  border-top: 20px solid #0062b7;
  border-bottom: 20px solid #0070d1;
  margin-top: -95px;
  top: 50%;
  left:0;
  width:100%;
  background: #0069c4;
  height:150px;
}
#clear-bar{
  transition: 1s ease all;
  position:absolute;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  margin-top: -95px;
  top: 50%;
  width:100%;
  background: transparent;
  height:150px;
  z-index:3;
  text-align:center;
  line-height:150px;
  font-family: "Oswald",sans-serif;
  a{
    color:#eae7d4;
    text-decoration: none;
    font-size:calc(14px + 2vw);
    text-transform: uppercase;
    letter-spacing:-1px;
    &:hover{
      color:#FFF;
    }
  }
  img{
    opacity:.65;
    vertical-align: middle;
    margin:-20px 10px 0px 10px;
  }
}
#menu{
  transition: 1s ease all;
  z-index:8;
  position:fixed;
  top:8px;
  left:8px;
  background-color:$buttonColor;
  border-top:1px solid #555;
  display:block;
  width: $buttonSize;
  height: $buttonSize;
  border-radius:100%;
  background-position: 50%;
  background-size:50%;
  &.open{
    left:-$buttonSize;
    top:-$buttonSize;
  }
}
#site-wrap {
  transition: 1s ease right;
  min-width: 100%;
  position: relative;
  top: 0;
  bottom: 100%;
  right: 0%;
  z-index: 1;
  height:100vh;
  &.open{
    right: 100%;
    height: 100vh;
  }
}
#logo{
  transition: 1s ease all;
  z-index:2;
  position:absolute;
  width:100%;
  margin-top:4%;
  height:calc((100vh - 190px)/2);
  background-repeat:no-repeat;
  background-size:50%;
  background-position:center bottom;
}
.brick-button{
  color: #fff;
  border-top:1px solid #AAA;
  background-color: #555;
  border-radius: 100%;
  display: block;
  margin-left: 5px;
  margin-right: 5px;
  display:inline-block;
  height: $buttonSize;
  width: $buttonSize;
  background-position: 50%;
  transition: all .3s linear;
  cursor: pointer;
}
.icon{
  position:relative;
  &.eye{
    background-image: url("data:image/svg+xml;charset=utf8,%3C?xml version='1.0' encoding='UTF-8'?%3E%3Csvg width='30px' height='20px' viewBox='0 0 30 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 46.2 (44496) - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3Eicon-eye%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='Icons' transform='translate(-15.000000, -209.000000)' fill-rule='nonzero' fill='%23FFFFFF'%3E%3Cg id='icon-eye' transform='translate(15.000000, 209.000000)'%3E%3Cpath d='M14.6923844,5.00279049e-07 C8.26682548,0.00684260554 3.40133232,4.91078997 0.206364636,9.22594787 C-0.0687882121,9.59794776 -0.0687882121,10.1060006 0.206364636,10.4780005 C3.40155179,14.8011584 8.26557074,19.7044742 14.6923844,19.7131584 C14.6930686,19.7131591 14.6937528,19.7131591 14.6944371,19.7131584 C21.1199844,19.7063163 25.9854897,14.8023163 29.1804571,10.487211 C29.4556099,10.1152111 29.4556099,9.60715829 29.1804571,9.2351584 C25.9852681,4.91194787 21.1212623,0.00868471081 14.6944371,5.00279049e-07 C14.6937528,-1.66759683e-07 14.6930686,-1.66759683e-07 14.6923844,5.00279049e-07 L14.6923844,5.00279049e-07 Z M14.6923844,2.10526366 L14.6944371,2.10526366 C19.752865,2.1131584 23.9547623,5.96184261 26.9672576,9.8601584 C23.9543865,13.7523689 19.7504571,17.6014216 14.6944371,17.6078952 C9.63510495,17.6010531 5.43247127,13.75179 2.41956048,9.8530005 C5.43242916,5.96078997 9.63634811,2.11173734 14.6923813,2.10526366 L14.6923844,2.10526366 Z' id='Shape'%3E%3C/path%3E%3Cpath d='M14.6934123,5.11921103 C12.089795,5.11921103 9.95657022,7.25247418 9.95657022,9.85605313 C9.95657022,12.4596847 12.089795,14.5928952 14.6934123,14.5928952 C17.2970297,14.5928952 19.4302544,12.4596847 19.4302544,9.85605313 C19.4302544,7.25247418 17.2970297,5.11921103 14.6934123,5.11921103 Z M14.6934123,7.22447418 C16.1592613,7.22447418 17.3249913,8.39021103 17.3249913,9.85605313 C17.3249913,11.3218952 16.1592613,12.4876321 14.6934123,12.4876321 C13.2275634,12.4876321 12.0618334,11.3218952 12.0618334,9.85605313 C12.0618334,8.39021103 13.2275634,7.22447418 14.6934123,7.22447418 Z' id='Shape'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-repeat: no-repeat;
    &:after{
      content:"images";
    }
  }
  &.external{
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml;charset=utf8,%3C?xml version='1.0' encoding='UTF-8'?%3E%3Csvg width='23px' height='23px' viewBox='0 0 23 23' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 46.2 (44496) - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3Eicon-external%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='Icons' transform='translate(-355.000000, -63.000000)' fill-rule='nonzero' fill='%23FFFFFF'%3E%3Cg id='icon-external' transform='translate(355.000000, 63.000000)'%3E%3Cpath d='M21.5428289,0.000471499729 L14.8244079,0.197182026 C14.3919285,0.209075201 13.998646,0.450789966 13.7927061,0.831274707 C13.5867662,1.21175945 13.599456,1.67320948 13.8259955,2.04180104 C14.052535,2.41039259 14.4585074,2.63012785 14.8909868,2.61823466 L18.5679605,2.51533992 L9.57677632,11.4913926 C9.26971594,11.7984529 9.1497952,12.2460032 9.2621871,12.6654554 C9.374579,13.0849077 9.70220852,13.4125372 10.1216608,13.5249291 C10.5411131,13.637321 10.9886633,13.5174003 11.2957237,13.2103399 L20.2808553,4.21915571 L20.1688816,7.89612939 C20.1599302,8.2172148 20.2789592,8.52869366 20.4997596,8.76198141 C20.7205599,8.99526917 21.0250263,9.13123666 21.3461184,9.13994518 L21.3794079,9.13994518 C22.0351756,9.14019319 22.5719006,8.61822811 22.5899342,7.96270834 L22.7775658,1.24428729 C22.7868464,0.911648528 22.6587844,0.589858237 22.4234817,0.354555587 C22.1881791,0.119252936 21.8663888,-0.00880906362 21.53375,0.000471499729 L21.5428289,0.000471499729 Z' id='Shape'%3E%3C/path%3E%3Cpath d='M10.3242763,22.7886294 C16.0237958,22.7819557 20.6420365,18.1623611 20.6470395,12.4628399 C20.6470395,11.7942847 20.1050684,11.2523136 19.4365132,11.2523136 C18.7679579,11.2523136 18.2259868,11.7942847 18.2259868,12.4628399 C18.2259868,16.8268341 14.6882705,20.3645504 10.3242763,20.3645504 C5.96028209,20.3645504 2.42256579,16.8268341 2.42256579,12.4628399 C2.42256579,8.0988457 5.96028209,4.56112939 10.3242763,4.56112939 C10.9928315,4.56112939 11.5348026,4.0191583 11.5348026,3.35060308 C11.5348026,2.68204786 10.9928315,2.14007676 10.3242763,2.14007676 C4.62233595,2.14007676 5.37581675e-16,6.76241272 0,12.4643531 C-5.37581675e-16,18.1662934 4.62233595,22.7886294 10.3242763,22.7886294 Z' id='Shape'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    &:after{
      content:"web";
    }
  }
  &.info{
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Ctitle%3Ebackground%3C/title%3E%3Crect fill='none' id='canvas_background' height='402' width='582' y='-1' x='-1'/%3E%3C/g%3E%3Cg%3E%3Ctitle%3ELayer 1%3C/title%3E%3Cpath fill='%23ffffff' d='m12,2.085c-5.477,0 -9.915,4.438 -9.915,9.916c0,5.48 4.438,9.92 9.916,9.92c5.48,0 9.92,-4.44 9.92,-9.913c0,-5.477 -4.44,-9.915 -9.913,-9.915l-0.008,-0.008zm0.002,18a8.084,8.084 0 1 1 0,-16.17a8.084,8.084 0 0 1 0,16.17z' id='circle'/%3E%3Cpath fill='%23ffffff' d='m11,6.16l0,2.01l2.02,0l0,-2.01l-2.02,0zm-1.61,3.22l0,2.01l1.61,0l0,4.43l-1.61,0l0,2.01l5.23,0l0,-2.01l-1.61,0l0,-6.44l-3.62,0z' id='info'/%3E%3C/g%3E%3C/svg%3E");
    &:after{
      content:"details";
    }
  }
  &.home {
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='1792' height='1792' xmlns='http://www.w3.org/2000/svg'%3E%3Cmetadata id='metadata3023'%3Eimage/svg+xml%3C/metadata%3E%3Cg%3E%3Ctitle%3Ebackground%3C/title%3E%3Crect fill='none' id='canvas_background' height='402' width='582' y='-1' x='-1'/%3E%3C/g%3E%3Cg%3E%3Ctitle%3ELayer 1%3C/title%3E%3Cg id='g3015' transform='matrix(1,0,0,-1,68.338983,1285.4237) '%3E%3Cpath fill='%23ffffff' id='path3017' d='m1403.999934,307.996116l0,-480q0,-26 -19,-45q-19,-19 -45,-19l-384,0l0,384l-256,0l0,-384l-384,0q-26,0 -45,19q-19,19 -19,45l0,480q0,1 0.5,3q0.5,2 0.5,3l575,474l575,-474q1,-2 1,-6zm223,69l-62,-74q-8,-9 -21,-11l-3,0q-13,0 -21,7l-692,577l-692,-577q-12,-8 -24,-7q-13,2 -21,11l-62,74q-8,10 -7,23.5q1,13.5 11,21.5l719,599q32,26 76,26q44,0 76,-26l244,-204l0,195q0,14 9,23q9,9 23,9l192,0q14,0 23,-9q9,-9 9,-23l0,-408l219,-182q10,-8 11,-21.5q1,-13.5 -7,-23.5z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    &:after{
      content:"home";
    }
    &:hover{
      background-position:center 28%!important;
      transition: all .25s linear!important;
    }
  }
  &:after{
    transition: all .3s linear;
    opacity:0;
    font-family: "Oswald",sans-serif;
    text-transform: uppercase;
    border-radius:11px;
    display:block;
    position:absolute;
    color:#AAA;
    bottom:0px;
    left:0;
    width:100%;
    font-size:12px;
    z-index:6;
    text-align:center;
  }
  &:hover{
    background-position:center 35%;
    &:after{
      opacity:1;
      bottom:18%;
    }
  }
}
.close-button {
    border-top:1px solid #888;
    height: $buttonSize;
    width: $buttonSize;
    position: relative;
    line-height: $buttonSize;
    display: inline-block;
    background:$buttonColor;
    border-radius:$buttonSize;
    &:before, &:after {
        $width: 30px;
        $height: 4px;
        transform: rotate(-45deg);
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -$height/2;
        margin-left: -$width/2;
        display: block;
        height: $height;
        width: $width;
        background-color: #fff;
        transition: all 0.25s ease-out;
    }
    &:after {
        transform: rotate(-135deg);
    }
    &:hover {
        &:before, &:after {
            transform: rotate(0deg);
        }
    }
}

</style>
