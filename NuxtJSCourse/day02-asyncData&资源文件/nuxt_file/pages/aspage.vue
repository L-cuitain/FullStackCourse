<template>
  <div>
      <h3>使用img标签显示图片</h3>
      <img src="~/assets/imgs/1.jpg" alt="">
      <h3>使用类名显示图片</h3>
      <div class="pic"></div>
      <h3>使用行内样式显示图片</h3>
      <div class="stylePic" :style="stylePic"></div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            stylePic:`background:url(${require("~/assets/imgs/3.jpg")})`
        }
    }
}
</script>

<style scoped>
img {
  width: 200px;
}
.pic {
  width: 200px;
  height: 200px;
  background: url(~/assets/imgs/2.jpg) no-repeat;
  background-size: contain;
}
.stylePic {
  width: 200px;
  height: 200px;
}
</style>