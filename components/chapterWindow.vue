<template>
  <div class="pr-chapterwindow">
    <v-layout>
      <v-carousel
        :cycle="false"
        height="100%"
        max="100%"
        hide-controls
        hide-delimiters
      >
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
        >
          <v-img
            :src="item.src"
            aspect-ratio="1.7"
          />
        </v-carousel-item>
      </v-carousel>
    </v-layout>

    <!-- <v-img :src="require('../../assets/imgs/4205.jpg')" />
    <v-img :src="require('../../assets/imgs/4205.jpg')" />
    <v-img :src="require('../../assets/imgs/4205.jpg')" /> -->

    <!-- 
      <v-flex xs5>
        <div class="title mb-1">Contain</div>
        <v-layout column>
          <div class="subheading">Matching</div>
          <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.7" contain></v-img>
          <div class="subheading pt-3">Too high</div>
          <v-img src="https://picsum.photos/510/300?random" aspect-ratio="2" contain></v-img>
          <div class="subheading pt-3">Too low</div>
          <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.4" contain></v-img>
        </v-layout>
      </v-flex> -->

  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: '../../assets/imgs/4205.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
        }
      ]
    }
  }
}
</script>
<style lang="css">
</style>
