<template>
  <v-container fluid class="text-xs-center">
    <v-layout flex justify-space-between row wrap>
      <v-flex xs12>
        <v-btn @click.stop="showTips()">toggle</v-btn>
      </v-flex>
      <slot name="test"></slot>
      <v-flex xs12>
        <v-tooltip v-model="show" top>
          <v-btn slot="activator" icon>
            <!-- <v-icon color="grey lighten-1">shopping_cart</v-icon> -->
          </v-btn>
          <span>Programmatic tooltip</span>
        </v-tooltip>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      flag: true
    };
  },
  methods: {
    showTips() {
      if (this.flag === true) {
        this.flag = false;
        this.show = !this.show;
        clearTimeout(timer);
        let timer = setTimeout(() => {
          this.show = !this.show;
          this.flag = true;
        }, 2000);
      }
    }
  }
};
</script>

"全部",
        "热血",
        "武侠",
        "搞笑",
        "耽美",
        "爱情",
        "科幻",
        "魔法",
        "神魔",
        "竞技",
        "格斗",
        "机战",
        "体育",
        "运动",
        "校园",
        "励志",
        "历史",
        "伪娘",
        "百合",
        "后宫",
        "治愈",
        "美食",
        "推理",
        "悬疑",
        "恐怖",
        "职场",
        "BL",
        "剧情",
        "生活",
        "幻想",
        "战争",
        "仙侠",
        "性转换",
        "冒险",
        "其他"