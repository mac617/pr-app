<template>
  <!-- <v-card>
    <v-flex xs12>
      <v-card
        color="cyan darken-2"
        class="white--text"
      >
        <v-layout>
          <v-flex xs5>
            <v-img
              :src="bookImg"
              height="125px"
              contain
            />
          </v-flex>
          <v-flex xs7>
            <v-card-title primary-title>
              <div>
                <div class="headline">{{ bookTitle }}</div>
                <div>{{ bookAuthor }}</div>
                <div>{{ bookYear }}</div>
              </div>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-divider light />

      </v-card>
    </v-flex>
    <ComicDetail />
  </v-card>-->
  <v-layout justify-center>
    <v-flex lg12 md12 xs12 style="padding:0px">
      <div slot="header">
        <!-- <v-flex> -->
        <v-flex xs12>
          <v-card class="black--text">
            <v-layout>
              <v-flex xs5 align-self-center>
                <v-img :src="bookImg" height="125px" contain></v-img>
              </v-flex>
              <v-flex xs7>
                <v-card-title primary-title>
                  <div>
                    <div class="headline">{{ bookTitle }}</div>
                    <div>{{ bookAuthor }}</div>
                    <div>{{bookYear}}</div>
                    <div>{{ bookCountry }}</div>
                    <div>更新至 : {{ bookUpdataNum }}</div>
                    <div>更新时间 : {{ bookUpdateTime }}</div>
                  </div>
                </v-card-title>
              </v-flex>
            </v-layout>
            <v-divider light></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <!-- <v-btn if="username"> -->
              <!-- <v-spacer></v-spacer> -->
              <!-- <v-spacer></v-spacer> -->
              <!-- <v-spacer></v-spacer> -->
              <v-btn
                small
                class="white--text"
                color="black"
                v-if="checkCollectList"
                @click.stop="delCollect()"
              >
                <v-icon left color="pink">favorite</v-icon>收藏
              </v-btn>
              <v-btn
                color="black"
                small
                class="white--text"
                v-else-if="!checkCollectList"
                @click.stop="addCollect();loader = 'loading3'"
              >
                <v-icon left color="white">favorite</v-icon>收藏
              </v-btn>

              <v-btn @click="toComicView()">开始阅读</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>

        <!-- </v-flex> -->
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  // props: ["collectList"],
  data() {
    return {
      collectList: "",
      loading3: false
      // bookTitle: this.collectList
      //   ? this.collectList.comicDetail.bookTitle
      //   : this.$store.state.comicDetail.bookTitle,
      // bookImg: this.collectList
      //   ? this.collectList.comicDetail.bookImg
      //   : this.$store.state.comicDetail.bookImg,
      // bookStatus: this.collectList
      //   ? this.collectList.comicDetail.bookStatus
      //   : this.$store.state.comicDetail.status,
      // bookAuthor: this.collectList
      //   ? this.collectList.comicDetail.bookAuthor
      //   : this.$store.state.comicDetail.author,
      // bookYear: this.collectList
      //   ? this.collectList.comicDetail.bookYear
      //   : this.$store.state.comicDetail.year,
      // bookCountry: this.collectList
      //   ? this.collectList.comicDetail.bookCountry
      //   : this.$store.state.comicDetail.country,
      // bookUpdataNum: this.collectList
      //   ? this.collectList.comicDetail.bookUpdataNum
      //   : this.$store.state.comicDetail.updateNum,
      // bookUpdateTime: this.collectList
      //   ? this.collectList.comicDetail.bookUpdateTime
      //   : this.$store.state.comicDetail.updateTime
      // bookImg: this.collectList
      // bookImg: this.collectList.comicDetail.bookImg?this.collectList.comicDetail.bookImg:this.comicDetail
      // bookImg: this.comicDetail
      //   ? this.comicDetail
      //   : this.collectList.comicDetail.bookImg
      // bookStatus: this.comicDetail
      //   ? this.comicDetail
      //   : this.collectList.comicDetail.bookStatus,
      // bookAuthor: this.comicDetail
      //   ? this.comicDetail
      //   : this.collectList.comicDetail.bookAuthor,
      // bookYear: this.comicDetail
      //   ? this.comicDetail
      //   : this.collectList.comicDetail.bookYear,
      // bookCountry: this.comicDetail
      //   ? this.comicDetail
      //   : this.collectList.comicDetail.bookCountry,
      // bookUpdataNum: this.comicDetail
      //   ? this.comicDetail
      //   : this.collectList.comicDetail.bookUpdataNum,
      // bookUpdateTime: this.comicDetail
      //   ? this.comicDetail
      //   : this.collectList.comicDetail.bookUpdateTime
      // bookAuthor: this.$store.state.comicDetail.author,
      // bookAuthor: '池本幹雄岸本齐史',
      // bookCountry: '日本漫画',
      // bookImg: 'http://i.57mh.com/Uploads/fengmian/borenzhuan.jpg',
      // bookOtherName: '博人传BORUTO，博人传之火影忍者次世代',
      // bookStatus: '连载中',
      // bookSummary:
      //   '简介：七代目火影漩涡鸣人治理的木叶村。那是经历了战争的历史之后人们讴歌和平的时代。但是鸣人与其儿子漩涡博人的关系却并不和平…[详情]',
      // bookTitle: '博人传',
      // bookUpdataNum: '17话',
      // bookUpdateTime: '2018-06-15',
      // bookUrl: '/26154/',
      // bookYear: '2016'
    };
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 3000);

      this.loader = null;
    }
    // comicDetail: function() {
    //   (this.bookTitle = this.comicDetail.bookTitle),
    //     (this.bookImg = this.comicDetail.bookImg),
    //     (this.bookStatus = this.comicDetail.status),
    //     (this.bookAuthor = this.comicDetail.author),
    //     (this.bookYear = this.comicDetail.year),
    //     (this.bookCountry = this.comicDetail.country),
    //     (this.bookUpdataNum = this.comicDetail.updateNum),
    //     (this.bookUpdateTime = this.comicDetail.updateTime);
    // }
  },
  created() {
    console.log(this.$route.params.bookUrl);
    // let data= JSON.parse(this.history)
    // console.log("历史数据" + this.history.item.id);
    // console.log("这个收藏数据" + this.collectList);
    // setTimeout(function() {
    //   console.log("这是漫画页数据" + this.comicDetail);
    // }, 5000);
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
    username: function() {
      return this.$store.state.user;
    },
    bookAuthor() {
      return this.$store.state.comicDetail.author;
    },
    // return this.collectList
    //   ? this.collectList.comicDetail.bookAuthor
    //   : this.$store.state.comicDetail.author;
    bookImg() {
      return this.$store.state.comicDetail.bookImg;
    },
    bookTitle() {
      return this.$store.state.comicDetail.bookTitle;
    },
    bookYear() {
      return this.$store.state.comicDetail.year;
    },

    bookStatus() {
      return this.$store.state.comicDetail.status;
    },
    bookUpdataNum() {
      return this.$store.state.comicDetail.updateNum;
    },
    bookUpdateTime() {
      return this.$store.state.comicDetail.updateTime;
    },
    bookCountry() {
      return this.$store.state.comicDetail.country;
    }
  },
  methods: {
    toComicView: function(item) {
      this.setHistory();
      let id = this.$route.params.bookUrl;
      this.$router.push({ path: "/comicview/" + id + "/" + "01" });
    },
    addCollect: async function() {
      // checkLogin
      if (!this.username.length) {
        this.$router.push("/login");
      }
      let username = this.username;
      let id = this.$route.params.bookUrl;
      const { status, data } = await this.$axios.post(
        "/user/users/addCollect",
        {
          username: username,
          id: id,
          comicDetail: {
            bookImg: this.$store.state.comicDetail.bookImg,
            bookTitle: this.$store.state.comicDetail.bookTitle,
            bookStatus: this.$store.state.comicDetail.status,
            bookAuthor: this.$store.state.comicDetail.author,
            bookYear: this.$store.state.comicDetail.year,
            bookCountry: this.$store.state.comicDetail.country,
            bookUpdataNum: this.$store.state.comicDetail.updateNum,
            bookUpdateTime: this.$store.state.comicDetail.updateTime
          }
        }
      );
      // console.log(data)
      if (status === 200 && data && data.code === 0) {
        this.getCollect();
      }
    },
    delCollect: async function() {
      let username = this.username;
      let id = this.$route.params.bookUrl;
      const { status, data } = await this.$axios.post(
        "/user/users/delCollect",
        { username: username, id: id }
      );
      if (status === 200 && data && data.code === 0) {
        this.getCollect();
      }
    },
    getCollect: async function() {
      let username = this.username;
      const { status, data } = await this.$axios.post(
        "/user/users/getCollect",
        {
          username: username
        }
      );
      if (status === 200 && data && data.code === 0) {
        this.collectList = data.results[0].collect;
        console.log("这是collectList" + this.collectList);
      }
    },
    setHistory: function() {
      console.log("comicDetail");
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
          id: this.$route.params.bookUrl,
          bookTitle: this.bookTitle,
          chapterName: "01话/卷",
          chapterNo: "01",
          readTime: readTime()
        },
        comicDetail: {
          //   bookAuthor: this.comicDetail.author,
          bookImg: this.bookImg
          //   bookTitle: this.comicDetail.bookTitle,
          //   bookYear: this.comicDetail.year,
          //   bookStatus: this.comicDetail.status,
          //   bookUpdataNum: this.comicDetail.updateNum,
          //   bookUpdateTime: this.comicDetail.updateTime,
          //   bookCountry: this.comicDetail.country
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
  }
};
</script>
<style lang="css">
.layout:first-child {
  margin-top: 0px !important;
}
</style>
