<template lang="html">
  <v-container fluid grid-list-md text-sm-left>

    <v-card>
      <v-card-title> Search by username</v-card-title>
      <v-row class="ml-1">
        <v-col sm="4">
          <v-text-field v-model="username" label="Syncc Username"></v-text-field>
        </v-col>
        <v-col sm="6">
          <v-btn mr-4 @click="search" color="primary">Search</v-btn>
        </v-col>
      </v-row>
    </v-card>

    <v-alert v-show ="errorFound"
      class="mt-5"
     color="blue-grey"
     dark
     dense
     icon="mdi-shield-lock-outline"
     prominent>
     {{errorMsg}}
   </v-alert>

    <v-row dense>
      <v-col v-if="!$vuetify.breakpoint.md" cols="12" sm="12" lg="4">
        <div v-for = "(card, index) in cards"
        :key="card.title">
        <metrics-card
        v-bind:key="index"
        :sessionName="card.session"
        :sessionArtistName = "card.artist"
        :sessionImage = "card.img_url"
        :ssid = "card.ssid"
        :started = "card.started"
        :ended = "card.ended"
        @metrics = "checkMetrics"
        ></metrics-card>
      </div>
    </v-col>
    <v-col v-else cols="12">
      <v-row>
        <v-col sm="6" v-for = "(card, index) in cards"
        :key="card.title">
        <metrics-card
        v-bind:key="index"
        :sessionName="card.session"
        :sessionArtistName = "card.artist"
        :sessionImage = "card.img_url"
        :ssid = "card.ssid"
        :started = "card.started"
        :ended = "card.ended"
        @metrics = "checkMetrics"
        ></metrics-card>
      </v-col>
    </v-row>
  </v-col>
  <v-col lg="8" v-show="statisticVisibility">
    <v-banner class="v-banner-bottom"  sticky >
      <v-container v-show="cards.length > 0">
        <v-toolbar >
          <v-toolbar-title class="ml-5 headline"> Session Name </v-toolbar-title>
          <v-spacer></v-spacer>
          <!-- TEXT -->
          <v-btn
          class="mr-5"
          elevation="2"
          outlined
          raised
          rounded>
          <v-icon class="pr-1">mdi-file-chart-outline</v-icon> Export
        </v-btn>
      </v-toolbar>
      <v-container class="mt-4">
        <div class="text-h3 mb-5 font-weight-regular">{{synccUser}} <span class="red--text">Syncc Metrics</span></div>
        <v-row>
          <v-col cols="12" sm="7" >
            <v-row>
              <v-col class="mt-5" cols="12">
                <v-card>
                  <v-card-title class="text-lg-h6 text-xl-h5" primary-title>
                    How many fans was in the session in total?
                  </v-card-title>
                  <v-card-text>
                    <div class="text-h4 red--text">{{metrics.totalListeners}}</div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col class="mt-2" cols="12">
                <v-card>
                  <v-card-title class="text-lg-h6 text-xl-h5" primary-title>
                    How many fans stayed in the session in average?
                  </v-card-title>
                  <v-card-text>
                    <div class="text-h4 red--text">{{metrics.stayInListeners}}</div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col class="mt-2" cols="12">
                <v-card>
                  <v-card-title class="text-lg-h6 text-xl-h5" primary-title>
                    How long did fans stay in the session in average?
                  </v-card-title>
                  <v-card-text>
                    <div class="text-h4 red--text">{{metrics.sessionTimeAvg}}</div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" sm="5">
            <v-row>
              <v-col class="mt-5" cols="12">
                <v-card>
                  <v-card-title class="text-lg-h6 text-xl-h5" primary-title>
                    How many comments was there?
                  </v-card-title>
                  <v-card-text>
                    <div class="text-h4 red--text">{{metrics.comments}}</div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col class="mt-2" cols="12">
                <v-card>
                  <v-card-title class="text-lg-h6 text-xl-h5" primary-title>
                    How was the tonality in the chat?
                  </v-card-title>
                  <v-card-text>
                    <div class="text-h4 red--text">{{metrics.tonality}}</div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col class="mt-2" cols="12">
                <v-card>
                  <v-card-title class="text-lg-h6 text-xl-h5" primary-title>
                    How many adds to playlist?
                  </v-card-title>
                  <v-card-text>
                    <div class="text-h4 red--text">?</div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-banner>
</v-col>
</v-row>
</v-container>
</template>

<script>

// Components
import MetricsCardComponent from '@/components/MetricsCardComponent'
import axios from 'axios'

