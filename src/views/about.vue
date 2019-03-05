<template>
  <v-container>
    <v-layout justify-center>
      <v-flex lg8>
        <v-card>
          <v-card-title class="headline mb-0">关于本站</v-card-title>

          <v-card-text>做这个网站是因为个人有时看漫画,
            <br>但是发现网上很多漫画在一个网站里都不齐全,这边有的,那边就没有,
            <br>而且普遍的漫画网站手机端(甚至是电脑端),用户体验都非常不好,看漫画得一张一张的翻,比较麻烦,
            <br>所以就有了这个网站
          </v-card-text>
<v-divider/>
          <v-card-title class="headline mb-0">关于架构</v-card-title>
          <v-card-text>
            <h3>前端</h3><br>
            <li>框架用了Vue.js</li>
            <li>Vuex</li>
            <li>Webpack4</li>
            <li>Vue-router路由</li>
            <li>UI库用了Vuetify.js,Material Design Icons</li>
            <br>
            <h3>后端</h3><br>
            <li>用了Koa2</li>
            <li>Axios</li>
            <li>数据筛选用了Cheerio</li>
            <li>数据库Mongodb</li>
            <li>服务器Nginx</li>
            <li>服务器供应商Vultr</li>
            <br>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
export default {};
</script>
<style lang="css">
</style>