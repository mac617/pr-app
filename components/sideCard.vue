<template>
  <div>
    <v-card>
      <v-card-title class="title">漫画说明</v-card-title>
      <v-card-text>这是网络上趴下来的漫画,
        <br>可能会有点慢,
        <br>有很多漫画不全,后续会继续完善
        <br>看就完事了
        <br>
      </v-card-text>
    </v-card>

    <v-card style="margin-top:0.7rem">
      <!-- <v-card-title>漫画说明</v-card-title> -->
      <v-card-text>
        <br>
        <a href="https://github.com/mac617">
          <v-icon style="vertical-align: middle">mdi-github-face</v-icon>
          <span>mac617</span>
        </a>
        <br>
        <v-icon style="vertical-align: middle">mdi-gmail</v-icon>
        <span>genggaogengfugengshuai@gmail.com</span>
        <br>
        <a href="http://wpa.qq.com/msgrd?v=3&uin=550272221&site=qq&menu=yes">
          <v-icon style="vertical-align: middle">mdi-qqchat</v-icon>
          <span>麻</span>
        </a>
        <br>
        <a href="https://www.vultr.com/">
          <v-icon style="vertical-align: middle">mdi-link-variant</v-icon>
          <span>服务器Vultr</span>
        </a>
        <br>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>
<style lang="css" scoped>
a {
  text-decoration: none;
  color: #777;
}

span {
  text-decoration: none;
  color: #777;
}
</style>