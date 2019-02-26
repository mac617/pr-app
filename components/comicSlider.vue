<template>
  <div class="pr-commic">
    <v-tabs
      centered
      color="cyan"
      dark
      icons-and-text
    >
      <v-tabs-slider color="yellow" />

      <v-tab href="#tab-1">
        Recents
        <v-icon>phone</v-icon>
      </v-tab>

      <v-tab href="#tab-2">
        Favorites
        <v-icon>favorite</v-icon>
      </v-tab>

      <v-tab href="#tab-3">
        Nearby
        <v-icon>account_box</v-icon>
      </v-tab>

      <v-tab-item
        v-for="i in 3"
        :value="'tab-' + i"
        :key="i"
      >
        <v-card flat>
          <v-card-text>{{ text[i-1] }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: ['haha', 'hehe', 'xixi']
    }
  }
}
</script>
<style lang="css">
</style>
