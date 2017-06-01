
<template>
  <div class="index_view">
    <div class="name_box">
      <div class="name">
        <div class="name_bg">

        </div>
        <div class="name_text">赵鹏斌</div>
      </div>
    </div>
    <section class="index_massage">

      <dl class="list nigiri">
        <dd>电话：13121095933</dd>
        <dd>邮箱：michaelzpb@sina.com</dd>
        <dd>学历：大专</dd>
        <dd>职业：前端开发</dd>
        <dd>工作年限：3年</dd>
        <dd>现居地：北京·通州</dd>
      </dl>

    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  console.log('index');
  require('../../../common/js/jquery.min');
  require('../../../common/js/makisu');


  $(window).load(function(){
      var $nigiri = $( '.nigiri' );
      $nigiri.makisu({
        selector: 'dd',
        overlap: 0.85,
        speed: 1.7
      });
      // Open all
      $( '.list' ).makisu( 'open' );
  });
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/style/lanrenzhijia.css";
  @keyframes App-logo-spin {
    from {transform: rotate(0deg); }
    to {transform: rotate(360deg); }
  }
  @keyframes App-name-spin {
    10% {transform: rotate(0deg);}
  }
  @keyframes grow
  {
  0% {
  -webkit-transform: scale(0);
  transform: scale(0);
  }
  60% {
  -webkit-transform: scale(1.15);
  transform: scale(1.15);
  }
  80% {
  -webkit-transform: scale(0.95);
  transform: scale(0.95);
  }
  100% {
  -webkit-transform: scale(1);
  transform: scale(1);
  }
  }
  @keyframes music-move
  {
  0% {
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  }
  33% {
  -webkit-transform: rotate(-5deg);
  transform: rotate(-5deg);
  }
  66% {
  -webkit-transform: rotate(5deg);
  transform: rotate(5deg);
  }
  100% {
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  }
  }
  .name_box
    width: 2rem
    height: 2rem
    overflow: hidden
    position: absolute
    top:1.5rem
    right:1rem
    box-shadow :0 0 2rem #ffff89
    border-radius :100%
  .name
    width: 2rem
    height: 2rem
    margin:0 auto
    overflow: hidden
    position: absolute
    left:50%
    top:50%
    margin-top: -1rem
    margin-left:-1rem
    .name_bg
      width: 100%
      height:100%
      background: url("image/Inscriptions.png") no-repeat
      background-size:100%
      animation: App-logo-spin infinite 20s linear;
      img
        width: 100%
        height:100%
    .name_text
      position: absolute
      width:100%
      height:100%
      color: #ccc
      left:0
      top:0
      font-size:0.5rem
      line-height:1.9rem
      animation: grow 0.7s 0.4s 1 ease, music-move 1s 3.3s infinite alternate ease-in-out;

  .index_view
    width:100%
    height:100%
    position: relative
    background: url('image/index-bg.jpg') no-repeat center center
    background-size cover
  .index_massage
    position: absolute
    left:0
    top:4rem
    text-align: left
</style>
