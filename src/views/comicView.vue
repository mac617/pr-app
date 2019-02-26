<template>
  <div class="pr-home">
    <ComicLayout>
      <!-- <NavBar slot="navBar"></NavBar> -->
      <ComicViewWindow slot="content"></ComicViewWindow>
      <!-- <NavBar slot="navBar"></NavBar>
      <Banner slot="banner"></Banner>
      <SearchBar slot="searchBar"></SearchBar>
      <SideCard slot="sideCard"></SideCard>
      <ComicViewWindow slot="content"></ComicViewWindow>
      <BottomNav slot="bottomNav"></BottomNav>-->
    </ComicLayout>
  </div>
</template>

<script>
import NavBar from "@/navBar.vue";
import BottomNav from "@/bottomNav.vue";
import Banner from "@/banner.vue";
import ComicViewWindow from "@/comicViewWindow.vue";
import SideCard from "@/sideCard.vue";
import ComicLayout from "@/comicLayout.vue";
import IndexTab from "@/indexTab.vue";
import SearchList from "@/searchList.vue";
// import Banner from "@/banner.vue";
// import IndexTab from "@/indexTab.vue";
// import NavBar from "@/navBar.vue";
import SearchBar from "@/searchBar.vue";
// import BottomNav from "@/bottomNav.vue";
export default {
  components: {
    NavBar,
    BottomNav,
    Banner,
    ComicViewWindow,
    ComicLayout,
    SideCard,
    SearchBar,
    SearchList,
    IndexTab
    // ExplainCard,
    // Banner,
    // NavBar,
    // SearchBar,
    // IndexTab,
    // BottomNav
  },
  data() {
    return {
      hotContent: "",
      // finishContent: "",
      // newContent: "",
      sss: "https://cdn.vuetifyjs.com/images/cards/plane.jpg"
    };
  }
  // created() {
  //   this.getContent();
  // },
  // methods: {
  //   getContent: async function() {
  //     let data = await this.$spider({
  //       url: "/api",
  //       type: "home"
  //     });
  //     this.hotContent = data
  //     // this.finishContent = data[1];
  //     // this.newContent = data[2];
  //   }
  // }
};
</script>
<style lang="css" scoped>

</style>
