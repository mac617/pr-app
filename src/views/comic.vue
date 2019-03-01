<template>
  <div class="pr-home">
    <MainLayout>
      <NavBar slot="navBar"></NavBar>
      <!-- <Banner slot="banner"></Banner> -->
      <SearchBar slot="searchBar"></SearchBar>
      <SideCard slot="sideCard"></SideCard>
      <ComicDetailChapter slot="content"></ComicDetailChapter>
      <!-- <BottomNav slot="bottomNav"></BottomNav> -->
    </MainLayout>
  </div>
</template>

<script>
import Banner from "@/banner.vue";
// import BottomNav from "@/bottomNav.vue";
import MainLayout from "@/mainLayout.vue";
import ComicDetailChapter from "@/comicDetailChapter.vue";
import SideCard from "@/sideCard.vue";
import SearchBar from "@/searchBar.vue";
import NavBar from "@/navBar.vue";
// import BottomNav from "@/bottomNav.vue";
export default {
  components: {
    NavBar,
    // BottomNav,
    Banner,
    MainLayout,
    SideCard,
    SearchBar,
    ComicDetailChapter
  }
};
</script>
<style lang="css" scoped>
</style>
