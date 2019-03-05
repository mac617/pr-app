<template>
  <div class="pr-home">
    <MainLayout>
      <NavBar slot="navBar"></NavBar>
      <!-- <Banner slot="banner"></Banner> -->
      <!-- <SearchBar slot="searchBar"></SearchBar> -->
      <SideCard slot="sideCard"></SideCard>
      <IndexTab slot="content"></IndexTab>
      <!-- <BottomNav slot="bottomNav"></BottomNav> -->
    </MainLayout>
  </div>
</template>

<script>
import Banner from "@/banner.vue";
import NavBar from "@/navBar.vue";
// import BottomNav from "@/bottomNav.vue";
import SideCard from "@/sideCard.vue";
import MainLayout from "@/mainLayout.vue";
import IndexTab from "@/indexTab.vue";
import SearchList from "@/searchList.vue";
// import Banner from "@/banner.vue";
// import IndexTab from "@/indexTab.vue";
import SearchBar from "@/searchBar.vue";
export default {
  components: {
    NavBar,
    // BottomNav,
    Banner,
    MainLayout,
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
