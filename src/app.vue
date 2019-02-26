<template>
<div id="app">
  <head>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui"
    >
  </head>
  <v-app :dark="dark">
    <!-- <NavBar/> -->
    <!-- <Banner/> -->
    <Container/>
    <!-- <BottomNav class="hidden-lg-and-up"/> -->
  </v-app>
</div>
</template>

<script>
import BottomNav from "@/bottomNav.vue";
import Container from "@/container.vue";
import Banner from "@/banner.vue";
import NavBar from "@/navBar.vue";
export default {
  components: {
    BottomNav,
    Container,
    Banner,
    NavBar
  },
  computed: {
    dark: function() {
      return this.$store.state.dark;
    }
  }
};
</script>

<style lang="css" scoped>
/* .container {
  padding: 0px !important;
} */
</style>