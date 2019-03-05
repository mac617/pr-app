<template>
  <v-container fluid class="text-xs-center">
    <v-btn @click="stop"></v-btn>
  </v-container>
</template>


<script>
  export default {
    data () {

    },
    methods:{
      stop:function(){
        clearTimeout(this.timerr)
      }
    },
    created(){
      let timerr = setTimeout(function(){console.log('1111')},1000)
    }
  }
</script>