<template>
  <div class="brick">
    <div class="brick-inner" :tabindex="item.id">
      <div class="brick-preview" v-bind:style="{ backgroundImage: 'url(' + require('@/assets/img/'+item.preview) + ')' }">
        <div class="brick-menu">
          <div class="brick-menu-action">
            <router-link :to="{path: to.path}" class="brick-button icon eye" v-if="item.images">
            </router-link>
            <a v-bind:href="item.url" target="_blank" class="brick-button icon external" v-if="item.url">
            </a>
          </div>
        </div>
      </div><!--/.brick-preview-->
      <div class="brick-info">
        <h2><router-link :to="{path: to.path}">{{item.title}}</router-link></h2>
        <p class="desc">{{item.description}} <span class="note">({{item.note}})</span></p>
        <ol>
         <li v-for="(tech, index) in item.tech" v-bind:key="index">{{ tech }}</li>
        </ol>
      </div><!--/.brick-info-->
    </div><!--/.brick-inner-->
  </div><!--/.brick-->
</template>

<script>
export default {
  name: 'Brick',
  props: {
    item: Object,
    to: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .brick{
    transition:.5s all ease;
    transform: scale(1,1); /* Equal to scaleX(2) scaleY(0.5) */
    transform-origin: center;
    box-sizing: border-box;
    padding-left:10px;
    width:100%;
    padding-right:10px;
    margin-bottom:20px;
    float:left;
    text-decoration: none;
    .brick-inner{
      outline:none;
      height:100%;
      display: flex;
      -webkit-box-direction: normal;
      -webkit-box-orient: vertical;
      -moz-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      border-radius:12px;
      box-shadow:0px 0px 10px rgba(0,0,0,.25);
      overflow:hidden;
      border:1px solid #444;
      .brick-preview{
        -webkit-box-flex: 0;
        -moz-flex-grow: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        width:100%;
        padding-bottom:100%;
        background-size:cover;
        background-position:top center;
        position:relative;
        overflow:hidden;
        .brick-menu{
          height:100%;
          background:rgba(0,0,0,.25);
          width:100%;
          position:absolute;
          top:100%;
          transition:.3s ease all;
          opacity:0;
          .brick-menu-action{
            position: absolute;
            top: 0;
            left: 0;
            padding: 8px;
            padding-bottom:3px;
            background-color: hsla(0,0%,100%,.7);
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%,-50%);
            transform: translate(-50%,-50%);
            border-radius: 38px;
            white-space: nowrap;
            text-align: center;
          }
        }
      }
      &:hover, &:focus{
        .brick-menu{
          opacity:1;
          top:0%;
        }
      }
      .brick-info{
        -webkit-box-flex: 1;
        -moz-flex-grow: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        display: -webkit-box;
        display: -moz-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-direction: normal;
        -webkit-box-orient: vertical;
        -moz-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        -moz-justify-content: space-between;
        //justify-content: space-between;
        color:#FFF;
        background:#333;
        min-height:100px;
        border-top:1px solid #555;
        padding:20px;
        h2{
          margin:0;
          font-size:20px;
          a{
            color:#FFF;
            text-decoration: none;
          }
        }
        ol{
          list-style:none;
          margin:0;
          padding:0;
          line-height:14px;
          li{
            font-size:10px;
            font-weight:bold;
            text-transform: uppercase;
            padding:0;
            margin:0;
            display:inline;
            opacity:.5;
            &:after{
              content: ", ";
              padding-right:5px;
            }
            &:last-of-type{
              &:after{
                content:""
              }
            }
          }
        }
        p{
          margin:10px 0px;
          font-size:14px;
          span.note{
            opacity:.4;
          }
        }
      }
    }
  }
  .home{
    .brick{
      transform: scale(.9,.9); /* Equal to scaleX(2) scaleY(0.5) */
    }
  }
  @media (min-width: 500px){
    .brick{
      width:50%;
    }
  }
  @media (min-width: 992px){
    .brick{
      width:33.333%;
    }
  }
</style>
