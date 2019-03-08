<template>
  <div>
    <slot name="navBar"></slot>
    <v-container>
      <v-layout justify-center>
        <v-flex lg9 md11 sm11 xs12>
          <slot name="content"></slot>
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
.container {
  padding: 0px !important;
}
</style>