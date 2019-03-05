<template>
  <!-- <div class="pr-searchbar"> -->
  <!-- <v-layout justify-center>
  <v-flex>-->
  <v-text-field
    v-model="searchText"
    solo
    append-icon="search"
    clearable
    label="搜索漫画,作者"
    :hint="'haha'"
  />
  <!-- @click:append="sendMessage"
  @keyup.enter="sendMessage"-->
  <!-- </v-flex>
  </v-layout>-->
  <!-- </div> -->
</template>

<script>
export default {
  data() {
    return {
      searchText: "",
      flag: false,
      timer: ""
    };
  },
  watch: {
    searchText: function() {
      let self = this;
      clearTimeout(this.timer);

      self.$store.state.dataLoading = false;
      this.timer = setTimeout(async () => {
        self.$store.state.dataLoading = true;
        if (self.searchText == null) {
          self.$store.state.dataLoading = false;
          return false;
        }
        let data = await self.$spider({
          url: "/api" + "/search/q_" + self.searchText,
          type: "search"
        });
        self.$store.commit("setSearchResult", data);
        self.$store.state.dataLoading = false;
        // self.$router.push("/search");
      }, 2000);
    }
  },
  methods: {
    // async sendMessage() {
    //   console.log("搜索启动");
    //   this.$store.state.dataLoading = true;
    //   let data = await self.$spider({
    //     url: "/api" + "/search/q_" + self.searchText,
    //     type: "search"
    //   });
    //   console.log("搜素完成");
    //   // this.$store.state.showIndexTab = false;
    //   console.log(data);
    //   self.$store.commit("setSearchResult", data);
    //   this.$store.state.dataLoading = false;
    //   this.$router.push("/search");
    // }
  }
};
</script>
<style lang="css" scoped>
</style>
