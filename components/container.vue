<template>
  <div>
    <NavBar/>
    <v-container>
      <v-layout>
        <!-- <v-container>
        <v-layout>-->
        <v-flex>
          <VSlideYTransition leave-absolute>
            <router-view></router-view>
          </VSlideYTransition>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import NavBar from "@/navBar.vue";
export default {
  components: {
    NavBar
  }
};
</script>
<style lang="css" scoped>
</style>