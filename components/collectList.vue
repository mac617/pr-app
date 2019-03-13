<template>
  <div class="pr-collect">
    <!-- <NavBar v-on:sendUser="msgFromNavBar"/> -->
    <!-- <ComicDetail
      v-for="item in collectList"
      :key="item.id"
      v-bind:collectList="item"
      @click.native="toComic(item)"
    />-->
    <v-layout justify-center ma-0>
      <v-flex lg12>
        <v-container fluid grid-list-lg pa-0>
          <v-layout row wrap :justify-center="$vuetify.breakpoint.smOnly">
            <v-flex
              lg6
              md6
              sm8
              xs12
              v-for="item in collectList"
              :key="item.id"
              @click="toComic(item)"
              
            >
              <v-card>
                <v-layout>
                  <v-flex xs5 align-self-center>
                    <v-img :src="item.comicDetail.bookImg" height="125px" contain></v-img>
                  </v-flex>
                  <v-flex xs7>
                    <v-card-title primary-title>
                      <div class="text-truncate">
                        <span class="headline">{{ item.comicDetail.bookTitle}}</span>
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
                  </v-flex>
                </v-layout>
                <v-divider light></v-divider>
              </v-card>
            </v-flex>
            <v-flex v-if="!collectList"><center class="subheading"><strong>这里什么都没有......</strong></center></v-flex>
            <!-- <v-spacer></v-spacer> -->
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import NavBar from "@/navBar.vue";
import ComicDetail from "@/comicDetail.vue";
export default {
  components: {
    NavBar,
    ComicDetail
  },
  data() {
    return {
      collectList: ""
    };
  },
  created() {
    console.log(this.$store.state.user);
    this.getCollect();
    console.log(this.$store.state.user);
  },
  computed: {
    username: function() {
      return this.$store.state.user;
    }
  },
  watch: {
    username: function() {
      this.getCollect();
    }
  },
  //   },
  methods: {
    getCollect: async function() {
      let username = this.username;
      const { status, data } = await this.$axios.post(
        "/user/users/getCollect",
        {
          username: username
        }
      );
      if (status === 200 && data && data.code === 0) {
        if (data.results[0]) {
          this.collectList = data.results[0].collect.reverse();
          console.log(this.collectList);
        }
      }
    },
    // msgFromNavBar: function(data) {
    //   this.username = data;
    // },
    toComic: function(item) {
      // alert("he");
      // this.$store.commit("setComicDetail", item);
      // console.log(item.comicId)
      let bookUrl = item.comicId;
      // let bookUrl = item.bookUrl
      // console.log(bookUrl);
      // this.$router.push(`/author/${this.authorData.mid}`);
      this.$router.push({ path: "/comic/" + bookUrl });
    }
  }
};
</script>
<style lang="css">
</style>
