<template>
  <div>
    <v-flex xs12>
      <v-tabs
        dark
        fixed-tabs
        next-icon="mdi-arrow-right-bold-box-outline"
        prev-icon="mdi-arrow-left-bold-box-outline"
        show-arrows
      >
        <!-- <v-tabs-slider color="yellow"/> -->
        <v-tab v-for="i in chapterPageNum" :key="i" :href="'#tab-' + i">Page{{ i }}</v-tab>

        <v-tabs-items>
          <v-tab-item v-for="v in chapterPageNum" :key="v" :value="'tab-' + v">
            <v-card flat>
              <v-card-text>
                <v-container grid-list-md text-xs-center>
                  <v-layout row wrap>
                    <v-flex v-for="(item,index) in chapterPageItem(v)" :key="index" xs4>
                      <v-card dark>
                        <v-card-text class="px-0" @click.stop="toComicView(item,index+(v-1)*100)">
                          <div class="text-truncate">
                            <span>{{ item.chapterNum }}</span>
                          </div>
                        </v-card-text>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-tabs>
    </v-flex>
  </div>
</template>

<script>
export default {
  props: ["chapterList"],
  data() {
    return {
      text: "Lorem ipsat.",
      PageNum: "",
      chapterNoandNum: "",
      comicDetail: "",
      localChapterList: ""
    };
  },
  created() {
    this.getLocalChapterList();
    console.log("1");
  },
  // console.log("zheshichapter" + this.chapterList.comicDetail);
  watch: {
    $route: "getLocalChapterList",
    chapterList: function() {
      this.chapterNoandNum = this.chapterList.chapterNoandNum;
      this.comicDetail = this.chapterList.comicDetail;
      console.log("这是chapter" + this.chapterList.chapterNoandNum);
    }
  },
  computed: {
    chapterPageNum: function() {
      if (this.$route.path.includes("comicview")) {
        return Math.ceil(this.localChapterList.length / 99);
      } else {
        return Math.ceil(this.chapterNoandNum.length / 99);
      }
    },
    chapterPageItem() {
      if (this.$route.path.includes("comicview")) {
        return function(v) {
          return this.localChapterList.slice((v - 1) * 100, v * 99);
        };
      } else {
        return function(v) {
          return this.chapterNoandNum.slice((v - 1) * 100, v * 99);
        };
      }
    }
  },
  // localChapterList: function() {
  //   let storage = window.localStorage;
  //   let str = storage.getItem("chapterListNo" + this.$route.params.comicNo);
  //   let localChapterList = JSON.parse(str);
  //   console.log(localChapterList);
  //   return localChapterList;
  // }

  methods: {
    toComicView(item, listItemNum) {
      console.log("item" + item.comicNo);
      console.log(listItemNum);
      this.$store.state.num = 0;
      this.$store.state.page = 7;
      window.scrollTo(0, 0);
      this.$store.state.chapterBtnDialog = !this.$store.state.chapterBtnDialog;
      if (this.$route.path.includes("comic/")) {
        let storage = window.localStorage;
        let content = [];
        let oldHistory = JSON.parse(storage.getItem("history"));
        console.log("老数据" + oldHistory);
        let readTime = function() {
          let year = new Date().getFullYear();
          let month = new Date().getMonth() + 1;
          let day = new Date().getDate();
          let hours = new Date().getHours();
          let minutes = new Date().getMinutes();
          let seconds = new Date().getSeconds();
          if (seconds < 10) {
            seconds = "0" + seconds;
          }

          return (
            year +
            "年" +
            month +
            "月" +
            day +
            "日" +
            hours +
            ":" +
            minutes +
            ":" +
            seconds
          );
        };
        console.log("时间" + readTime());
        let newHistory = {
          item: {
            id: item.comicNo,
            bookTitle: this.comicDetail.bookTitle,
            chapterName: item.chapterNum,
            chapterNo: item.chapterNo,
            readTime: readTime()
          },
          comicDetail: {
            bookAuthor: this.comicDetail.author,
            bookImg: this.comicDetail.bookImg,
            bookTitle: this.comicDetail.bookTitle,
            bookYear: this.comicDetail.year,
            bookStatus: this.comicDetail.status,
            bookUpdataNum: this.comicDetail.updateNum,
            bookUpdateTime: this.comicDetail.updateTime,
            bookCountry: this.comicDetail.country
          }
        };
        if (oldHistory != null) {
          //遍历oldHistory数组,再把oldHistory Push进去新数组
          for (var i = 0; i < oldHistory.length; i++) {
            console.log(oldHistory[i].item.id);
            console.log(newHistory.item.id);
            //去除与newHistory重复的数据
            if (oldHistory[i].item.id != newHistory.item.id) {
              content.push(oldHistory[i]);
            }
            console.log(content);
          }
          //增加newHistory点击的数据

          content.push(newHistory);
          console.log(content);
        } else {
          content.push(newHistory);
        }
        storage.setItem("history", JSON.stringify(content));
      }

      // console.log("jieguo" + results);
      // let history = JSON.parse(storage.getItem("history"));
      // console.log(history);
      this.$router.push({
        path: "/comicview/" + item.comicNo + "/" + item.chapterNo
      });
    },
    getLocalChapterList() {
      let storage = window.localStorage;
      let str = storage.getItem("chapterListNo" + this.$route.params.comicNo);
      let localChapterList = JSON.parse(str);
      // console.log("local" + localChapterList);
      this.localChapterList = localChapterList;
      // console.log("localchapter" + this.chapterList);
    }
  }
};
</script>

<style scoped>
.v-tabs__wrapper--show-arrows {
  margin-left: 40px;
  margin-right: 40px;
}
</style>
