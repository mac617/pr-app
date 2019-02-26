<template>
  <div class="pr-searchbar">
    <MainLayout>
      <NavBar slot="navBar"></NavBar>
      <Banner slot="banner"></Banner>
      <SearchBar slot="searchBar"></SearchBar>
      <SideCard slot="sideCard"></SideCard>
      <SearchList v-if="this.$store.state.searchResult" slot="content"></SearchList>
      <!-- <BottomNav slot="bottomNav"></BottomNav> -->
    </MainLayout>
  </div>
</template>

<script>
import NavBar from "@/navBar.vue";
// import BottomNav from "@/bottomNav.vue";
import Banner from "@/banner.vue";
import SideCard from "@/sideCard.vue";
import MainLayout from "@/mainLayout.vue";
import SearchBar from "@/searchBar.vue";
import SearchList from "@/searchList.vue";
export default {
  components: {
    NavBar,
    // BottomNav,
    Banner,
    SideCard,
    SearchBar,
    SearchList,
    MainLayout
  }
};
</script>
<style lang="css">
</style>
