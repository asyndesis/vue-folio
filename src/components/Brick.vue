<template>
  <router-link class="brick" :to="{path: to.path}">
    <div class="brick-inner">
      <div class="brick-preview" v-bind:style="{ backgroundImage: 'url(' + require('@/assets/img/'+item.preview) + ')' }">
        
      </div><!--/.brick-preview-->
      <div class="brick-info">
        <h2>{{item.title}}</h2>
        <p>{{item.description}}</p>
      </div><!--/.brick-info-->
    </div><!--/.brick-inner-->
  </router-link><!--/.brick-->
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
    box-sizing: border-box;
    padding-left:10px;
    width:100%;
    padding-right:10px;
    margin-bottom:20px;
    float:left;
    text-decoration: none;
    .brick-inner{
      height:100%;
      display: flex;
      -webkit-box-direction: normal;
      -webkit-box-orient: vertical;
      -moz-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      border-radius:20px;
      box-shadow:0px 0px 10px rgba(0,0,0,.25);
      .brick-preview{
        -webkit-box-flex: 0;
        -moz-flex-grow: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        height:200px;
        background-size:cover;
        background-position:center center;
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
        background:#888;
        min-height:100px;
        border-bottom-right-radius: 20px;
        border-bottom-left-radius: 20px;
        padding:20px;
        h2{
          margin:0;
          margin-bottom:10px;
        }
      }
    }
  }
  @media (min-width: 768px){
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
