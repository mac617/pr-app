<template>
  <div class="indexComic">
    <v-layout justify-center>
      <v-flex>
        <v-tabs
          grow
          slot="extension"
          v-model="model"
          show-arrows
          next-icon="mdi-arrow-right-bold-box-outline"
          prev-icon="mdi-arrow-left-bold-box-outline"
        >
          <v-tabs-slider color="orange"/>
          <!-- <v-tab class="font-weight-bold title" :href="`#tab-${1}`">1</v-tab>
          <v-tab class="font-weight-bold title" :href="`#tab-${2}`">2</v-tab>
          <v-tab class="font-weight-bold title" :href="`#tab-${3}`">3</v-tab>
          <v-tab class="font-weight-bold title" :href="`#tab-${4}`">4</v-tab>-->
          <v-tab class="font-weight-bold title" :href="`#tab-${1}`">热血/校园</v-tab>
          <v-tab class="font-weight-bold title" :href="`#tab-${2}`">竞技/体育</v-tab>
          <v-tab class="font-weight-bold title" :href="`#tab-${3}`">武侠/格斗</v-tab>
          <v-tab class="font-weight-bold title" :href="`#tab-${4}`">爱情/治愈</v-tab>
        </v-tabs>

        <v-tabs-items v-model="model">
          <v-tab-item lazy :value="`tab-${1}`">
            <v-container>
              <!-- <v-card flat> -->
              <!-- <v-card-text> -->
              <!-- <v-container grid-list-md> -->
              <!-- <v-layout justify-center>
              <v-flex lg12 md12 xs12>-->
              <!-- <v-card> -->
              <!-- <v-card-title class="headline">热门连载</v-card-title> -->
              <v-layout row wrap justify-center align-content-center>
                <v-flex
                  lg3
                  md3
                  sm3
                  xs6
                  v-for="item in hBlood.slice(0,8)"
                  :key="item.id"
                  @click="toComic(item)"
                >
                  <div style="position:relative;text-align:center">
                    <v-hover>
                      <div slot-scope="{ hover }" class="imgCard">
                        <a>
                          <img
                            :class="hover?'indexComicImg elevation-12':'indexComicImg'"
                            :src="item.bookImg"
                            style="position:absolute;left:0;top:0;height:152px;width:114px;"
                          >
                          <span class="mask"></span>
                          <span class="updateName">{{item.updateChapterName}}</span>
                        </a>
                      </div>
                    </v-hover>
                    <p class="titleName">
                      <strong>{{item.bookTitle}}</strong>
                    </p>
                  </div>
                </v-flex>
              </v-layout>
              <!-- </v-card> -->
              <!-- </v-flex>
              </v-layout>-->
              <!-- </v-container> -->
              <!-- </v-card-text> -->
              <!-- </v-card> -->
            </v-container>
          </v-tab-item>
          <v-tab-item lazy :value="`tab-${2}`">
            <v-container>
              <!-- <v-card flat>
              <v-card-text>-->
              <!-- <v-container grid-list-md> -->
              <!-- <v-layout justify-center>
                  <v-flex lg12 md12 xs12>
              <v-card>-->
              <!-- <v-card-title class="headline">热门连载</v-card-title> -->
              <v-layout row wrap>
                <v-flex
                  lg3
                  md3
                  sm3
                  xs6
                  v-for="item in hSport.slice(0,8)"
                  :key="item.id"
                  @click="toComic(item)"
                >
                  <div style="position:relative;text-align:center">
                    <v-hover>
                      <div slot-scope="{ hover }" class="imgCard">
                        <a>
                          <img
                            :class="hover?'indexComicImg elevation-12':'indexComicImg'"
                            :src="item.bookImg"
                            style="position:absolute;left:0;top:0;height:152px;width:114px;"
                          >
                          <span class="mask"></span>
                          <span class="updateName">{{item.updateChapterName}}</span>
                        </a>
                      </div>
                    </v-hover>
                    <p class="titleName">
                      <strong>{{item.bookTitle}}</strong>
                    </p>
                  </div>
                </v-flex>
              </v-layout>
              <!-- </v-card>
                  </v-flex>
              </v-layout>-->
              <!-- </v-container> -->
              <!-- </v-card-text>
              </v-card>-->
            </v-container>
          </v-tab-item>
          <v-tab-item lazy :value="`tab-${3}`">
            <v-container>
              <!-- <v-card flat>
              <v-card-text>-->
              <!-- <v-container grid-list-md> -->
              <!-- <v-layout justify-center>
                  <v-flex lg12 md12 xs12>
              <v-card>-->
              <!-- <v-card-title class="headline">热门连载</v-card-title> -->
              <v-layout row wrap>
                <v-flex
                  lg3
                  md3
                  sm3
                  xs6
                  v-for="item in hFight.slice(0,8)"
                  :key="item.id"
                  @click="toComic(item)"
                >
                  <div style="position:relative;text-align:center">
                    <v-hover>
                      <div slot-scope="{ hover }" class="imgCard">
                        <a>
                          <img
                            :class="hover?'indexComicImg elevation-12':'indexComicImg'"
                            :src="item.bookImg"
                            style="position:absolute;left:0;top:0;height:152px;width:114px;"
                          >
                          <span class="mask"></span>
                          <span class="updateName">{{item.updateChapterName}}</span>
                        </a>
                      </div>
                    </v-hover>
                    <p class="titleName">
                      <strong>{{item.bookTitle}}</strong>
                    </p>
                  </div>
                </v-flex>
              </v-layout>
              <!-- </v-card>
                  </v-flex>
              </v-layout>-->
              <!-- </v-container> -->
              <!-- </v-card-text>
              </v-card>-->
            </v-container>
          </v-tab-item>

          <v-tab-item lazy :value="`tab-${4}`">
            <v-container>
              <!-- <v-card flat>
              <v-card-text>-->
              <!-- {{hLove}} -->
              <!-- <v-container grid-list-md> -->
              <!-- <v-layout justify-center>
                  <v-flex lg12 md12 xs12>
              <v-card>-->
              <!-- <v-card-title class="headline">热门连载</v-card-title> -->
              <v-layout row wrap>
                <v-flex
                  lg3
                  md3
                  sm3
                  xs6
                  v-for="item in hLove.slice(0,8)"
                  :key="item.id"
                  @click="toComic(item)"
                >
                  <div style="position:relative;text-align:center">
                    <v-hover>
                      <div slot-scope="{ hover }" class="imgCard">
                        <a>
                          <img
                            :class="hover?'indexComicImg elevation-12':'indexComicImg'"
                            :src="item.bookImg"
                            style="position:absolute;left:0;top:0;height:152px;width:114px;"
                          >
                          <span class="mask"></span>
                          <span class="updateName">{{item.updateChapterName}}</span>
                        </a>
                      </div>
                    </v-hover>
                    <p class="titleName">
                      <strong>{{item.bookTitle}}</strong>
                    </p>
                  </div>
                </v-flex>
              </v-layout>
              <!-- </v-card>
                  </v-flex>
              </v-layout>-->
              <!-- </v-container> -->
              <!-- </v-card-text>
              </v-card>-->
            </v-container>
          </v-tab-item>
        </v-tabs-items>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  props: ["content"],
  data() {
    return {
      model: "tab-1"
    };
  },
  computed: {
    hLove: function() {
      return this.content[0];
    },
    hBlood: function() {
      return this.content[1];
    },
    hSport: function() {
      return this.content[2];
    },
    hFight: function() {
      return this.content[3];
    }
  },
  created() {
    console.log(this.content[0]);
  },
  methods: {
    toComic(item) {
      // this.$store.state.comicContent = item
      let bookUrl = item.comicNo.replace("/", "");
      console.log(bookUrl);
      // this.$router.push(`/author/${this.authorData.mid}`);
      this.$router.push({ path: "/comic/" + bookUrl });
      // this.$router.push({ name: 'Comic', params: { bookUrl: bookUrl } })
    }
  }
  // created() {
  //   this.getContent();
  // },
  // methods: {
  //   getContent: async function() {
  //     let data = await this.$spider({
  //       url: "/api",
  //       type: "home"
  //     });
  //     this.hotContent = data[0][0]
  //   }
  // }
};
</script>
<style lang="css"scoped>
/* .v-card__text {
  padding: 0px !important;
} */
.indexComicImg {
  /* margin: 0.3rem 0.3rem 0.3rem; */
  /* border: 1px solid #bebebe !important; */
  box-shadow: 1px 1px 6px 0px #333;
}

.mask {
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #000;
  opacity: 0;
  transition: opacity 0.1s ease;
}
.backgroundColor1 {
  /* box-sizing: content-box; */
  opacity: 0.1 !important;
  border: 2px solid orange !important;
}

.imgCard {
  margin: 0 auto;
  width: 114px;
  height: 152px;
  position: relative;
}

.updateName {
  position: absolute;
  width: 114px;
  left: 0;
  bottom: 0;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.6);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 0 1rem;
  color: #fff;
}

.titleName {
  width: 114px;
  margin: 0 auto;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 0.5rem;
}
/* 
.backgroundColor2{
  border: 1px solid #bebebe !important;
} */
</style>