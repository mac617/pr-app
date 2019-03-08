<template>
  <!-- <v-container fluid>
        <v-layout row wrap justify-center>
  <v-flex lg10 xs11>-->
  <div class="prCategorySelect">
    <v-layout row wrap justify-center>
      <v-flex lg4 xs4>
        <!-- {{coutry}} -->
        <v-select
          v-model="coutry"
          :items="coutryList"
          item-text="state"
          item-value="abbr"
          return-object
          color="orange"
          solo
          label="地区"
        ></v-select>
      </v-flex>

      <v-flex lg4 xs4>
        <!-- {{category}} -->
        <v-select
          v-model="category"
          :items="categoryList"
          item-text="state"
          item-value="abbr"
          color="orange"
          return-object
          solo
          label="剧情"
        ></v-select>
      </v-flex>

      <v-flex lg4 xs4>
        <!-- {{year}} -->
        <v-select
          v-model="year"
          :items="yearList"
          item-text="state"
          item-value="abbr"
          color="orange"
          return-object
          solo
          label="年份"
        ></v-select>
      </v-flex>

      <v-flex lg4 xs4>
        <!-- {{letter}} -->
        <v-select
          v-model="letter"
          :items="letterList"
          item-text="state"
          item-value="abbr"
          color="orange"
          return-object
          solo
          label="字母"
        ></v-select>
      </v-flex>

      <v-flex lg4 xs4>
        <!-- {{status}} -->
        <v-select
          v-model="status"
          :items="statusList"
          item-text="state"
          item-value="abbr"
          return-object
          color="orange"
          solo
          label="进度"
        ></v-select>
      </v-flex>

      <v-flex lg4 xs4>
        <!-- {{order}} -->
        <v-select
          v-model="order"
          :items="orderList"
          item-text="state"
          item-value="abbr"
          return-object
          color="orange"
          solo
          label="排序"
        ></v-select>
      </v-flex>
    </v-layout>
  </div>
  <!-- </v-card>
          </v-flex>
        </v-layout>
  </v-container>-->
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      content: "",
      coutry: { state: "地区", abbr: "area--" },
      coutryList: [
        { state: "地区", abbr: "area--" },
        { state: "日本", abbr: "area-日本-" },
        { state: "港台", abbr: "area-港台-" },
        { state: "欧美", abbr: "area-欧美-" },
        { state: "韩国", abbr: "area-韩国-" },
        { state: "国产", abbr: "area-国产-" },
        { state: "其它", abbr: "area-其它-" }
      ],
      category: { state: "剧情", abbr: "smid--" },
      categoryList: [
        { state: "剧情", abbr: "smid--" },
        { state: "热血", abbr: "smid-1-" },
        { state: "武侠", abbr: "smid-2-" },
        { state: "搞笑", abbr: "smid-3-" },
        { state: "耽美", abbr: "smid-4-" },
        { state: "爱情", abbr: "smid-5-" },
        { state: "科幻", abbr: "smid-6-" },
        { state: "魔法", abbr: "smid-7-" },
        { state: "神魔", abbr: "smid-8-" },
        { state: "竞技", abbr: "smid-9-" },
        { state: "格斗", abbr: "smid-10-" },
        { state: "机战", abbr: "smid-11-" },
        { state: "体育", abbr: "smid-12-" },
        { state: "运动", abbr: "smid-13-" },
        { state: "校园", abbr: "smid-14-" },
        { state: "励志", abbr: "smid-15-" },
        { state: "历史", abbr: "smid-16-" },
        { state: "伪娘", abbr: "smid-17-" },
        { state: "百合", abbr: "smid-18-" },
        { state: "后宫", abbr: "smid-19-" },
        { state: "治愈", abbr: "smid-20-" },
        { state: "美食", abbr: "smid-21-" },
        { state: "推理", abbr: "smid-22-" },
        { state: "悬疑", abbr: "smid-23-" },
        { state: "恐怖", abbr: "smid-24-" },
        { state: "职场", abbr: "smid-25-" },
        { state: "BL", abbr: "smid-26-" },
        { state: "剧情", abbr: "smid-27-" },
        { state: "生活", abbr: "smid-28-" },
        { state: "幻想", abbr: "smid-29-" },
        { state: "战争", abbr: "smid-30-" },
        { state: "仙侠", abbr: "smid-33-" },
        { state: "性转换", abbr: "smid-40-" },
        { state: "冒险", abbr: "smid-33-" },
        { state: "其他", abbr: "smid-34-" }
      ],
      year: { state: "年份", abbr: "year--" },
      yearList: [
        { state: "年份", abbr: "year--" },
        { state: "2018", abbr: "year-2018-" },
        { state: "2017", abbr: "year-2017-" },
        { state: "2016", abbr: "year-2016-" },
        { state: "2015", abbr: "year-2015-" },
        { state: "2014", abbr: "year-2014-" },
        { state: "2013", abbr: "year-2013-" },
        { state: "2012", abbr: "year-2012-" },
        { state: "2011", abbr: "year-2011-" },
        { state: "2010", abbr: "year-2010-" },
        { state: "2009", abbr: "year-2009-" },
        { state: "2008", abbr: "year-2008-" },
        { state: "2007", abbr: "year-2007-" },
        { state: "2006", abbr: "year-2006-" },
        { state: "2005", abbr: "year-2005-" },
        { state: "2004", abbr: "year-2004-" },
        { state: "2003", abbr: "year-2003-" },
        { state: "2002", abbr: "year-2002-" },
        { state: "2001", abbr: "year-2001-" },
        { state: "2000", abbr: "year-2000-" },
        { state: "1990", abbr: "year-1990-" }
      ],
      letter: { state: "字母", abbr: "letter--" },
      letterList: [
        { state: "字母", abbr: "letter--" },
        { state: "A", abbr: "letter-A-" },
        { state: "B", abbr: "letter-B-" },
        { state: "C", abbr: "letter-C-" },
        { state: "D", abbr: "letter-D-" },
        { state: "E", abbr: "letter-E-" },
        { state: "F", abbr: "letter-F-" },
        { state: "G", abbr: "letter-G-" },
        { state: "H", abbr: "letter-H-" },
        { state: "I", abbr: "letter-I-" },
        { state: "J", abbr: "letter-J-" },
        { state: "K", abbr: "letter-K-" },
        { state: "L", abbr: "letter-L-" },
        { state: "M", abbr: "letter-M-" },
        { state: "N", abbr: "letter-N-" },
        { state: "O", abbr: "letter-O-" },
        { state: "P", abbr: "letter-P-" },
        { state: "Q", abbr: "letter-Q-" },
        { state: "R", abbr: "letter-R-" },
        { state: "S", abbr: "letter-S-" },
        { state: "T", abbr: "letter-T-" },
        { state: "U", abbr: "letter-U-" },
        { state: "V", abbr: "letter-V-" },
        { state: "W", abbr: "letter-W-" },
        { state: "X", abbr: "letter-X-" },
        { state: "Y", abbr: "letter-Y-" },
        { state: "Z", abbr: "letter-Z-" }
      ],
      status: { state: "进度", abbr: "lz--" },
      statusList: [
        { state: "进度", abbr: "lz--" },
        { state: "连载", abbr: "lz-1-" },
        { state: "完结", abbr: "lz-2-" }
      ],
      order: { state: "排序", abbr: "order-id" },
      orderList: [
        { state: "发布", abbr: "order-id" },
        { state: "更新", abbr: "order-addtime" },
        { state: "人气", abbr: "order-hits" },
        { state: "评分", abbr: "order-gold" }
      ]
      // ["全部", "日本", "港台", "欧美", "韩国", "国产", "其它"]
    };
  },
  created() {
    this.getContent();
  },
  computed: {
    url: function() {
      return (
        "/api" +
        "/list/" +
        this.coutry.abbr +
        this.category.abbr +
        this.year.abbr +
        this.letter.abbr +
        this.status.abbr +
        this.order.abbr
      );
    }
  },
  watch: {
    url: function() {
      this.getContent();
    }
  },
  methods: {
    async getContent() {
      let url = this.url;
      this.$store.state.dataLoading = true;
      // console.log(this.$route.params.chapterNo);
      let data = await this.$spider({
        url: url,
        type: "category"
      });
      this.$store.state.dataLoading = false;
      // return new Promise(resolve => {
      //   resolve(data);
      // });
      this.content = data;
      this.$store.state.categoryContent = data;
    },
    async addContent() {
      // alert('OK')
      this.page++;
      let url =
        "/api" +
        "/list/" +
        this.coutry.abbr +
        this.category.abbr +
        this.year.abbr +
        this.letter.abbr +
        this.status.abbr +
        this.order.abbr +
        "-p-" +
        this.page;
      this.$store.state.dataLoading = true;
      let data = await this.$spider({
        url: url,
        type: "category"
      });
      this.$store.state.dataLoading = false;
      this.content = data;
      for (var i = 0; i < this.content.length; i++) {
        this.$store.state.categoryContent.push(this.content[i]);
      }
      this.$store.state.loading = !this.$store.state.loading;
    }
  }
};
</script>

<style>
.v-text-field__details {
  display: none !important;
}

.prCategorySelect {
  margin-top: 1rem !important;
}
</style>
