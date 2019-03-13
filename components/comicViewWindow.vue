
      // offsetTop是图片到内容顶部的距离
      // document.body.scrollHeight是内容整体的高度
      // window.screen.availHeight是窗口高度
      // window.pageYOffset是窗口到内容顶部的距离
      // if(window.pageYOffset>document.getElementById())

<template>
  <div class="pr-comicViewWindow">
    <v-layout row justify-center>

      <v-dialog
        v-model="$store.state.chapterBtnDialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        lazy
      >
        <v-card>
          <v-toolbar dark>
            <v-btn icon dark @click.stop="$store.state.chapterBtnDialog= false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>目录</v-toolbar-title>
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
    <!-- {{bookTitle}} -->
    <v-breadcrumbs
      v-if="this.$vuetify.breakpoint.smAndUp&&this.breadOnOff"
      :items="breads"
      class="justify-center"
    >
      <v-icon slot="divider">mdi-forward</v-icon>
    </v-breadcrumbs>
    <Scroll>
      <v-flex slot="scrollBtn" xs12 class="text-xs-center">
        <v-alert
          v-if="prevWarning"
          :value="true"
          color="secondary"
          transition="scale-transition"
        >这已经是第一章啦!</v-alert>
        <!-- <v-card dark color="primary">
        <v-card-text class="px-0">点击加载上一章节</v-card-text>
        </v-card>-->
        <v-btn
          v-else-if="!prevWarning"
          color="secondary"
          @click="chapterPrev"
          block
          :loading="prevLoading"
          :disabled="prevLoading"
        >点击加载上一章节</v-btn>
      </v-flex>
    </Scroll>

    <v-touch @tap="phOnTouch">
      <!-- <v-img
        :class="{'comicImg':$vuetify.breakpoint.smAndUp}"
        v-for="(item,index) in viewList"
        ref="dataNum"
        :key="index"
        :lazy-src="require('../src/assets/imgs/logo.png')"
        :src="item"
      />-->
      <!-- :lazy-src="require('../src/assets/imgs/3c3c3c.png')" -->
      <v-img
        @load="imgOnLoad(item)"
        :class="{'comicImg':$vuetify.breakpoint.smAndUp,'bgDark':$store.state.dark,'bgLight':!$store.state.dark,'borderSwitch':!item.progress}"
        v-for="(item,index) in viewList"
        ref="dataNum"
        :key="index"
        :src="item.imgUrl"
        :lazy-src="$store.state.dark?'require(`../src/assets/imgs/3c3c3c.png`)':'require(`../src/assets/imgs/edecea.png`)'"
      >
        <center :class="item.progress?'middle':'hidden middle'">
          <div :class="$vuetify.breakpoint.smAndUp?'display-4':'display-3'">{{index + 1}}</div>
          <v-progress-circular :indeterminate="item.progress" :size="50" color="orange"></v-progress-circular>
        </center>
      </v-img>
    </v-touch>

    <!-- 测试button -->
    <!-- <button class="testbtn" @click="getData()">{{'comicViewBtnFlag' + this.$store.state.comicViewBtnFlag}}{{'comicViewBtnFlag' + this.$store.state.comicViewBtnFlag}}</button> -->
    <!-- <v-img
      v-for="item in imgList"
      :key="item.id"
      :src="item"
    />-->
    <!-- <v-img :src="require('')" /> -->
    <!-- <v-img :src="require('../assets/imgs/4205.jpg')" /> -->
    <!-- </v-img> -->
    <div class="countPage">{{ this.num+1 }}/{{ this.comicLength }}</div>
    <Scroll>
      <v-flex slot="scrollBtn" xs12 class="text-xs-center" @click="chapterNext">
        <v-alert
          v-if="nextWarning"
          :value="true"
          color="secondary"
          transition="scale-transition"
        >这已经是最新一话啦!</v-alert>
        <!-- <v-card dark color="primary">
        <v-card-text class="px-0">点击加载下一章节</v-card-text>
        </v-card>-->
        <v-btn
          v-else-if="!nextWarning"
          color="secondary"
          block
          :loading="nextLoading"
          :disabled="prevLoading"
        >点击加载下一章节</v-btn>
      </v-flex>
    </Scroll>
    <v-scale-transition>
      <ComicViewBtn
        class="move"
        v-if="this.$store.state.comicViewBtnFlag"
      />
      <!-- &&this.newHistory -->
      <!-- :newHistory="this.newHistory" -->
      <!-- @toNext="chapterNext" -->
        <!-- @toPrev="chapterPrev" -->
    </v-scale-transition>
  </div>
