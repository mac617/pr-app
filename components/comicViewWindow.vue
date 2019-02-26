
      // offsetTop是图片到内容顶部的距离
      // document.body.scrollHeight是内容整体的高度
      // window.screen.availHeight是窗口高度
      // window.pageYOffset是窗口到内容顶部的距离
      // if(window.pageYOffset>document.getElementById())

<template>
  <div class="pr-comicViewWindow">
    <!-- {{bookTitle}} -->
    <v-breadcrumbs
      v-if="this.$vuetify.breakpoint.smAndUp&&this.breadOnOff"
      :items="breads"
      class="justify-center"
    >
      <v-icon slot="divider">forward</v-icon>
    </v-breadcrumbs>
    <Scroll>
      <v-flex slot="scrollBtn" xs12 class="text-xs-center" @click="chapterPrev">
        <v-alert
          v-if="prevWarning"
          :value="true"
          color="warning"
          transition="scale-transition"
        >这已经是第一章啦!</v-alert>
        <!-- <v-card dark color="primary">
        <v-card-text class="px-0">点击加载上一章节</v-card-text>
        </v-card>-->
        <v-btn
          v-else-if="!prevWarning"
          color="secondary"
          block
          :loading="prevLoading"
          :disabled="prevLoading"
        >点击加载上一章节</v-btn>
      </v-flex>
    </Scroll>

    <v-touch @tap="phOnTouch">
      <v-img
        :class="{'comicImg':$vuetify.breakpoint.smAndUp}"
        v-for="(item,index) in viewList"
        ref="dataNum"
        :key="index"
        :lazy-src="require('../src/assets/imgs/logo.png')"
        :src="item"
      />
    </v-touch>

    <button class="testbtn" @click="getData()">{{this.chapterNoDelZero}}</button>
    <!-- <v-img
      v-for="item in imgList"
      :key="item.id"
      :src="item"
    />-->
    <!-- <v-img :src="require('')" /> -->
    <!-- <v-img :src="require('../assets/imgs/4205.jpg')" /> -->
    <!-- </v-img> -->
    <div class="countPage">{{ this.num+1 }}/{{ comicLength }}</div>
    <Scroll>
      <v-flex slot="scrollBtn" xs12 class="text-xs-center" @click="chapterNext">
        <v-alert
          v-if="nextWarning"
          :value="true"
          color="warning"
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
        v-if="this.$store.state.comicViewBtnFlag"
        @toNext="chapterNext"
        @toPrev="chapterPrev"
      />
    </v-scale-transition>
  </div>
</template>

<script>
import Scroll from "@/scroll.vue";
import ComicViewBtn from "@/comicViewBtn.vue";
import { setTimeout } from "timers";
export default {
  components: { ComicViewBtn, Scroll },
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
      bookImg: "",
      lazyNextNum: 0,
      getImgData: "",
      flag: true,
      breads: [
        {
          text: "首页",
          disabled: false,
          href: "/#/"
        },
        {
          text: this.lazyNextNum,
          disabled: false,
          href: "/#/comic/" + this.$route.params.comicNo
        },
        {
          text: this.chapterName,
          disabled: true,
          href:
            "/#/comicview" +
            this.$route.params.comicNo +
            this.$route.params.chapterNo
        }
      ]
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
    imgList: function() {
      return this.content.comicViewImg || "";
    },
    comicLength: function() {
      return this.content.comicViewFc;
    },
    bookTitle: function() {
      return this.content.bookTitle;
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
    // let imgDom = this.$refs.dataNum
    // console.log(this.$route);
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

  async created() {
    window.scrollTo(0, 0)
    console.log("1");
    let url =
      "/api" +
      this.$route.params.comicNo +
      "/" +
      this.$route.params.chapterNo +
      ".html";
    let data = await this.getImg(url);
    // this.bookTitle = data.bookTitle;
    // this.chapterName = data.chapterName;
    this.content = data;
    this.setHistory(data);
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

        //懒加载图片
        if (window.pageYOffset > (document.body.scrollHeight * 3) / 5) {
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
            alert("到底啦");
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
            this.imgList.push(data.comicViewImg[i]);
          }
          this.comicLength =
            Number(this.comicLength) + Number(data.comicViewFc);
          this.flag = true;
        }
      }
    },
    async getImg(url) {
      // console.log(this.$route.params.chapterNo);
      let data = await this.$spider({
        url: url,
        type: "comicView"
      });
      this.$set(this.breads[1],'text',data.bookTitle);
      this.$set(this.breads[2],'text',data.chapterName);
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
            // this.bookAuthor= oldHistory[i].comicDetail.bookImg,
            this.bookImg = oldHistory[i].comicDetail.bookImg;
            // this.bookTitle= oldHistory[i].comicDetail.bookImg,
            // this.bookYear= oldHistory[i].comicDetail.bookImg,
            // this.bookStatus= oldHistory[i].comicDetail.bookImg,
            // this.bookUpdataNum= oldHistory[i].comicDetail.bookImg,
            // this.bookUpdateTime= oldHistory[i].comicDetail.bookImg,
            // this.bookCountry= oldHistory[i].comicDetail.bookImg,
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
      let newHistory = {
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
          // bookAuthor: this.comicDetail.author,
          bookImg: this.bookImg
          // bookTitle: this.comicDetail.bookTitle,
          // bookYear: this.comicDetail.year,
          // bookStatus: this.comicDetail.status,
          // bookUpdataNum: this.comicDetail.updateNum,
          // bookUpdateTime: this.comicDetail.updateTime,
          // bookCountry: this.comicDetail.country
        }
      };
      // console.log(oldHistory)
      if (oldHistory != null) {
        //遍历oldHistory数组,再把oldHistory Push进去新数组
        for (var i = 0; i < oldHistory.length; i++) {
          //去除与newHistory重复的数据
          if (oldHistory[i].item.id != newHistory.item.id) {
            content.push(oldHistory[i]);
          }
          // console.log(oldHistory[i].item.id);
        }
        //增加newHistory点击的数据
        content.push(newHistory);
      } else {
        content.push(newHistory);
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
      this.lazyNextNum = 0;
      // window.location.reload();
      // console.log(this.chapterList)
      // console.log(this.chapterNoDelZero);
      this.$router.push({
        path:
          "/comicview" +
          "/" +
          this.$route.params.comicNo +
          "/" +
          this.chapterList[this.chapterNoDelZero - 2 - this.lazyNextNum]
            .chapterNo
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
      this.lazyNextNum = 0;
      // window.location.reload();
      setTimeout(function() {
        self.$router.push({
          path:
            "/comicview" +
            "/" +
            self.$route.params.comicNo +
            "/" +
            self.chapterList[self.chapterNoDelZero + self.lazyNextNum].chapterNo
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
</style>
