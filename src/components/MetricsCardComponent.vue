<template lang="html">
  <v-card class="mt-4" >
    <div class="d-flex flex-no-wrap">
      <v-avatar fluid
      class="ma-3"
      size="125"
      tile
      >
      <v-img :src="sessionImage"></v-img>
    </v-avatar>
    <div fluid style="margin: 0px; padding: 0px; width: 100%">
      <v-card-title class="headline">{{sessionName}}</v-card-title>
      <v-card-subtitle>{{started}}</v-card-subtitle>
      <v-card-actions class="d-flex justify-end ">
        <!-- TEXT -->
        <v-btn
        class="ml-2 mt-2 mr-3 pa-4"
        @click="selectSession"
        outlined
        rounded
        small
        > Metrics </v-btn>
      </v-card-actions>
    </div>
  </div>
</v-card>
</template>

<script>
export default {
  props: {
    sessionName: {type : String, default:"Unknown Session"},
    sessionArtistName: {type : String, default:"Unknown Artist"},
    sessionImage: {type : String, default:""},
    ssid: {type : String, default: "none"},
    started: {type : Number, default: 0},
    ended: {type : Number, default: 0}
  },
  methods: {
    selectSession(){
      this.$emit('metrics', {"ssid": this.ssid, "started": this.started, "ended": this.ended})
    }
  }
}
</script>

<style lang="css" scoped>
</style>
