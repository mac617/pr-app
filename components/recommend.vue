<template>
  <div class="pr-recommend">
    <v-subheader>May</v-subheader>
    <v-container
      fluid
      grid-list-xs
    >
      <v-layout
        row
        wrap
      >
        <v-flex
          v-for="i in 6"
          :key="i"
          xs4
        >
          <img
            :src="`https://randomuser.me/api/portraits/men/${i + 20}.jpg`"
            alt="lorem"
            class="image"
            height="100%"
            width="100%"
          >
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>
<style lang="css">
</style>