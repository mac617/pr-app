<template>
  <div class="pr-bottomnav">
    <v-bottom-nav :active.sync="activeBtn" :value="showNav" shift app>
      <v-btn flat color="teal" @click="toHistory()">
        <span>Recents</span>
        <v-icon>history</v-icon>
      </v-btn>

      <v-btn flat color="teal" @click="toHome()">
        <span>Favorites</span>
        <v-icon>favorite</v-icon>
      </v-btn>

      <v-btn flat color="teal">
        <span>Nearby</span>
        <v-icon>place</v-icon>
      </v-btn>
    </v-bottom-nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeBtn: 1,
      showNav: true
    };
  },
  methods: {
    toHome() {
      this.$router.push("/");
      this.$store.state.showIndexTab = true;
      // this.drawer = !this.drawer;
    },
    toHistory() {
      this.$router.push("/history");
      // this.drawer = !this.drawer;
    }
  }
  // created() {
  //   window.addEventListener('scroll', this.onScroll, true)
  // },
  // methods: {
  //   onScroll() {
  //     if (this.offsetTop - window.pageYOffset < 0) {
  //       this.showNav = false
  //     } else {
  //       this.showNav = true
  //     }
  //     this.offsetTop = window.pageYOffset
  //   }
  // }
};
</script>
<style lang="css">
</style>