export default {
  components:{
    'metrics-card': MetricsCardComponent
  },
  data: () => ({
    username: "",
    bottom: false,
    cards: [],
    sessionsList: [],
    count: 0,
    synccUser:"",
    metrics: {
      totalListeners: 0,
      stayInListeners: 0,
      sessionTimeAvg: "0:0",
      comments: 0,
      tonality: "Awesome"
    },
    errorFound: false,
    errorMsg: ""
  }),
  methods:{
    search(){
      this.errorFound= false,
      this.errorMsg= ""
      if(this.username != ""){
        this.sessionsList = []
        this.cards = []
        this.count = 0
        this.addSession(this.username)
      }else{
        this.errorFound= true,
        this.errorMsg= "Enter username"
      }
    },

    checkMetrics(value){
      if(value.ssid != "none" && value.ended != 0){
        this.metricsData(value.ssid, value.ended, value.started)
      }
    },
    metricsData(ssid, sessionEnd, sessionStart){
      axios.get('/api/syncc/metric/'+ssid+'/'+sessionEnd).then(response => {
        var metrics = response.data.metrics
        var duration = Math.round(((sessionEnd / 60000) - (sessionStart / 60000)) * 10) / 10;
        console.log("TIME",duration);
        console.log("LOL \n"+metrics.stats +"\n,"+ metrics.stats2 +"\n,"+ metrics.stats3)
        this.calculateMetrics(metrics.stats, metrics.stats2, metrics.stats3, duration)
        this.metrics.comments = response.data.messageCount
      })
    },

    calculateMetrics(stats, stats2, stats3, duration){
      var res = {}
      for(var i in stats){
        stats[i].user_name = stats[i].user_name.replace(/\s/g, '');
        if(typeof res[stats[i].user_name] == 'undefined'){
          res[stats[i].user_name] = stats[i].duration/60;
        } else {
          res[stats[i].user_name] += stats[i].duration/60;
        }
      }
      for(var j in stats2){
        stats2[j].user_name = stats2[j].user_name.replace(/\s/g, '');
        if(typeof res[stats2[j].user_name] == 'undefined'){
          res[stats2[j].user_name] = stats2[j].duration/60;
        } else {
          res[stats2[j].user_name] += stats2[j].duration/60;
        }
      }
      for(var z in stats3){
        stats3[z].user_name = stats3[z].user_name.replace(/\s/g, '');
        if(typeof res[stats3[z].user_name] == 'undefined'){
          res[stats3[z].user_name] = stats3[z].duration/60;
        } else {
          res[stats3[z].user_name] += stats3[z].duration/60;
        }
      }

      var maxPeopleInSession = Object.keys(res).length
      this.metrics.totalListeners = maxPeopleInSession
      var perc = 0;
      var dur = 0;
      var durs = [];
      for(var k in res){
        durs.push(res[k]/duration);
        dur+=res[k];
        perc+=res[k]/duration;
      }
      var durss = durs.sort(function(a,b){ return a - b;})
      var avg = 0;
        console.log(durss +" average");
      for (var l in durss){
        avg+=durss[l];
      }

      var time = avg/maxPeopleInSession*duration
        console.log(time + "");
      var h = time / 60
      var m = (h % 1).toFixed(4)*60
      var s = (m % 1).toFixed(4) * 60

      if(Math.floor(h) == 0){
        this.metrics.sessionTimeAvg = Math.floor(m)+"min "+Math.floor(s)+"s"
      }else{
        this.metrics.sessionTimeAvg = Math.floor(h)+"h "+Math.floor(m)+"min "+Math.floor(s)+"s"
      }
      console.log(perc + "");
      this.metrics.stayInListeners = Math.round(perc)
      console.log("DUR--"+dur/maxPeopleInSession);
    },
    bottomVisible(){
      const scrollY = window.scrollY
      const visible = document.documentElement.clientHeight
      const pageHeight = document.documentElement.scrollHeight
      const bottomOfPage = visible + scrollY >= pageHeight
      return bottomOfPage || pageHeight < visible
    },
    addSession(username) {
      axios.get('/api/syncc/sessions/'+username)
      .then(response => {
        if(response.data.sessions.length >0){
          this.synccUser = response.data.sessions[0].host_user
          this.sessionsList = response.data.sessions;
          this.metricsData(response.data.sessions[0].id, response.data.sessions[0].session_ended, response.data.sessions[0].session_started)
          this.addNewSession()
        }else{
          this.errorFound= true,
          this.errorMsg= "No Session Found"
        }
      })
    },
    addNewSession(){
      let api = this.sessionsList[this.count];
      let apiInfo = {
        session : api.session_name,
        img_url : api.background_image,
        artist : api.host_user,
        ssid: api.id,
        started: api.session_started,
        ended: api.session_ended
      };
      this.cards.push(apiInfo)
      if (this.bottomVisible()) {
        if (this.count+1 <this.sessionsList.length ){
          this.count++
          this.addNewSession()
        }
      }
    }
  },
  computed: {
    statisticVisibility: function(){
      return (this.$vuetify.breakpoint.lg || this.$vuetify.breakpoint.xl)
    }
  },
  watch: {
    bottom(bottom) {
      if (bottom) {
        if (this.count+1 <this.sessionsList.length ){
          this.count++
          this.addNewSession()
        }
      }
    }
  },
  created() {
    window.addEventListener('scroll', () => {
      this.bottom = this.bottomVisible()
    })
  }
}
</script>

<style lang="css" scoped >
.v-banner-bottom .v-banner__wrapper {
  border-bottom: 0px solid rgba(255, 255, 255, 0.12);
}
</style>
