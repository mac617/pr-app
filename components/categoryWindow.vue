<template>
  <div class="categoryWindow">
    <v-card>
      <v-container>
        <v-layout justify-center>
          <v-flex lg11 md11 xs11>
            <CategorySelect ref="categoryList"/>
            <CategoryList/>
            <v-btn
              color="secondary"
              block
              :loading="loading"
              :disabled="loading"
              @click="addContent();"
            >加载更多</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import CategoryList from "@/categoryList.vue";
import CategorySelect from "@/categorySelect.vue";
export default {
  components: {
    CategorySelect,
    CategoryList
  },
  methods: {
    addContent() {
      this.$store.state.loading = true;
      this.$refs.categoryList.addContent();
      
    }
    // chargeLoading() {
    //   let self = this;
    //   this.$store.state.loading = true;
    //   setTimeout(function() {
    //     self.$store.state.loading = !self.$store.state.loading;
    //   }, 3000);
    // }
  },
  computed: {
    loading: function() {
      return this.$store.state.loading;
    }
  }
};
</script>
<style lang="css" scoped>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>