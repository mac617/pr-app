<template>
  <div class="pr-collect">
    <!-- <NavBar v-on:sendUser="msgFromNavBar"/> -->
    <!-- <ComicDetail
      v-for="item in collectList"
      :key="item.id"
      v-bind:collectList="item"
      @click.native="toComic(item)"
    />-->
    <!-- <v-layout justify-center>
    <v-flex lg12>-->
    <!-- {{content}} -->
    <!-- <v-card> -->
      <v-layout justify-center ma-0>
      <v-flex>
        <v-container fluid grid-list-lg>
        <v-layout row wrap justify-center>
          <v-flex lg6 md6 sm8 xs12 v-for="item in content" :key="item.id">
            <v-card>
              <v-layout justify-center>
                <v-flex xs5>
                  <v-img :src="item.bookImg" height="125px" contain/>
                </v-flex>
                <v-flex  xs7>
                  <v-card-title primary-title>
                    <div class="text-truncate">
                      <span class="headline">{{ item.bookTitle}}</span>
                      <div class="body-2">({{ item.bookStatus?'完结':'连载' }})</div>
                      <!-- <div>{{item.comicDetail.bookAuthor}}</div> -->
                      <!-- <div>{{ item.comicDetail.bookYear }}</div> -->
                      <!-- <div>{{ item.comicDetail.bookCountry }}</div> -->
                      <span>更新至 : {{ item.updateChapterName }}</span>
                      <div style="overflow:hidden">
                            <div style="float:left">更新时间 :&nbsp</div>
                            <div style="float:left">{{ item.updateTime }}</div>
                          </div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light/>
              <v-card-actions class="pa-3">
                <!-- <v-spacer/> -->
                <v-rating
                  v-model="item.bookScore"
                  background-color="orange"
                  color="orange"
                  dense
                  half-increments
                  size="21"
                  readonly
                />
                <v-spacer/>
                <v-btn @click.stop="toComic(item)">点击查看</v-btn>
              </v-card-actions>
              <!-- <v-slide-y-transition>
              <v-card-text v-show="item.isShow">{{item.bookSummary}}</v-card-text>
              </v-slide-y-transition>-->
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      </v-flex>
    </v-layout>
    <!-- </v-card> -->
    <!-- </v-flex>
      
    </v-layout>-->
  </div>
</template>

<script>
export default {
  computed: {
    content: function() {
      return this.$store.state.categoryContent;
    }
  },
  methods: {
    toComic(item) {
      let bookUrl = item.bookUrl.replace(/\//g, "");
      this.$router.push({ path: "/comic/" + bookUrl });
      
    }
  }
};
</script>
<style lang="css">
</style>
