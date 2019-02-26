<template>
  <div class="pr-comicLayout">
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
<style lang="css">
.comicImg {
  margin: 10px auto 40px;
  box-shadow: 1px 1px 6px 0px #333 !important;
}
.container{
  padding:0px !important
}
</style>