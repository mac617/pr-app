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
            <v-card flat>
              <v-card-text>
                <!-- <v-container grid-list-md> -->
                <v-layout justify-center>
                  <v-flex lg12 md12 xs12>
                    <v-card>
                      <!-- <v-card-title class="headline">热门连载</v-card-title> -->
                      <v-layout row wrap>
                        <v-flex
                          lg3
                          md3
                          sm3
                          xs6
                          v-for="item in hBlood.slice(0,8)"
                          :key="item.id"
                          @click="toComic(item)"
                        >
                          <v-card class="indexComicImg">
                            <v-img :src="item.bookImg" :aspect-ratio="3/4"></v-img>
                            <v-card-text>
                              <div
                                class="text-md-center text-lg-center text-xs-center text-truncate"
                              >{{item.bookTitle}}</div>
                            </v-card-text>
                          </v-card>
                        </v-flex>
                      </v-layout>
                    </v-card>
                  </v-flex>
                </v-layout>
                <!-- </v-container> -->
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item lazy :value="`tab-${2}`">
            <v-card flat>
              <v-card-text>
                <!-- <v-container grid-list-md> -->
                <v-layout justify-center>
                  <v-flex lg12 md12 xs12>
                    <v-card>
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
                          <v-card class="indexComicImg">
                            <v-img :src="item.bookImg" :aspect-ratio="3/4"></v-img>
                            <v-card-text>
                              <div
                                class="text-md-center text-lg-center text-xs-center text-truncate"
                              >{{item.bookTitle}}</div>
                            </v-card-text>
                          </v-card>
                        </v-flex>
                      </v-layout>
                    </v-card>
                  </v-flex>
                </v-layout>
                <!-- </v-container> -->
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item lazy :value="`tab-${3}`">
            <v-card flat>
              <v-card-text>
                <!-- <v-container grid-list-md> -->
                <v-layout justify-center>
                  <v-flex lg12 md12 xs12>
                    <v-card>
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
                          <v-card class="indexComicImg">
                            <v-img :src="item.bookImg" :aspect-ratio="3/4"></v-img>
                            <v-card-text>
                              <div
                                class="text-md-center text-lg-center text-xs-center text-truncate"
                              >{{item.bookTitle}}</div>
                            </v-card-text>
                          </v-card>
                        </v-flex>
                      </v-layout>
                    </v-card>
                  </v-flex>
                </v-layout>
                <!-- </v-container> -->
              </v-card-text>
            </v-card>
          </v-tab-item>

          <v-tab-item lazy :value="`tab-${4}`">
            <v-card flat>
              <v-card-text>
                <!-- {{hLove}} -->
                <!-- <v-container grid-list-md> -->
                <v-layout justify-center>
                  <v-flex lg12 md12 xs12>
                    <v-card>
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
                          <v-card class="indexComicImg">
                            <v-img :src="item.bookImg" :aspect-ratio="3/4"></v-img>
                            <v-card-text>
                              <div
                                class="text-md-center text-lg-center text-xs-center text-truncate"
                              >{{item.bookTitle}}</div>
                            </v-card-text>
                          </v-card>
                        </v-flex>
                      </v-layout>
                    </v-card>
                  </v-flex>
                </v-layout>
                <!-- </v-container> -->
              </v-card-text>
            </v-card>
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
.v-card__text {
  padding: 0px !important;
}

.indexComicImg {
  margin: 0.3rem 0.3rem 0.3rem;
  box-shadow: 1px 1px 6px 0px #333 !important;
}
</style>