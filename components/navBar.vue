<template>
  <div class="pr-navbar">
    <v-navigation-drawer v-model="drawer" app temporary dense>
      <v-list>
        <v-list-tile v-if="this.user">
          <v-list-tile-action>
            <v-icon/>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ this.user }}</v-list-tile-title>
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
        <v-list-tile v-else @click="toLogin()">
          <v-list-tile-action>
            <v-icon/>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>登录</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-divider/>
        <v-list-tile @click="toSearch()">
          <v-list-tile-action>
            <v-icon/>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>搜索</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-divider/>
        <v-list-tile @click="toAbout()">
          <v-list-tile-action>
            <v-icon/>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>关于本站</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="toDevLop()">
          <v-list-tile-action>
            <v-icon/>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>开发日志</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider/>
        <v-list-tile @click="darkMode()">
          <v-list-tile-action>
            <v-icon/>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-if="this.$store.state.dark">日间模式</v-list-tile-title>
            <v-list-tile-title v-else>夜间模式</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider/>
        <v-list-tile v-if="user" @click="exit()">
          <v-list-tile-action>
            <v-icon/>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>退出</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar color="#424242" dense>
      <v-toolbar-side-icon @click="drawer = !drawer"/>
      <v-btn flat @click="toHome()">
        <v-toolbar-title class="title">PRPRPR</v-toolbar-title>
      </v-btn>
      <!-- <VBtn
        class="toolbar-item"
        flat
        dark
        @click.stop="toHomepage"
      >
        <VToolbarTitle class="toolbar-title"><img
            class="logo"
            src="../../../public/img/icons/android-chrome-192x192.png"
          >
          BiliOB观测者</VToolbarTitle>
      </VBtn>-->
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat @click="toHome()">
          <v-icon>home</v-icon>首页
        </v-btn>
        <v-btn flat @click="toHistory()">
          <v-icon>history</v-icon>收藏/历史
        </v-btn>
        <v-btn flat @click="toCategory()">
          <v-icon>category</v-icon>分区
        </v-btn>
      </v-toolbar-items>
      <v-menu :nudge-width="100" class="hidden-md-and-up">
        <v-toolbar-title slot="activator">
          <span>导航</span>
          <v-icon>arrow_drop_down</v-icon>
        </v-toolbar-title>

        <v-list>
          <v-list-tile @click="toHome()">
            <v-icon>home</v-icon>
            <v-list-tile-title>首页</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="toHistory()">
            <v-icon>history</v-icon>
            <v-list-tile-title>收藏/历史</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="toCategory()">
            <v-icon>category</v-icon>
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
        <VIcon style="vertical-align: middle">format_line_spacing</VIcon>
        <v-switch v-model="$store.state.switch1" color="red" value="red" hide-details></v-switch>
        <!-- </v-container> -->
      </v-layout>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
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
    switch1OnOff: function() {
      return this.$route.path.includes("comicview");
    },
    user: function() {
      return this.$store.state.user;
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
    toDevLop() {
      this.$router.push("/devlop");
    },
    toAbout() {
      this.$router.push("/about");
    },
    async exit() {
      this.drawer = !this.drawer;
      let self = this;
      const { status, data } = await this.$axios.get("/user/users/exit");
      if (status === 200 && data && data.code === 0) {
        this.$store.state.user = "";
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
<style lang="css" scoped>
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
  /* padding-bottom: 1rem !important; */
}

.v-breadcrumbs__item {
  color: #424242;
}
</style>
