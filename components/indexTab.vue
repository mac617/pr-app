<template>
  <div class="indexComic">
    <v-layout justify-center>
      <v-flex style="padding-top:0">
        <v-tabs slot="extension" v-model="model" centered fixed-tabs>
          <v-tabs-slider color="orange"/>
          <v-tab class="font-weight-bold subheading" :href="`#tab-${1}`">热门连载</v-tab>
          <v-tab class="font-weight-bold subheading" :href="`#tab-${2}`">经典完结</v-tab>
          <v-tab class="font-weight-bold subheading" :href="`#tab-${3}`">最新上架</v-tab>
        </v-tabs>

        <v-tabs-items touchless v-model="model">
          <v-tab-item lazy :value="`tab-${1}`">
            <v-card flat>
              <v-card-text>
                <IndexComic v-if="flag" v-bind:content="hotContent"/>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item lazy :value="`tab-${2}`">
            <v-card flat>
              <v-card-text>
                <IndexComic v-if="flag" v-bind:content="finishContent"/>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item lazy :value="`tab-${3}`">
            <v-card flat>
              <v-card-text>
                <IndexComic v-if="flag" v-bind:content="newContent"/>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import IndexComic from "@/indexComic.vue";
export default {
  components: {
    IndexComic
  },
  data() {
    return {
      model: "tab-2",
      hotContent: "",
      finishContent: "",
      newContent: "",
      flag: false
    };
  },
  created() {
    this.getContent();
  },
  methods: {
    getContent: async function() {
      this.$store.state.dataLoading = true
      let data = await this.$spider({
        url: "/api",
        type: "home"
      });
      this.hotContent = data[0];
      this.finishContent = data[1];
      this.newContent = data[2];
      this.flag = true;
      this.$store.state.dataLoading = false
    }
  }
};
</script>
<style lang="css" scoped>
.v-card__text{
    padding:0px !important;
}
</style>