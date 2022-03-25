<template>
  <div class="home">
    <h3>使用img标签显示图片</h3>
    <img src="imgs/1.jpg" alt="" />
    <h3>使用类名显示图片</h3>
    <div class="pic"></div>
    <h3>使用行内演示显示图片</h3>
    <div class="stylePic" :style="stylePic"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stylePic: `background:url(${require("~/static/imgs/3.jpg")})`,
    };
  },
};
</script>

<style scoped>
img {
  width: 200px;
}
.pic {
  width: 200px;
  height: 200px;
  /* 类名加载static下的图片需要补全路径 */
  background: url(~/static/imgs/2.jpg) no-repeat;
  background-size: contain;
}
.stylePic {
  width: 200px;
  height: 200px;
}
</style>