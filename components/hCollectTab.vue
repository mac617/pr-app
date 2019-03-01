<template>
  <v-card>
    <v-container>
      <v-layout justify-center ma-0>
        <v-flex>
          <v-tabs max fixed-tabs slot="extension" v-model="model">
            <v-tab class="font-weight-bold title" :href="`#tab-${1}`">收藏</v-tab>
            <v-tab class="font-weight-bold title" :href="`#tab-${2}`">历史</v-tab>
          </v-tabs>

          <v-tabs-items v-model="model">
            <v-tab-item lazy :value="`tab-${1}`">
              <v-card flat>
                <v-card-text>
                  <!-- {{hLove}} -->
                  <CollectList/>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item lazy :value="`tab-${2}`">
              <v-card flat>
                <v-card-text>
                  <!-- {{hLove}} -->
                  <HistoryList/>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import HistoryList from "@/historyList.vue";
import CollectList from "@/collectList.vue";
export default {
  components: {
    HistoryList,
    CollectList
  },
  data() {
    return {
      model: "tab-1"
    };
  }
};
</script>
<style lang="css" scoped>
/* .v-card__text {
  padding: 0px !important;
} */
</style>