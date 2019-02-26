<template>
  <v-speed-dial
    v-model="$store.state.fab"
    fixed
    :top="top"
    :bottom="bottom"
    :right="right"
    :left="left"
    :direction="direction"
    :transition="transition"
  >
    <v-btn
      slot="activator"
      v-model="$store.state.fab"
      dark
      fab
      :large="this.$vuetify.breakpoint.mdAndUp"
    >
      <v-icon>account_circle</v-icon>
      <v-icon>close</v-icon>
    </v-btn>
    <!-- <v-btn fab dark small color="green">
      <v-icon>edit</v-icon>
    </v-btn>-->
    <v-layout row justify-center>
      <v-dialog
        v-model="$store.state.chapterBtnDialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <v-btn slot="activator" :small="this.$vuetify.breakpoint.smAndDown" fab dark>
          <v-icon>format_align_justify</v-icon>
        </v-btn>
        <v-card>
          <v-toolbar dark>
            <v-btn icon dark @click="$store.state.chapterBtnDialog= !$store.state.chapterBtnDialog">
              <v-icon>close</v-icon>
            </v-btn>
            <v-toolbar-title>Settings</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <ChapterList/>
          <!-- <v-list three-line subheader>
            <v-subheader>User Controls</v-subheader>
            <v-list-tile avatar>
              <v-list-tile-content>
                <v-list-tile-title>Content filtering</v-list-tile-title>
                <v-list-tile-sub-title>Set the content filtering level to restrict apps that can be downloaded</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile avatar>
              <v-list-tile-content>
                <v-list-tile-title>Password</v-list-tile-title>
                <v-list-tile-sub-title>Require password for purchase or use password to restrict purchase</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>-->
          <v-divider></v-divider>
        </v-card>
      </v-dialog>
    </v-layout>
    <div class="hidden-xs-and-up">
      <!-- <v-btn fab dark :small="this.$vuetify.breakpoint.smAndDown" @click="toHome()">
        <v-icon dark>home</v-icon>
      </v-btn>
      <v-btn fab dark :small="this.$vuetify.breakpoint.smAndDown">
        <v-icon v-if="checkCollectList" @click.stop="delCollect()" left color="pink">favorite</v-icon>
        <v-icon
          v-else-if="!checkCollectList"
          @click.stop="addCollect();loader = 'loading3'"
          left
          color="white"
        >favorite</v-icon>
      </v-btn> -->
      <!-- <v-btn fab dark :small="this.$vuetify.breakpoint.smAndDown">
        <v-icon dark>vertical_align_top</v-icon>
      </v-btn>-->
      <Scroll>
        <v-btn slot="scrollBtn" fab dark :small="this.$vuetify.breakpoint.smAndDown">
          <v-icon dark>vertical_align_top</v-icon>
        </v-btn>
      </Scroll>
      <!-- <v-btn @click="toNext" fab dark :small="this.$vuetify.breakpoint.smAndDown">
        <v-icon dark>format_indent_increase</v-icon>
      </v-btn>
      <v-btn @click="toPrev" fab dark :small="this.$vuetify.breakpoint.smAndDown">
        <v-icon>format_indent_decrease</v-icon>
      </v-btn>-->
    </div>
    <!-- 
    <div class="hidden-xs-and-down hidden-md-and-up">
      <v-btn fab dark  color="orange">
        <v-icon dark>home</v-icon>
      </v-btn>
      <v-btn fab dark  color="orange">
        <v-icon dark>arrow_back</v-icon>
      </v-btn>
      <v-btn @click="toPrev" fab dark  color="orange">
        <v-icon dark>favorite</v-icon>
      </v-btn>
      <v-btn @click="toNext" fab dark  color="red">
        <v-icon>home</v-icon>
      </v-btn>
    </div>

    <div class="hidden-lg-and-down">
      <v-btn fab dark large color="orange">
        <v-icon dark>home</v-icon>
      </v-btn>
      <v-btn fab dark large color="orange">
        <v-icon dark>arrow_back</v-icon>
      </v-btn>
      <v-btn @click="toPrev" fab dark large color="orange">
        <v-icon dark>favorite</v-icon>
      </v-btn>
      <v-btn @click="toNext" fab dark large color="red">
        <v-icon>home</v-icon>
      </v-btn>
    </div>-->
  </v-speed-dial>
</template>

<script>
import ChapterList from "@/chapterList.vue";
import Scroll from "@/scroll.vue";
export default {
  components: {
    ChapterList,
    Scroll
  },
  created() {
    this.$store.state.chapterBtnDialog = false;
  },
  data: () => ({
    direction: "top",
    // fling: false,
    // hover: true,
    // tabs: null,
    top: false,
    right: true,
    bottom: true,
    left: false,

    //目录
    // dialog: this.$store.state.chapterBtnDialog,
    notifications: false,
    sound: true,
    widgets: false,
    transition: "slide-y-reverse-transition"
  }),
  // watch: {
  //   username: function() {
  //     this.getCollect();
  //   }
  // },
  computed: {
    // fab: function(){
    //   return this.$store.state.fab
    // },
    // username: function() {
    //   return this.$store.state.user;
    // },
    // checkCollectList: function() {
    //   return JSON.stringify(this.collectList).includes(
    //     this.$route.params.bookUrl
    //   );
    // },
    dialog: function() {
      return this.$store.state.chapterBtnDialog;
    },
    activeFab() {
      switch (this.tabs) {
        case "one":
          return { class: "purple", icon: "account_circle" };
        case "two":
          return { class: "red", icon: "edit" };
        case "three":
          return { class: "green", icon: "keyboard_arrow_up" };
        default:
          return {};
      }
    }
  },

  watch: {
    top(val) {
      this.bottom = !val;
    },
    right(val) {
      this.left = !val;
    },
    bottom(val) {
      this.top = !val;
    },
    left(val) {
      this.right = !val;
    }
  },
  methods: {
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
    //     console.log("这是collectList" + this.collectList);
    //   }
    // },
    // addCollect: async function() {
    //   // checkLogin
    //   if (!this.username.length) {
    //     this.$router.push("/login");
    //   }
    //   let username = this.username;
    //   let id = this.$route.params.comicNo;
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
    toNext() {
      this.$emit("toNext");
    },
    toPrev() {
      this.$emit("toPrev");
    },
    toHome() {
      this.$router.push("/");
      // this.$store.state.showIndexTab = true;
      // this.drawer = !this.drawer;
    }
  }
};
</script>

<style scoped>
.material-icons {
  display: flex !important;
}
/* .v-speed-dial {
    position: fixed !important;
} */
/* This is for documentation purposes and will not be needed in your application */
</style>