<template>
  <!-- <div> -->
  <v-container>
    <!-- <v-container> -->
    <v-layout>
      <!-- <v-container>
      <v-layout>-->
      <v-flex>
        <VSlideYTransition leave-absolute>
          <router-view></router-view>
        </VSlideYTransition>
      </v-flex>
    </v-layout>
  </v-container>
  <!-- </v-container>
  </div>-->
</template>

<script>
import Footer from "@/footer.vue";
import NavBar from "@/navBar.vue";
import Banner from "@/banner.vue";
export default {
  components: {
    NavBar,
    Banner,
    Footer
  }
};
</script>
<style lang="css" scoped>
</style>