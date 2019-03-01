<template>
  <div :class="status">
    <img v-if="!this.$store.state.dark" class="bannerBright" src="../src/assets/imgs/prpprrp333.png" height="180px" width="320px" alt>
    <img v-else class="bannerDark" src="../src/assets/imgs/prpprrp.png" height="180px" width="320px" alt>
  </div>
</template>

<script>
export default {
  computed:{
    status:function(){
      if(!this.$store.state.dark){
        return "pr-banner bannerBright hidden-sm-and-down"
      }else{
        return "pr-banner bannerDark hidden-sm-and-down"
      }
    }
  }
};
</script>
<style lang="css" scoped>
.pr-banner {
  text-align: center;
  /* background-color: #ffff; */
}
.bannerBright {
  background-color: #ffff;
}

.bannerDark {
  background-color: #424242;
}
</style>