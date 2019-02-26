<template>
  <div class="pr-mainLayout">
    <!-- <slot name="navBar"></slot> -->
    <v-container grid-list-md>
      <!-- <v-layout justify-center>
        <v-flex>
      <slot name="banner"></slot>-->
      <slot name="banner"></slot>
      <v-layout row wrap justify-center ma-0>
        <v-flex lg8 md12 sm12 xs12>
          <slot name="searchBar"></slot>
          <slot name="content"></slot>
          <!-- <IndexTab/> -->
        </v-flex>
        <v-flex lg4 md12>
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
</style>