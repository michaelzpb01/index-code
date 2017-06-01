<template>
  <div id="app">
    <!--header start-->
    <header-v></header-v>
    <!--header end-->

    <!--index router view start-->
    <div class="app_content">
      <router-view></router-view>
    </div>
    <!--index router view end-->

    <!--footer start-->
    <footer-down></footer-down>
    <!--footer end-->
  </div>
</template>

<script type="text/ecmascript-6">
  import header from '@/components/header/header';
  import footer from '@/components/footer/footer';

  export default {
    components: {
      'header-v': header,
      'footer-down': footer
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .box
    margin-top:1rem
    width: 1rem
    height: 1rem
    background: red
  .app_content
    color: #fff
    line-height: 0.7rem
    text-align: center
    font-size: .3rem
    box-sizing: border-box
    width:100%
    height:100%
  #app
    width:100%
    height:100%
</style>
