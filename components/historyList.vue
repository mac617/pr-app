<template>
  <div class="pr-history">
    <!-- <NavBar/>
    <Banner/>-->
    <!-- <v-layout justify-center>
      <v-flex lg8>
    <v-card>
    <v-container grid-list-md>
      <v-layout wrap>
        <v-flex xs12 lg6 md6 v-for="item in history" :key="item.id">
          <v-card class="black--text">
            <div style="display:flex;padding:5px">
              <div>
                <v-responsive :aspect-ratio="16/9">
                  <img style="width:90px;height:120px;" :src="item.comicDetail.bookImg">
                </v-responsive>
              </div>
              <div style="width:100%;margin-left:10px;min-width:0">
                <div class="bookTitle textHidden">{{ item.item.bookTitle}}</div>
              </div>
              <v-spacer></v-spacer>
              <div style="display:flex;align-items:Center" @click="toComic(item)">
                <v-btn class="hisBtn white--text" small color="black">
                  <span class="textHidden spanGoOn">续看{{item.item.chapterName}}</span>
                </v-btn>
              </div>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    </v-card></v-flex>
    </v-layout>-->
    <v-layout justify-center ma-0>
      <v-flex>
        <v-container fluid grid-list-lg>
          <v-layout row wrap :justify-center="$vuetify.breakpoint.smOnly">
            <v-flex lg6 md6 sm8 xs12 v-for="item in history" :key="item.id">
              <v-card>
                <v-layout @click="toComic(item)">
                  <v-flex xs5 align-self-center>
                    <v-img :src="item.comicDetail.bookImg" height="125px" contain></v-img>
                  </v-flex>
                  <v-flex xs7>
                    <v-card-title primary-title>
                      <div class="text-truncate">
                        <span class="headline">{{ item.item.bookTitle}}</span>
                        <div class="body-2">({{ item.comicDetail.bookStatus }})</div>
                        <div>{{item.comicDetail.bookAuthor}}</div>
                        <!-- <div>{{ item.comicDetail.bookYear }}</div> -->
                        <!-- <div>{{ item.comicDetail.bookCountry }}</div> -->
                        <span>更新至 : {{ item.comicDetail.bookUpdataNum }}</span>
                        <div style="overflow:hidden">
                          <div style="float:left">更新时间 :&nbsp</div>
                          <div style="float:left">{{ item.comicDetail.bookUpdateTime }}</div>
                        </div>
                      </div>
                    </v-card-title>
                    <!-- <v-card-title primary-title>
                        <div>
                          <div class="headline">{{ item.item.bookTitle}}</div>
                          <div>Foster the People</div>
                          <div>(2014)</div>
                        </div>
                    </v-card-title>-->
                  </v-flex>
                </v-layout>
                <v-divider light></v-divider>
                <v-card-actions class="pa-3">
                  <span>{{item.item.readTime}}</span>
                  <v-spacer></v-spacer>
                  <v-btn
                    block
                    class="maxWidth white--text"
                    color="#424242"
                    @click="toComicView(item)"
                  >
                    <div class="text-truncate">
                      <span>续看{{item.item.chapterName}}</span>
                    </div>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
            <!-- <v-spacer></v-spacer> -->
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Banner from "@/banner.vue";
import NavBar from "@/navBar.vue";
import ComicDetail from "@/comicDetail.vue";
export default {
  components: {
    Banner,
    NavBar,
    ComicDetail
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
    this.history = JSON.parse(storage.getItem("history")).reverse();
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

.maxWidth {
  min-width: 90px !important;
}
/* .divWidth{
  width:100%;
} */
</style>