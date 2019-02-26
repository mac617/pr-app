<template>
  <!-- <div class="pr-searchbar"> -->
  <!-- <v-layout justify-center>
  <v-flex>-->
  <v-text-field
    v-model="searchText"
    solo
    append-icon="search"
    clearable
    label="搜索"
    :hint="'haha'"
    @click:append="sendMessage"
  />
  <!-- </v-flex>
  </v-layout>-->
  <!-- </div> -->
</template>

<script>
export default {
  data() {
    return {
      searchText: "",
      flag: false
    };
  },
  // watch: {
  //   searchText: function() {
  //     let self = this
  //     if (!self.flag) {
  //       let count = 0
  //       self.flag = true
  //       setTimeout(() => {
  //         self.$axios
  //           .post('/users/search', {
  //             url: 'http://www.57mh.com/search/q_' + self.searchText,
  //             type: 'Search'
  //           })
  //           .then(searchResult => {
  //             self.$store.commit('setSearchResult', searchResult.data.data)
  //           })
  //       }, 3000)
  //     }
  //   }
  // },
  methods: {
    async sendMessage() {
      console.log("搜索启动");
      let self = this;
      if (!self.flag) {
        let count = 0;
        self.flag = true;
        let data = await self.$spider({
          url: "/api" + "/search/q_" + self.searchText,
          type: "search"
        });
        console.log('搜素完成')
        // this.$store.state.showIndexTab = false;
        console.log(data);
        self.$store.commit("setSearchResult", data);
  
        this.$router.push("/search");
      }
    }
  }
};
</script>
<style lang="css" scoped>
</style>
