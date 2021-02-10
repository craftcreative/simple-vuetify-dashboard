<template lang="html">
  <div>
    <div v-for = "card in cards"
    :key="card.title">
    <metrics-card
    :sessionName="card.session"
    :sessionArtistName = "card.artist"
    :sessionImage = "card.img_url"
    :sessionListeners = "card.listeners"
    ></metrics-card>
  </div>
</div>
</template>

<script>
// Components
import MetricsCardComponent from '@/components/MetricsCardComponent'
export default {
  props: {
    cards: Array
  },
  components:{
    'metrics-card': MetricsCardComponent
  },

}
</script>

<style lang="css" scoped>
</style>
