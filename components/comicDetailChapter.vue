<template>
  <div class="pr-commic">
    <!-- <SearchBar /> -->
    <!-- <NavBar v-on:sendUser="msgFromNavBar"/> -->
    <ComicDetail v-bind:comicDetail="comicDetail"/>
    <v-layout justify-center>
      <v-flex>
        <v-card>
          <v-flex lg12 md12 xs12>
            <v-tabs slot="extension" v-model="model" grow icons-and-text>
              <v-tab :href="`#tab-` + 1">简介
                <v-icon>details</v-icon>
              </v-tab>
              <v-tab :href="`#tab-` + 2">章节
                <v-icon>library_books</v-icon>
              </v-tab>
              <!-- <v-tab :href="`#tab-` + 3">Nearby
            <v-icon>account_box</v-icon>
              </v-tab>-->
            </v-tabs>

            <v-tabs-items v-model="model" touchless>
              <v-tab-item :value="'tab-' + 1">
                <v-card flat>
                  <v-card-text>
                    <div>
                      <p>{{"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+bookIntro}}</p>
                    </div>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item :value="'tab-' + 2">
                <v-card flat>
                  <ChapterList v-bind:chapterList="chapterList"/>
                </v-card>
              </v-tab-item>
              <!-- <v-tab-item :value="'tab-' + 3">
            <v-card flat>
              <v-card-text>3</v-card-text>
            </v-card>
              </v-tab-item>-->
            </v-tabs-items>
          </v-flex>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template> 

<script>
import NavBar from "@/navBar.vue";
import ChapterList from "@/chapterList.vue";
import ComicDetail from "@/comicDetail.vue";

export default {
  components: {
    // SearchList,
    NavBar,
    ChapterList,
    ComicDetail
  },
  data() {
    return {
      //v-tab
      model: "tab-2",
      text: "Lorem ipsum dolor",

      //comic
      favorite: false,
      bookImg: "",
      bookTitle: "",
      bookAuthor: "",
      bookYear: "",
      username: "",
      comicDetail: "",
      collectList: "",
      chapterList: "",
      chapter: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7"
      ]
    };
  },
  created() {
    console.log("1");
  },
  watch: {
    username: function() {
      this.getCollect();
    }
  },
  computed: {
    checkCollectList: function() {
      return JSON.stringify(this.collectList).includes(
        this.$route.params.bookUrl
      );
    },
    bookIntro() {
      return this.$store.state.comicDetail.bookIntro;
    }
  },
  async created() {
    // console.log("会加载")
    this.$store.state.comicDetail = "";
    this.$store.state.dataLoading = true;
    let data = await this.$spider({
      url: "/api" + this.$route.params.bookUrl + "/",
      type: "comic"
    });
    this.$store.state.dataLoading = false;
    // console.log(this.$route.params.bookUrl);
    this.comicDetail = data.comicDetail;
    console.log("data" + data.comicDetail);
    this.$store.commit("setComicDetail", data.comicDetail);
    this.$store.commit("setComicChapter", data.chapterNoandNum);
    this.chapterList = data;
    let localChapterList = JSON.stringify(data.chapterNoandNum);
    // console.log(this.$route.params.bookUrl)
    // console.log(chapterList);
    let storage = window.localStorage;
    storage.setItem(
      "chapterListNo" + this.$route.params.bookUrl,
      localChapterList
    );
    // this.bookImg = searchResult.data.data.bookImg
    // this.bookTitle = searchResult.data.data.bookTitle
    // this.bookAuthor = searchResult.data.data.bookAuthor
    // this.bookYear = searchResult.data.data.bookYear

    // console.log(this.$route.query.bookUrl);
  },
  methods: {
    reverse: function() {
      this.chapter = this.chapter.reverse();
    },
    switchFavorite: function() {
      this.favorite = !this.favorite;
    }
    // addCollect: async function() {
    //   let username = this.username;
    //   let id = this.$route.params.bookUrl;
    //   const { status, data } = await this.$axios.post(
    //     "/user/users/addCollect",
    //     {
    //       username: username,
    //       id: id,
    //       comicDetail: {
    //         bookImg: this.$store.state.comicDetail.bookImg,
    //         bookTitle: this.$store.state.comicDetail.bookTitle,
    //         bookStatus: this.$store.state.comicDetail.status,
    //         bookAuthor: this.$store.state.comicDetail.author,
    //         bookYear: this.$store.state.comicDetail.year,
    //         bookCountry: this.$store.state.comicDetail.country,
    //         bookUpdataNum: this.$store.state.comicDetail.updateNum,
    //         bookUpdateTime: this.$store.state.comicDetail.updateTime
    //       }
    //     }
    //   );
    //   // console.log(data)
    //   if (status === 200 && data && data.code === 0) {
    //     this.getCollect();
    //   }
    // },
    // delCollect: async function() {
    //   let username = this.username;
    //   let id = this.$route.params.bookUrl;
    //   const { status, data } = await this.$axios.post(
    //     "/user/users/delCollect",
    //     { username: username, id: id }
    //   );
    //   if (status === 200 && data && data.code === 0) {
    //     this.getCollect();
    //   }
    // },
    // getCollect: async function() {
    //   let username = this.username;
    //   const { status, data } = await this.$axios.post(
    //     "/user/users/getCollect",
    //     {
    //       username: username
    //     }
    //   );
    //   if (status === 200 && data && data.code === 0) {
    //     this.collectList = data.results[0].collect;
    //     console.log(this.collectList);
    //   }
    // },
    // msgFromNavBar: function(data) {
    //   this.username = data;
    //   console.log(this.username);
    // }
  }
};
</script>
<style lang="css" scoped>
/* .comicToolBar {
  position: fixed !important;
  bottom: 0px;
} */
/* .v-window {
  margin-bottom: 48px;
} */
</style>
