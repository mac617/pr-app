<template>
<v-container style="max-width: 600px;">
  <v-timeline dense>
    <v-timeline-item icon="library_books" fill-dot color="#424242">
      <v-layout pt-3>
        <v-flex lg8 md10>
          <strong>你没看过的船新版本</strong>
          <span class="lv">0.1.0</span>
          <div class="caption">2019.2.27</div>
          <div class="caption">****prprpr开启,后续会有横向显示功能</div>
        </v-flex>
      </v-layout>
    </v-timeline-item>
  </v-timeline>
</v-container>
</template>

<script>
export default {};
</script>
<style lang="css">
.v-timeline-item__body {
  height: auto !important;
}

/* 兼容 IE6、IE7*/
.overflow {
  overflow: hidden;
  zoom: 1;
}

.lv {
  color: white;
  border-radius: 3px;
  padding: 1px 5px;
  margin: 0px 5px;
  background-color: #616161 !important;
  border-color: #616161 !important;
}
</style>