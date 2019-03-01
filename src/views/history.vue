<template>
  <div class="pr-history">
    <MainLayout>
      <NavBar slot="navBar"></NavBar>
      <!-- <Banner slot="banner"></Banner> -->
      <SearchBar slot="searchBar"></SearchBar>
      <SideCard slot="sideCard"></SideCard>
      <HCollectTab slot="content"></HCollectTab>
      <!-- <BottomNav slot="bottomNav"></BottomNav> -->
    </MainLayout>
    <!-- <NavBar/>
    <Banner/>-->
    <!-- <v-layout justify-center>
<v-flex lg8>
    <v-card>
      <v-container
        fluid
        grid-list-lg
      >
        <v-layout row wrap>
<v-flex lg6 md6 xs12 v-for="item in history" :key="item.id">
            <v-card color="cyan darken-2" class="white--text">
              <v-layout>
                <v-flex xs5>
                  <v-img
                    :src="item.comicDetail.bookImg"
                    height="125px"
                    contain
                  ></v-img>
                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">{{ item.item.bookTitle}}</div>
                      <div>Foster the People</div>
                      <div>(2014)</div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                Rate this album
                <v-spacer></v-spacer>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex lg6 md6 xs12>
            <v-card color="cyan darken-2" class="white--text">
              <v-layout>
                <v-flex xs5>
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                    height="125px"
                    contain
                  ></v-img>
                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">Supermodel</div>
                      <div>Foster the People</div>
                      <div>(2014)</div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                Rate this album
                <v-spacer></v-spacer>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
              </v-card-actions>
            </v-card>
          </v-flex>

        </v-layout>
      </v-container>
    </v-card>
    </v-flex>
    </v-layout>-->
  </div>
</template>

<script>
import Banner from "@/banner.vue";
import SideCard from "@/sideCard.vue";
import MainLayout from "@/mainLayout.vue";
import HCollectTab from "@/hCollectTab.vue";
import SearchBar from "@/searchBar.vue";
import NavBar from "@/navBar.vue";
// import BottomNav from "@/bottomNav.vue";
export default {
  components: {
    NavBar,
    // BottomNav,
    Banner,
    HCollectTab,
    MainLayout,
    SideCard,
    SearchBar
  },
  data() {
    return {
      history: ""
    };
  },
  created() {
    let storage = window.localStorage;
    // storage.removeItem("history");
    // storage.setItem("history", JSON.stringify({ id: 1 }));
    // this.history = storage.getItem("history");
    // if (storage.getItem("history")) {
    //   this.history = JSON.parse(storage.getItem("history"));
    this.history = JSON.parse(storage.getItem("history"));
    console.log(this.history);
    // this.history.reverse();
    // this.history = storage.getItem("history");
    // console.log(this.history[0].comicDetail.bookImg);
  },
  methods: {
    toComic: function(item) {
      // alert("he");
      // this.$store.commit("setComicDetail", item);
      // console.log(item.comicId)
      let bookUrl = item.item.id;
      console.log(bookUrl);
      // let bookUrl = item.bookUrl
      // console.log(bookUrl);
      // this.$router.push(`/author/${this.authorData.mid}`);
      this.$router.push({ path: "/comic/" + bookUrl });
    },
    toComicView: function(item) {
      // alert("he");
      // this.$store.commit("setComicDetail", item);
      // console.log(item.comicId)
      let id = item.item.id;
      let chapterNo = item.item.chapterNo;
      // console.log(bookUrl);
      // let bookUrl = item.bookUrl
      // console.log(bookUrl);
      // this.$router.push(`/author/${this.authorData.mid}`);
      this.$router.push({ path: "/comicview/" + id + "/" + chapterNo });
    }
  }
  // this.history=sessionStorage.getItem("history")
  // console.log(this.history.id);
};
</script>
<style lang="css" scoped>
.item-info {
  display: flex;
  align-items: center;
}
.bookTitle {
  height: 120px;
  width: 100%;
  line-height: 120px;
}
.v-btn {
  min-width: 70;
}
.hisBtn {
  height: 60px;
  line-height: 60px;
  background-color: #4caf50; /* Green */
}
.spanGoOn {
  width: 70px;
}
.textHidden {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>