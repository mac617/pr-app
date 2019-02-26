<template>
  <div>
    <!-- <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12>
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
            <v-card-actions class="pa-3">Rate this album
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
    </v-container>-->
    <!-- <v-container fluid grid-list-lg>
    <v-layout justify-center row wrap>-->
    <!-- <v-flex> -->
    <v-card>
      <v-layout row wrap justify-center>
        <v-flex lg8 md8 xs12 v-for="item in newList" :key="item.id" @click="qie(item)">
          <v-card class="black--text">
            <v-layout justify-center>
              <v-flex xs5>
                <v-img :src="item.bookImg" height="125px" contain/>
              </v-flex>
              <v-flex xs7>
                <v-card-title primary-title>
                  <div>
                    <div class="subheading">
                      {{ item.bookTitle }}
                      <span class="caption">({{ item.bookStatus }})</span>
                    </div>
                    <div class="caption">{{ item.bookAuthor }}</div>
                    <div class="caption">{{ item.bookYear+'年' }}</div>
                    <div class="caption">{{ item.bookCountry }}</div>
                    <div class="caption">{{ '更新到:'+item.bookUpdataNum }}</div>
                    <div class="caption">{{ '更新时间:'+item.bookUpdateTime }}</div>
                  </div>
                </v-card-title>
              </v-flex>
            </v-layout>
            <v-divider light/>
            <v-card-actions class="pa-3">
              <!-- <v-spacer/> -->
              <v-rating
                v-model="item.bookScore"
                background-color="white"
                color="yellow accent-4"
                dense
                half-increments
                hover
                size="18"
                readonly
              />
              <v-spacer/>
              <v-btn @click.stop="toComic(item)">点击查看</v-btn>
            </v-card-actions>
            <v-slide-y-transition>
              <v-card-text v-show="item.isShow">{{item.bookSummary}}</v-card-text>
            </v-slide-y-transition>
          </v-card>
        </v-flex>
      </v-layout>
    </v-card>
    <!-- </v-flex> -->
    <!-- </v-layout>
    </v-container>-->
  </div>
</template>
<script>
export default {
  data: () => ({
    // list: [
    //   {
    //     bookAuthor: "池本幹雄岸本齐史",
    //     bookCountry: "日本漫画",
    //     bookImg: "http://i.57mh.com/Uploads/fengmian/borenzhuan.jpg",
    //     bookOtherName: "博人传BORUTO，博人传之火影忍者次世代",
    //     bookStatus: "连载中",
    //     bookSummary:
    //       "简介：七代目火影漩涡鸣人治理的木叶村。那是经历了战争的历史之后人们讴歌和平的时代。但是鸣人与其儿子漩涡博人的关系却并不和平…[详情]",
    //     bookTitle: "博人传",
    //     bookUpdataNum: "17话",
    //     bookUpdateTime: "2018-06-15",
    //     bookUrl: "/26154/",
    //     bookYear: "2016"
    //   },
    //   {
    //     bookAuthor: "岸本齐史",
    //     bookCountry: "日本漫画",
    //     bookImg: "http://i.57mh.com/Uploads/bcover/2012/12/271504536_h.jpg",
    //     bookOtherName: "NARUTO -ナルト-，狐忍",
    //     bookStatus: "连载中",
    //     bookSummary:
    //       "简介：火影忍者漫画。故事从主人公漩涡鸣人的孤儿生活开始，他的父母为了保护村子，将攻击村子九尾妖狐封印到了他体内，鸣人因此受尽了村人的冷落，只是拼命用各种恶作剧试图吸引大家的注意力。好在还是有依鲁卡老师的关心，鸣人的性格才没有变得扭曲，他总是干劲十足、非常乐观。 鸣人为了让更多的人认可自己，鸣人的目标是成为火影。整个故事就围绕鸣人的奋斗、成长，鸣人的同伴们的故事，以及这个忍者世界的各种争斗和阴谋的展开。[详情]",
    //     bookTitle: "火影忍者",
    //     bookUpdataNum: "brc26话",
    //     bookUpdateTime: "2018-12-27",
    //     bookUrl: "/283/",
    //     bookYear: "2000"
    //   }
    // ],
    show: false,
    rating: 4.7
  }),
  created() {
    console.log(this.list);
  },
  // watch: {
  //   list: function() {
  //     this.newList = this.list.map(item => {
  //       this.$set(item, "isShow", false);
  //       return item;
  //     });
  //   }
  // },
  computed: {
    // list: function() {
    //   return this.$store.state.searchResult;
    // },
    newList: function() {
      return this.$store.state.searchResult.map(item => {
        this.$set(item, "isShow", false);
        return item;
      });
    }
    // newList: function() {
    //   return this.list.map(item => {
    //     this.$set(item, "isShow", false);
    //     return item;
    //   });
    // }
  },
  methods: {
    qie: function(item) {
      const buff = item.isShow;
      this.newList.forEach(listItem => {
        listItem.isShow = false;
      });
      item.isShow = !buff;
    },
    // search() {
    //   let self = this
    //   this.$axios.post('/users/search', {}).then(response => {
    //     self.title = response.title
    //     self.author = response.author
    //     self.detail = response.detail
    //     self.img = response.img
    //   })
    // },
    toComic(item) {
      // this.$store.commit("setComicDetail", item);
      let bookUrl = item.bookUrl.replace(/\//g, "");
      // let bookUrl = item.bookUrl
      // console.log(bookUrl);
      // this.$router.push(`/author/${this.authorData.mid}`);
      this.$router.push({ path: "/comic/" + bookUrl });
    }
  }
};
</script>

<style lang="css" scoped>
.container {
  padding: 0px;
}
.v-card__title--primary {
  padding: 8px !important;
}
.v-expansion-panel__header {
  padding: 0px 24px !important;
}
.v-expansion-panel__body {
  padding: 0px 24px !important;
}
.v-sheet {
  border-radius: 0px !important;
}
/* .v-expansion-panel__header {
  padding: 0px;
}
.comicButton {
  float: left;
  height: 100%;
} */
</style>
