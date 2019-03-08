<template>
  <div class="pr-mainLayout">
    <!-- <v-container grid-list-md> -->
    <v-layout row wrap justify-center>
      <!-- style="margin-bottom:0.3rem" -->
      <v-flex lg6 md9 sm10 xs12 class="mainContent">
        <slot name="searchBar"></slot>
        <v-card class="contentCard">
          <!-- <slot name="searchBar"></slot> -->
          <slot name="content"></slot>
        </v-card>
        <!-- <IndexTab/> -->
      </v-flex>
      <v-flex lg3 md9 sm10 xs12 class="sideCard">
        <slot name="sideCard"></slot>
      </v-flex>
    </v-layout>
    <!-- </v-container> -->
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
.mainContent {
  padding-top: 0px !important;
  margin-bottom: 1rem;
}
.sideCard {
  padding-top: 0px !important;
}

@media only screen and (max-width: 1029px) {
  .mainContent {
    padding-right: 0px !important;
    padding-left: 0px !important;
    /* padding-bottom: 4px !important; */
  }

  .sideCard {
    padding: 0px !important;
  }
}
</style>