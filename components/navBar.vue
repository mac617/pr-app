<template>
  <div class="pr-navbar">
    <v-navigation-drawer v-model="drawer" app temporary dense>
      <v-list v-if="user">
        <v-list-tile>
          <v-list-tile-action>
            <v-icon/>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ user }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <!-- 
        <v-list-tile @click="toCollect()">
          <v-list-tile-action>
            <v-icon/>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>收藏</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>-->
      </v-list>

      <v-list v-else>
        <v-list-tile @click="toLogin()">
          <v-list-tile-action>
            <v-icon/>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>登录</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list>
        <v-divider/>
        <v-list-tile @click="toSearch()">
          <v-list-tile-action>
            <v-icon/>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>搜索</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <!-- <v-list-tile @click="toHistory()">
          <v-list-tile-action>
            <v-icon/>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>历史记录</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>-->
        <v-list-tile @click="test()">
          <v-list-tile-action>
            <v-icon/>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>关于本站</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="darkMode()">
          <v-list-tile-action>
            <v-icon/>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>夜间模式</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="exit()">
          <v-list-tile-action>
            <v-icon/>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>exit</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar dense>
      <v-toolbar-side-icon @click="drawer = !drawer"/>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat @click="toHome()">首页</v-btn>
        <v-btn flat @click="toHistory()">收藏/历史</v-btn>
        <v-btn flat @click="toCategory()">分区</v-btn>
      </v-toolbar-items>
      <v-menu :nudge-width="100" class="hidden-md-and-up">
        <v-toolbar-title slot="activator">
          <span>All</span>
          <v-icon color="black" dark>arrow_drop_down</v-icon>
        </v-toolbar-title>

        <v-list>
          <v-list-tile @click="toHome()">
            <v-list-tile-title>首页</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="toHistory()">
            <v-list-tile-title>收藏/历史</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="toCategory()">
            <v-list-tile-title>分区</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <!-- <v-spacer></v-spacer> -->
      <!-- <v-layout justify-center>
        <v-flex>
        
        </v-flex>
      </v-layout>-->
      <!-- <v-container> -->
      <v-layout justify-end v-if="switch1OnOff">
        <v-switch v-model="$store.state.switch1" label="自动加载" color="red" value="red" hide-details></v-switch>
        <!-- </v-container> -->
      </v-layout>
    </v-toolbar>
    <!-- <v-breadcrumbs
      v-if="this.$vuetify.breakpoint.smAndUp&&this.breadOnOff"
      :items="breads"
      class="justify-center"
    >
      <v-icon slot="divider">forward</v-icon>
    </v-breadcrumbs> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      user: "",
      breads: [
        {
          text: "首页",
          disabled: false,
          href: "/#/"
        },
        {
          text: "Link 1",
          disabled: false,
          href: "/#/comic/" + this.$route.params.comicNo
        },
        {
          text: "Link 2",
          disabled: true,
          href:
            "/#/comicview" +
            this.$route.params.comicNo +
            this.$route.params.chapterNo
        }
      ]
    };
  },
  computed: {
    breadOnOff: function() {
      return this.$route.path.includes("comicview");
    },
    switch1OnOff:function(){
      return this.$route.path.includes("comicview");
    }
  },
  // created() {
  //   this.backgroundStyle = "aside-pic-dark";
  // },
  async created() {
    const {
      status,
      data: { user }
    } = await this.$axios.get("/user/users/getUser");
    if (status === 200) {
      this.user = user;
      this.$store.state.user = user;
      // this.sendComic(this.user);
    }
    // console.log(this.$route.path)
  },
  methods: {
    toHome() {
      this.$router.push("/");
      this.$store.state.showIndexTab = true;
      // this.drawer = !this.drawer;
    },
    toLogin() {
      this.$router.push("/login");
      this.drawer = !this.drawer;
    },
    toSearch() {
      this.$router.push("/search");
      this.drawer = !this.drawer;
    },
    toCollect() {
      this.$router.push("/collect");
      this.drawer = !this.drawer;
    },
    toHistory() {
      this.$router.push("/history");
      // this.drawer = !this.drawer;
    },
    toCategory() {
      this.$router.push("/category");
    },
    async exit() {
      this.drawer = !this.drawer;
      let self = this;
      const { status, data } = await this.$axios.get("/user/users/exit");
      if (status === 200 && data && data.code === 0) {
        this.$router.push("/");
      }
    },
    // sendComic: function(user) {
    //   this.$emit("sendUser", user);
    // },
    darkMode() {
      console.log("1");
      this.$store.state.dark = !this.$store.state.dark;
      // this.dark = !this.dark;
      // if (this.dark) {
      this.backgroundStyle = "aside-pic";
      // } else {
      //   this.backgroundStyle = "aside-pic-dark";
      // }
    }
  },
  watch: {
    dark: function() {
      if (this.dark) {
        console.log("1111");
        this.backgroundStyle = "aside-pic-dark";
      } else {
        this.backgroundStyle = "aside-pic";
      }
    }
  }
};
</script>
<style lang="css">
.v-btn {
  padding: 0px !important;
}
.v-toolbar {
  z-index: 1;
}

.v-input {
  flex: none !important;
}
.v-input--selection-controls {
  padding-top: 0px !important;
}
</style>
