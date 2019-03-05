<template>
  <div class="sideCard">
    <v-card>
      <v-card-title class="title">漫画说明</v-card-title>
      <v-card-text>这是网络上趴下来的漫画,
        <br>可能会有点慢,
        <br>有很多漫画不全,后续会继续完善
        <br>看就完事了
        <br>
      </v-card-text>
    </v-card>

    <v-card style="margin-top:1rem">
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
          <span>服务商Vultr</span>
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

.sideCard{
  margin-left:1rem !important;
}
@media only screen and (max-width: 1264px) {
  .sideCard {
    margin-left:0rem !important;
    /* padding-bottom: 4px !important; */
  }
}
</style>