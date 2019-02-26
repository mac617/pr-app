<template>
  <div>
    <v-layout justify-center>
      <v-flex lg5 md12>
        <v-tabs id='test' centered color="cyan" dark hide-slider target>
          <!-- <v-tabs-slider color="yellow" /> -->
          <v-tab href="#tab-1">Recents
            <v-icon>phone</v-icon>
          </v-tab>

          <v-tab href="#tab-2">Favorites
            <v-icon>favorite</v-icon> 
          </v-tab>

          <v-tab href="#tab-3">Nearby
            <v-icon>account_box</v-icon>
          </v-tab>

          <v-tab-item :value="'tab-' + 1">
            <v-card flat>
              <v-card-text>1</v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item :value="'tab-' + 2" lazy>
            <v-card flat>
              <ChapterList/>
            </v-card>
          </v-tab-item>

          <!-- <v-card flat>
          <v-card-text>
            <v-container
              grid-list-md
              text-xs-center
            >
              <v-layout
                row
                wrap
              >

                <v-flex
                  v-for="i in chapter"
                  :key="i"
                  xs3
                >
                  <v-card
                    dark
                    color="secondary"
                  >
                    <v-card-text class="px-0">
                      {{ i }}
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          </v-card>-->
          <v-tab-item :value="'tab-' + 3">
            <v-card flat>
              <v-card-text>3</v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import ChapterList from "@/chapterList.vue";
export default {
  components: {
    ChapterList
  }
};
</script>
<style>
</style>
