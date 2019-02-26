<template>
  <div>
    <v-img src="http://images.lancaier.com/ManHuaKu/X/XingHaoLiuNianYuJianNi/8/1.jpg-zymk.jpg"></v-img>
    <v-img src="http://images.lancaier.com/ManHuaKu/X/XingHaoLiuNianYuJianNi/8/1.jpg-zymk.jpg"></v-img>
    <v-img src="http://images.lancaier.com/ManHuaKu/X/XingHaoLiuNianYuJianNi/8/1.jpg-zymk.jpg"></v-img>
  </div>
</template>

// offsetTop是图片到内容顶部的距离
      // document.body.scrollHeight是内容整体的高度
      // window.screen.availHeight是窗口高度
      // window.pageYOffset是窗口到内容顶部的距离
      // if(window.pageYOffset>document.getElementById())

<script>
export default {
  created() {
    window.onscroll = function() {
      if (
        document.body.scrollTop + window.screen.availHeight ==
        document.body.scrollHeight
      ) {
        alert("hehe");
      }
    };
  }
};
</script>
<style lang="css">
</style>