<template>
  <div>
    <v-layout justify-center>
      <v-flex lg5 md12>
        <v-tabs
          slot="extension"
          v-model="model"
          grow
          icons-and-text
          color="cyan"
        >
          <v-tab :href="`#tab-` + 1">简介
            <v-icon>Home</v-icon>
          </v-tab>
          <v-tab :href="`#tab-` + 2">章节
            <v-icon>Home</v-icon>
          </v-tab>
          <v-tab :href="`#tab-` + 3">Nearby
            <v-icon>Home</v-icon>
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="model" touchless>
          <v-tab-item :value="'tab-' + 1">
            <v-card flat>
              <v-card-text>{{bookIntro}}</v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item :value="'tab-' + 2">
            <v-card flat>
              <ChapterList/>
            </v-card>
          </v-tab-item>
          <v-tab-item :value="'tab-' + 3">
            <v-card flat>
              <v-card-text>3</v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import ChapterList from "@/chapterList.vue";
export default {
  components: {
    ChapterList
  },
  data() {
    return {
      model: "tab-2",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    };
  },
  computed: {
    bookIntro() {
      return this.$store.state.comicDetail.bookIntro;
    }
  }
};
</script>
<style lang="css" scoped>
.v-window {
  margin-bottom: 48px;
}
</style>
