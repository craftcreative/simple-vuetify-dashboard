<template lang="html">
  <div class="">
  <h2>{{pathname}}</h2>

       </div>
</template>

<script>
export default {
  data: () => ({
    pathname: "LOL"
  }),
  methods:{
    getUrl(){
      this.pathname = window.location.pathname
    }
  },
  created(){
    this.getUrl()
  }
}
</script>

<style lang="css" scoped>
</style>
