<template>
<div id="app">
  <head>
    <meta
      charset="utf-8"
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui"
    >
  </head>

  <v-app :dark="dark">
    <v-progress-linear
      class="progress"
      color="pink"
      height="2"
      v-if="this.$store.state.dataLoading"
      :indeterminate="this.$store.state.dataLoading"
    ></v-progress-linear>
    <NavBar/>
    <Banner v-if="bannerSwitch"/>
    <Container/>
    <Footer/>
    <!-- <BottomNav class="hidden-lg-and-up"/> -->
  </v-app>
</div>
</template>

<script>
import Footer from "@/footer.vue";
import BottomNav from "@/bottomNav.vue";
import Container from "@/container.vue";
import Banner from "@/banner.vue";
import NavBar from "@/navBar.vue";
export default {
  components: {
    BottomNav,
    Container,
    Banner,
    NavBar,
    Footer
  },
  computed: {
    dark: function() {
      return this.$store.state.dark;
    },
    bannerSwitch:function(){
      if (this.$route.path.includes("comicview")) {
        return false
      } else {
        return true
      }
    }
  }
};
</script>

<style lang="css" scoped>
/* .container {
  padding: 0px !important;
} */
html {
  overflow-y: auto;
}
.v-progress-linear {
  margin: 0 !important;
  position: fixed !important;
  top: 0 !important;
  z-index: 9 !important;
}
</style>