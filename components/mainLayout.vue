<template>
  <div class="pr-mainLayout">
    <!-- <slot name="navBar"></slot> -->
    <!-- <slot name="banner"></slot> -->
    <v-container grid-list-md>
      <!-- <slot name="searchBar"></slot> -->
      <!-- <v-layout justify-center>
        <v-flex>
      <slot name="banner"></slot>-->
      <v-layout row wrap justify-center ma-0>
        <!-- style="margin-bottom:0.3rem" -->
        <v-flex lg7 md9 sm10 xs12 class="mainContent">
          <slot name="searchBar"></slot>
          <slot name="content"></slot>
          <!-- <IndexTab/> -->
        </v-flex>
        <v-flex lg4 md9 sm10 xs12 class="sideCard">
          <slot name="sideCard"></slot>
        </v-flex>
      </v-layout>
      <!-- </v-flex>
      </v-layout>-->
      <!-- <slot name="bottomNav"></slot> -->
    </v-container>
  </div>
</template>

<script>
// import SearchBar from "@/searchBar.vue";
export default {
  components: {
    // SearchBar
  }
};
</script>
<style lang="css" scoped>
/* .mainContent {
  padding-bottom: 4px !important;
}

@media only screen and (max-width: 1029px) {
  .mainContent {
    padding: 0px !important;
    padding-bottom: 4px !important;
  }

  .sideCard {
    padding: 0px !important;
  }
} */
</style>