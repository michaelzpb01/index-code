<template>
  <div class="app_footer">
    <ul class="footer_list">
      <li class="footer_minu">
        <router-link to="/" exact>
          <div><i class="iconfont icon-home"></i></div>
          <p>summary</p>
        </router-link>
      </li>
      <li class="footer_minu">
        <router-link to="cases">
          <div><i class="iconfont icon-tuku"></i></div>
          <p>case</p>
        </router-link>
      </li>
      <li class="footer_minu">
        <router-link to="sitelive">
          <div><i class="iconfont icon-gongdi"></i></div>
          <p>experience</p>
        </router-link>
      </li>
      <li class="footer_minu">
        <router-link to="userhome">
          <div><i class="iconfont icon-shejishi"></i></div>
          <p>personal</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app_footer
    height: 0.88rem
    position: fixed
    left: 50%
    transform translateX(-50%)
    bottom: 0
    width: 100%
    max-width:495px;
    z-index:888
    .footer_list
      display: flex
      .footer_minu
        flex: 1
        text-align: center
        & > a
          display: block
          .iconfont
            font-size 0.4rem
            line-height: 0.6rem
            color: #fff
            display: inline-block
            margin-top: 0.02rem
          p
            font-size: 0.2rem
            color: #fff
            line-height:0.15rem
        .active
          .iconfont
            color: #0089dc
          p
            color: #0089dc
</style>
