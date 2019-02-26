<template>
  <div class="pr-collect">
    <NavBar v-on:sendUser="msgFromNavBar"/>
    <!-- <ComicDetail
      v-for="item in collectList"
      :key="item.id"
      v-bind:collectList="item"
      @click.native="toComic(item)"
    />-->
    <v-layout justify-center>
      <v-flex lg5 md8 xs12 v-for="item in collectList" :key="item.id" @click="toComic(item)">
        <div slot="header">
          <v-flex xs12>
            <v-card color="cyan darken-2" class="white--text">
              <v-layout>
                <v-flex xs5 lg5 style="padding:3px">
                  <v-img :src="item.comicDetail.bookImg" contain/>
                </v-flex>
                <v-flex xs7 lg7 md12>
                  <v-card-title>
                    <v-flex>
                      {{ item.comicDetail.bookTitle}}
                      <span
                        class="body-2"
                      >({{ item.comicDetail.bookStatus }})</span>
                    </v-flex>
                    <v-flex xs12>作者 : {{item.comicDetail.bookAuthor}}</v-flex>
                    <v-flex xs12>{{ item.comicDetail.bookYear }}</v-flex>
                    <v-flex xs12>{{ item.comicDetail.bookCountry }}</v-flex>
                    <v-flex xs12>更新至 : {{ item.comicDetail.bookUpdataNum }}</v-flex>
                    <v-flex xs12>更新时间 : {{ item.comicDetail.bookUpdateTime }}</v-flex>
                    <!-- <div class="caption">{{ item.bookYear }}</div> -->
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light/>
            </v-card>
          </v-flex>
        </div>
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
      username: "",
      collectList: ""
    };
  },
  watch: {
    username: function() {
      this.getCollect();
    }
  },
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
          this.collectList = data.results[0].collect;
          console.log(this.collectList);
        }
      }
    },
    msgFromNavBar: function(data) {
      this.username = data;
    },
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
