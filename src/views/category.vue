<template>
  <div class="pr-history">
    <MainLayout>
      <!-- <NavBar slot="navBar"></NavBar> -->
      <Banner slot="banner"></Banner>
      <SearchBar slot="searchBar"></SearchBar>
      <SideCard slot="sideCard"></SideCard>
      <CategoryWindow slot="content"></CategoryWindow>
      <!-- <BottomNav slot="bottomNav"></BottomNav> -->
    </MainLayout>
  </div>
</template>

<script>
import Banner from "@/banner.vue";
import SideCard from "@/sideCard.vue";
import MainLayout from "@/mainLayout.vue";
import CategoryWindow from "@/categoryWindow.vue";
import SearchBar from "@/searchBar.vue";
// import NavBar from "@/navBar.vue";
// import BottomNav from "@/bottomNav.vue";
export default {
  components: {
    CategoryWindow,
    // NavBar,
    // BottomNav,
    Banner,
    MainLayout,
    SideCard,
    SearchBar
  },
  data() {
    return {
      history: ""
    };
  }
};
</script>
<style lang="css" scoped>
</style>