</template>

<script>
import ChapterList from "@/chapterList.vue";
import Scroll from "@/scroll.vue";
import ComicViewBtn from "@/comicViewBtn.vue";
import { setTimeout } from "timers";
export default {
  components: { ComicViewBtn, Scroll,ChapterList },
  data() {
    return {
      content: "",
      show: false,
      tipFlag: true,
      btnFlag: true,
      // imgList: [
      //   { url: require('../assets/imgs/4205.jpg') },
      //   { url: require('../assets/imgs/4205.jpg') },
      //   { url: require('../assets/imgs/4205.jpg') },
      //   { url: require('../assets/imgs/4205.jpg') },
      //   { url: require('../assets/imgs/4205.jpg') },
      //   { url: require('../assets/imgs/4205.jpg') },
      //   { url: require('../assets/imgs/4205.jpg') },
      //   { url: require('../assets/imgs/4205.jpg') },
      //   { url: require('../assets/imgs/4205.jpg') },
      //   { url: require('../assets/imgs/4205.jpg') },
      //   { url: require('../assets/imgs/4205.jpg') },
      //   { url: require('../assets/imgs/4205.jpg') }
      // ],z
      lazyNextNum: 0,
      getImgData: "",
      flag: true,
      breads: [
        {
          text: "首页",
          disabled: false,
          href: "/"
        },
        {
          text: this.lazyNextNum,
          disabled: false,
          href: "/comic/" + this.$route.params.comicNo
        },
        {
          text: this.chapterName,
          disabled: true,
          href:
            "/comicview" +
            this.$route.params.comicNo +
            this.$route.params.chapterNo
        }
      ],
      bookAuthor: "",
      bookImg: "",
      bookTitle: "",
      bookYear: "",
      bookStatus: "",
      bookUpdataNum: "",
      bookUpdateTime: "",
      bookCountry: "",
      newHistory: ""
      // comicBookTitle:'',
      // comicChapterName:''
    };
  },
  layout: "blank",
  // watch: {
  //   bookTitle: function() {
  //     this.$set(this.breads[1],'text',111);
  //   }
  // },
  computed: {
    dark: function() {
      return this.$store.state.dark;
    },
    // color:function(){
    //   if(!this.$store.state.dark) {
    //     let white1 = document.getElementsByClassName('v-breadcrumbs__item')
    //     white1.setAttribute('style',"color:#fff !important")
    //     return 'justify-center'
    //   } else {
    //     let black1 = document.getElementsByClassName('v-breadcrumbs__item')
    //     black1.setAttribute('style',"color:#424242 !important")
    //     return 'justify-center'
    //   }
    // },
    imgList: function() {
      return this.content.comicViewImg || "";
    },
    comicLength: function() {
      return this.content.comicViewFc;
    },
    breadOnOff: function() {
      return this.$route.path.includes("comicview");
    },
    switch1: function() {
      return this.$store.state.switch1;
    },
    prevWarning: function() {
      if (this.chapterNoDelZero == 1) {
        return true;
      } else {
        return false;
      }
    },
    nextWarning: function() {
      if (this.chapterNoDelZero == this.chapterList.length) {
        return true;
      } else {
        return false;
      }
    },

    prevLoading: function() {
      return this.$store.state.prevLoading;
    },
    nextLoading: function() {
      return this.$store.state.nextLoading;
    },
    viewList: function() {
      // if()
      return this.imgList.slice(0, this.page);
    },
    chapterList: function() {
      // let dataNo = this.$route.params.chapterNo.match(/(.*?)\//)[1];
      let dataNo = this.$route.params.comicNo;
      let storage = window.localStorage;
      let str = storage.getItem("chapterListNo" + dataNo);
      let chapterList = JSON.parse(str);
      return chapterList;
    },
    chapterNoDelZero: function() {
      return Number(this.$route.params.chapterNo.replace(/\b(0+)/gi, ""));
    },
    page: function() {
      return this.$store.state.page;
    },
    num: function() {
      return this.$store.state.num;
    }
    // xx: function() {
    //   this.num = document.getElementById('1').offsetTop
    // }
    // imageHeight () {
    //   switch (this.$vuetify.breakpoint.name) {
    //     case 'xs': return
    //     case 'sm': return '400px'
    //     case 'md': return '500px'
    //     case 'lg': return '600px'
    //     case 'xl': return '800px'
    //   }
    // }
  },
  watch: {
    dark: function() {
      if (!this.dark) {
        let white1 = document
          .getElementsByClassName("v-breadcrumbs__item")[0]
          .setAttribute("style", "color:#424242 !important");
        let white2 = document
          .getElementsByClassName("v-breadcrumbs__item")[1]
          .setAttribute("style", "color:#424242 !important");
      } else {
        let black1 = document
          .getElementsByClassName("v-breadcrumbs__item")[0]
          .setAttribute("style", "color:#fff !important");
        let black2 = document
          .getElementsByClassName("v-breadcrumbs__item")[1]
          .setAttribute("style", "color:#fff !important");
      }
    },
    $route: async function() {
      this.content = "";
      this.$store.state.page = 7;
      let url =
        "/api" +
        this.$route.params.comicNo +
        "/" +
        this.$route.params.chapterNo +
        ".html";
      let data = await this.getImg(url);
      this.content = data;
      // this.imgList = data.comicViewImg;
      // this.comicLength = data.comicViewFc;
      this.setHistory(data);
      this.$store.state.prevLoading = false;
      this.$store.state.nextLoading = false;
    },
    switch1: function() {
      console.log("变化为" + this.switch1);
      if (this.switch1) {
        window.addEventListener("scroll", this.autoPull);
      } else {
        window.removeEventListener("scroll", this.autoPull);
      }
    }
  },

  mounted() {
    let black1 = document.getElementsByClassName("v-breadcrumbs__item")[0];
    if (black1) {
      black1.setAttribute("style", "color:#424242 !important");
    }
    console.log("这是comicview页面过来的");
    if (this.switch1) {
      window.addEventListener("scroll", this.autoPull);
    }
    // if (this.$route.path.includes("comicview")) {
    window.addEventListener("scroll", this.pull);
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
      /*手机端*/
      // window.addEventListener("touchstart", this.phOnTouch);
    } else {
      /*电脑端*/
      window.addEventListener("scroll", this.pcOnScroll);
    }

    // }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.pcOnScroll);
    window.removeEventListener("scroll", this.pull);
    window.removeEventListener("scroll", this.autoPull);
  },
  // beforeCreate() {
  //   let storage = window.localStorage;
  //   let oldHistory = JSON.parse(storage.getItem("history"));
  //   if (!oldHistory) {
  //     console.log("oldHistory");
  //     this.$router.push("/");
  //     return false;
  //   }
  // },
  async created() {
    console.log(
      navigator.connection ||
        navigator.mozConnection ||
        navigator.webkitConnection
    );
    this.$store.state.page = 7;
    // this.$store.state.chapterBtnDialog = false;
    window.scrollTo(0, 0);
    console.log("1");
    let url =
      "/api" +
      this.$route.params.comicNo +
      "/" +
      this.$route.params.chapterNo +
      ".html";
    let data = await this.getImg(url);
    this.content = data;
    this.setHistory(data);
    let black1 = document.getElementsByClassName("v-breadcrumbs__item")[0];
    if (black1) {
      black1.setAttribute("style", "color:#424242 !important");
    }
    let black2 = document.getElementsByClassName("v-breadcrumbs__item")[1];
    if (black2) {
      black2.setAttribute("style", "color:#424242 !important");
    }
  },
  methods: {
    async pull() {
      var imgDoms = this.$refs.dataNum;

      this.$nextTick(function() {
        // console.log(
        //   "窗口高度" + window.screen.availHeight + window.pageYOffset
        // );
        // console.log(
        //   "图片底部高度" +
        //     imgDoms[this.num].$el.offsetTop+imgDoms[this.num].$el.clientHeight
        // );
        console.log(this.num);
        console.log(window.screen.availHeight + window.pageYOffset);
        console.log(imgDoms[3].$el.offsetTop + imgDoms[3].$el.clientHeight);
        if (this.num < this.imgList.length - 1) {
          if (
            window.screen.availHeight + window.pageYOffset >
            imgDoms[this.num].$el.offsetTop + imgDoms[this.num].$el.clientHeight
          ) {
            this.$store.state.num++;
          }
        }

        // if (this.num  1) {
        if (this.num > 0) {
          if (
            window.screen.availHeight + window.pageYOffset <
            imgDoms[this.num].$el.offsetTop + imgDoms[this.num].$el.clientHeight
          ) {
            this.$store.state.num--;
          }
        }
        // }

        // if (
        //   window.pageYOffset >
        //   imgDoms[this.num].$el.offsetTop +
        //     imgDoms[this.num].$el.offsetHeight / 2
        // ) {
        //   this.$store.state.num++;
        // }
        // if (
        //   window.pageYOffset <
        //   imgDoms[this.num].$el.offsetTop -
        //     imgDoms[this.num].$el.offsetHeight / 2
        // ) {
        //   this.$store.state.num--;
        // }

        //懒加载图片 旧:测试了一下,不合适
        // if (window.pageYOffset > (document.body.scrollHeight * 3) / 5) {
        //   // if (this.num !== this.comicLength) {
        //   this.$store.state.page += 7;
        //   // }
        // }

        if (this.num + 1 == this.$store.state.page - 2) {
          // if (this.num !== this.comicLength) {
          this.$store.state.page += 7;
          // }
        }
      });
      // console.log(imgDoms[this.num].$el.offsetTop)
      // console.log(imgDoms[this.num].$el.offsetHeight)
      // console.log(imgDoms[2].$el.offsetHeight)
      // console.log(imgDoms[2].$el.offsetTop)
      // console.log(imgDoms[this.num])

      // console.log(imgDoms[0])
      // for (var imgDom of imgDoms) {
      // if (window.pageYOffset > imgDom.$el.offsetTop) {
      //   this.num++
      //   console.log(window.pageYOffset)
      //   console.log(imgDom.offsetTop)
      // }
      //   console.log(imgDom.$el.offsetTop)
      // }
      // }
      // for (var i = 0; i < imgDoms.length; i++) {
      //   if (window.pageYOffset > imgDoms[i].$el.offsetTop) {
      //     this.num++
      //     console.log(imgDoms[i].$el.offsetTop)
      //   }
      // }
      // var scrollTop =
      //   document.documentElement.scrollTop ||
      //   window.pageYOffset ||
      //   document.body.scrollTop;
      // console.log(scrollTop);
      // if (
      //   document.documentElement.scrollHeight ==
      //   document.documentElement.clientHeight + scrollTop
      // ) {
      //   alert("到底部啦");
      // }
      // console.log(document.body.scrollTop + document.body.clientHeight)
      // console.log(document.body.scrollHeight)
      // if (
      //   document.body.scrollTop + window.screen.availHeight ==
      //   document.body.scrollHeight
      // ) {
    },
    async autoPull() {
      // if (this.num + 1 > (this.comicLength * 9) / 10) {
      if (this.num + 1 == this.comicLength) {
        if (this.flag) {
          this.flag = false;
          this.lazyNextNum++;
          let chapterNo = (
            Number(this.$route.params.chapterNo) + this.lazyNextNum
          ).toString();
          console.log("chapter" + chapterNo);
          console.log("listLength" + this.chapterList.length);
          if (this.chapterList.length + 1 == chapterNo) {
            // alert("到底啦");
            return false;
          }
          console.log("chapter2222" + chapterNo);
          let url =
            "/api" +
            this.$route.params.comicNo +
            "/" +
            "0" +
            chapterNo +
            ".html";
          let data = await this.getImg(url);
          console.log(data);
          this.setHistory(data);
          for (var i = 0; i < data.comicViewImg.length; i++) {
            this.content.comicViewImg.push(data.comicViewImg[i]);
          }
          this.content.comicViewFc =
            Number(this.comicLength) + Number(data.comicViewFc);
          this.flag = true;
        }
      }
    },
    async getImg(url) {
      // console.log(this.$route.params.chapterNo);
      this.$store.state.dataLoading = true;
      let data = await this.$spider({
        url: url,
        type: "comicView"
      });
      data.comicViewImg = data.comicViewImg.map(function(item) {
        let imgAndProgress = {};
        imgAndProgress.imgUrl = item;
        imgAndProgress.progress = true;
        return imgAndProgress;
      });
      this.$store.state.dataLoading = false;
      this.$set(this.breads[1], "text", data.bookTitle);
      this.$set(this.breads[2], "text", data.chapterName);
      // alert(this.bookTitle);
      // console.log("这是data" + data);
      return new Promise(resolve => {
        resolve(data);
      });
    },
    setHistory(data) {
      console.log("comicViewWindow");
      // let localBookTitle = data.bookTitle;
      // let localChapterName = data.chapterName;
      // let localImgList = data.comicViewImg;
      // let localComicLength = data.comicViewFc;
      let storage = window.localStorage;
      let content = [];
      let oldHistory = JSON.parse(storage.getItem("history"));
      console.log("老数据" + oldHistory[0]);
      // console.log("oldHistory" + oldHistory[0].item.id);

      if (oldHistory != null) {
        for (var i = 0; i < oldHistory.length; i++) {
          //去除与newHistory重复的数据
          if (oldHistory[i].item.id == this.$route.params.comicNo) {
            (this.bookAuthor = oldHistory[i].comicDetail.bookAuthor),
              (this.bookImg = oldHistory[i].comicDetail.bookImg),
              (this.bookTitle = oldHistory[i].comicDetail.bookTitle),
              (this.bookYear = oldHistory[i].comicDetail.bookYear),
              (this.bookStatus = oldHistory[i].comicDetail.bookStatus),
              (this.bookUpdataNum = oldHistory[i].comicDetail.bookUpdataNum),
              (this.bookUpdateTime = oldHistory[i].comicDetail.bookUpdateTime),
              (this.bookCountry = oldHistory[i].comicDetail.bookCountry);
          }
          // console.log(oldHistory[i].item.id);
        }
      }
      console.log("id" + this.$route.params.comicNo);
      console.log(oldHistory[0].item.id);
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
      this.newHistory = {
        item: {
          id: this.$route.params.comicNo,
          bookTitle: data.bookTitle,
          chapterName: data.chapterName,
          chapterNo:
            "0" + (Number(this.$route.params.chapterNo) + this.lazyNextNum),
          readTime: readTime()
          // bookImg: this.comicDetail.bookImg
        },
        comicDetail: {
          bookAuthor: this.bookAuthor,
          bookImg: this.bookImg,
          bookTitle: this.bookTitle,
          bookYear: this.bookYear,
          bookStatus: this.bookStatus,
          bookUpdataNum: this.bookUpdataNum,
          bookUpdateTime: this.bookUpdateTime,
          bookCountry: this.bookCountry
        }
      };
      // console.log(oldHistory)
      if (oldHistory != null) {
        //遍历oldHistory数组,再把oldHistory Push进去新数组
        for (var i = 0; i < oldHistory.length; i++) {
          //去除与newHistory重复的数据
          if (oldHistory[i].item.id != this.newHistory.item.id) {
            content.push(oldHistory[i]);
          }
          // console.log(oldHistory[i].item.id);
        }
        //增加newHistory点击的数据
        content.push(this.newHistory);
      } else {
        content.push(this.newHistory);
      }
      console.log("content" + content);
      storage.setItem("history", JSON.stringify(content));
      // this.imgList = comicContent.data.data.comicViewImg;
      // console.log(this.imgList);
      // this.$store.commit('setComicContent', comicContent.data.data)

      // this.bookImg = searchResult.data.data.bookImg
      // this.bookTitle = searchResult.data.data.bookTitle
      // this.bookAuthor = searchResult.data.data.bookAuthor
      // this.bookYear = searchResult.data.data.bookYear
    },
    chapterPrev() {
      //在sessionStorage中获取chaperList
      // let dataNo = this.$route.query.chapterNo.match(/(.*?)\//)[1]
      // let str = sessionStorage.getItem(dataNo)
      // let chapterList = JSON.parse(str)
      // console.log(this.chapterList[this.$route.query.listItemNum].chapterNo)
      // console.log(this.$store.state.comicChapter)

      //重置计页数和页面高度
      if (this.chapterNoDelZero == 1) {
        // this.showTips();
        return false;
      }
      this.$store.state.prevLoading = true;
      this.$store.state.num = 0;
      // window.scrollTo(0, 0);
      // window.location.reload();
      // console.log(this.chapterList)
      // console.log(this.chapterNoDelZero);
      // let lazyNextNum = this.lazyNextNum; //在跳转之前记录累计自动加载了多少话,清空this.lazyNextNum
      this.lazyNextNum = 0;
      this.$router.push({
        path:
          "/comicview" +
          "/" +
          this.$route.params.comicNo +
          "/" +
          this.chapterList[this.chapterNoDelZero - 2].chapterNo
        // this.chapterList[this.chapterNoDelZero - 2 - lazyNextNum].chapterNo
        // query: {
        //   chapterNo: this.chapterList[this.$route.params.chapterNo.replace(/\b(0+)/gi, "") - 1]
        //     .chapterNo,
        //   listItemNum: this.$route.query.listItemNum - 1
        // }
      });
      // this.getImg()
    },
    chapterNext() {
      let self = this;
      if (this.chapterNoDelZero == this.chapterList.length) {
        // this.showTips();
        return false;
      }
      this.$store.state.nextLoading = true;
      this.$store.state.num = 0;
      // window.scrollTo(0, 0);
      // this.lazyNextNum = 0;****
      // window.location.reload();
      setTimeout(function() {
        let lazyNextNum = self.lazyNextNum; //在跳转之前记录累计自动加载了多少话,清空this.lazyNextNum
        self.lazyNextNum = 0;
        self.$router.push({
          path:
            "/comicview" +
            "/" +
            self.$route.params.comicNo +
            "/" +
            self.chapterList[self.chapterNoDelZero + lazyNextNum].chapterNo
        });
      }, 2000);
    },
    getData() {
      // let dataNo = this.$route.query.url.match(/\/(.*?)\/.*?.html/)[1]
      // let str = sessionStorage.getItem(dataNo)
      // let chapterList = JSON.parse(str)
      const userId = "123";
      this.router.push({ path: `/home/${userId}` });
      // console.log(this.$route.query.chapterNo)
    },
    // lazyNextChapter: function() {
    //   if (this.num + 1 > (this.comicLength * 2) / 3) {
    //     if(this.flag){
    //       this.flag = false
    //       this.lazyNextNum++;
    //     let url =
    //       "/api" +
    //       this.$route.params.comicNo +
    //       "/" +
    //       (this.$route.params.chapterNo + this.lazyNextNum) +
    //       ".html";
    //     let data = this.getImg(url);
    //     this.setHistory(data);
    //     this.imgList.append(data.comicViewImg);
    //     this.comicLength = this.comicLength + data.comicViewFc;
    //     this.flag = true
    //     }

    //   }
    // }
    showTips() {
      if (this.tipFlag === true) {
        this.tipFlag = false;
        this.show = !this.show;
        clearTimeout(timer);
        let timer = setTimeout(() => {
          this.show = !this.show;
          this.tipFlag = true;
        }, 2000);
      }
    },
    pcOnScroll() {
      let self = this;
      if (this.offsetTop) {
        if (this.btnFlag) {
          if (this.offsetTop - window.pageYOffset < 0) {
            this.btnFlag = false;
            self.$store.state.fab = false;
            setTimeout(function() {
              self.$store.state.comicViewBtnFlag = false;
              self.btnFlag = true;
            }, 300);

            console.log("下滑");
          } else {
            this.$store.state.comicViewBtnFlag = true;

            console.log("上滑");
          }
        }
      }
      this.offsetTop = window.pageYOffset;
    },
    phOnTouch() {
      // e.stopPropagation();
      // e.preventDefault();
      // console.log(e.type);

      // alert('ddd')
      let self = this;
      if (this.btnFlag) {
        if (this.$store.state.comicViewBtnFlag) {
          this.btnFlag = false;
          self.$store.state.fab = false;
          setTimeout(function() {
            self.btnFlag = true;
            self.$store.state.comicViewBtnFlag = false;
          }, 300);

          console.log("下滑");
        } else {
          this.$store.state.comicViewBtnFlag = true;

          console.log("上滑");
        }
      }
    },
    imgOnLoad(item) {
      item.progress = false;
    }
  }
};
</script>
<style scoped>
.testbtn {
  width: 10px;
  height: 10px;
  position: fixed;
  z-index: 20;
  bottom: 200px;
  left: 50px;
  color:red
}

.countPage {
  position: fixed;
  z-index: 1;
  height: 1.3rem;
  width: 4rem;
  color: white;
  text-align: center;
  background-color: black;
  right: 0;
  bottom: 0;
}

.comicImg {
  margin: 10px auto 40px;
  box-shadow: 1px 1px 6px 0px #333 !important;
}

/* .pr-comicViewWindow{
  margin-top:50px
} */
.move {
  /* right:0rem !important; */
  bottom: 2rem !important;
}

.v-breadcrumbs {
  color: black;
}

.hidden {
  display: none;
}

.middle {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.bgDark {
  background-color: #3c3c3c;
  border: #fff solid 1px;
}

.bgLight {
  background-color: #edecea;
  border: #d5d4d3 solid 1px;
}

.borderSwitch {
  border: 0px !important;
}
/* .pr-comicViewWindow{
  background-color: #edecea;
} */
/* .v-breadcrumbs__item {
  color: black !important;
} */

/* .white1{
  color:black !important;
}

.black1{
  color:black !important;
} */
</style>
