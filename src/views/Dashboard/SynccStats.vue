<template lang="html">

  <v-container fluid grid-list-md text-sm-left>
    <v-card>
      <v-card-title> Search by username</v-card-title>
      <v-row class="ml-1">
        <v-col sm="4">
          <v-menu
          v-model="menu1"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="290px"
          >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
            v-model="from"
            label="From"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
          v-model="from"
          @input="menu1 = false"
          ></v-date-picker>
        </v-menu>
      </v-col>
      <v-col sm="4">
        <v-menu
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="290px"
        >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
          v-model="to"
          label="To"
          prepend-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
        v-model="to"
        @input="menu2 = false"
        ></v-date-picker>
      </v-menu>
    </v-col>
    <v-col sm="2">
      <v-btn mr-4 @click="search" color="primary">Search</v-btn>
    </v-col>
    <v-col sm="2">
      <v-btn mr-4 @click="reset" color="#FF0000">Reset</v-btn>
    </v-col>
  </v-row>
</v-card>
<v-row class="ml-1">
  <v-col sm="12">
    <div class="small">
      <v-row>
        <v-col sm="4">
          <v-select
          v-model="select"
          :items="selectItems"
          item-text="state"
          item-value="abbr"
          label="Select"
          persistent-hint
          return-object
          single-line
          ></v-select>
        </v-col>
      </v-row>
      <br />
      <line-chart :chart-data="datacollection" :options="options"></line-chart>
    </div>

  </v-col>
</v-row>


</v-container>

</template>

<script>
import LineChart from '@/components/LineChart.js'
import axios from 'axios'
import moment from 'moment'

export default {
  components: {
    LineChart
  },
  data () {
    return {
      select:  { state: 'Month', abbr: 'm' },
      selectItems: [
        { state: 'Year', abbr: 'y' },
        { state: 'Month', abbr: 'm' },
        { state: 'Day', abbr: 'd' },
        { state: 'Hour', abbr: 'h' }
      ],
      created: [],
      newData: [],
      sampleData: [],
      from: new Date().toISOString().substr(0, 10),
      to: new Date().toISOString().substr(0, 10),
      menu2: false,
      menu1: false,
      datacollection: null,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {

          yAxes: [{
              stacked: true,
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: true
            }
          }],
          xAxes: [ {
            type: 'time',
            distribution: 'series',
            gridLines: {
              display: false
            },
            ticks: {
              major: {
                enabled: true,
                fontStyle: 'bold'
              },
              source: 'data',
              autoSkip: true,
              autoSkipPadding: 75,
              maxRotation: 0,
              sampleSize: 100
            },
            time: {
              unit: 'day'
            }
          }]
        },
      }
    }
  },
  // mounted () {
  //   this.fillData()
  // },
  methods: {
    createdUsers(){
      axios.get('/api/syncc/stats/usercreated').then(response => {

        console.log(response.data.created);
        this.created = response.data.created.map(c => moment(c.created).toDate())
        console.log("Lol", this.created);
        this.newData = this.created
        this.dailyUsersCreated("m", this.newData)
      })
    },

    dailyUsersCreated(type, data){
      var results = {}, rarr = [], i, date;
      for (i=0; i<data.length; i++) {
        // get the date
        // date = [[this.created[i].getFullYear(),this.created[i].getMonth(), this.created[i].getDate()].join("-"), this.created[i].getHours()].join(" ");
        if (type == "d"){ date =  moment( data[i]).format("YYYY-MM-DD")}
        else if (type == "y") {date =  moment( data[i]).format("YYYY")}
        else if (type == "m") {date =  moment( data[i]).format("YYYY-MM")}
        else if(type == "h") { date =  moment( data[i]).format("YYYY-MM-DD HH")}
        results[date] = results[date] || 0;
        results[date]++;
      }
      // you can always convert it into an array of objects, if you must
      for (i in results) {
        rarr.push({date:i,counts:results[i]});
      }
      console.log(results);
      console.log(rarr);

      this.sampleData = rarr
      this.fillData ()
    },

    fillData () {
      var totalPeopele = this.sampleData.map(t => t.counts)
      var cumsum = []
for(var a=0;a<totalPeopele.length;a++) {
  if(a==0) cumsum[a] = totalPeopele[0]
  else cumsum[a] = cumsum[a-1] + totalPeopele[a];
}
      var date = this.sampleData.map(d => d.date)

      this.datacollection = {
        labels: date,
        datasets: [
          // By day count
          // {
          //   label: 'Created Accounts',
          //   data: totalPeopele,
          //   fill: false,
          //   borderColor: '#6558F9',
          //   backgroundColor: '#6558F9',
          //   borderWidth: 1
          // },
          {
            label: 'Users of the cumulative graph',
            data: cumsum,
            fill: false,
            borderColor: '#ff3232',
            backgroundColor: '#ff3232',
            borderWidth: 1
          }
        ]
      }
    },
    search(){
      var from = new Date(this.from)
      var to = new Date(this.to)
      var resultsCreated = []
      this.created.forEach((item) => {
        if(item.getMonth()>= from.getMonth() && item.getMonth()<= to.getMonth()){
          resultsCreated.push(item)
        }
      });
      this.newData = resultsCreated
      this.dailyUsersCreated(this.select.abbr, resultsCreated)
    }
  },
  created(){
    this.createdUsers()
  },
  watch: {
    select: function(value) {
      this.dailyUsersCreated(value.abbr, this.newData)
    }
  }
}
</script>

<style lang="css" scoped>
.small {
  max-width: 900px;

}
</style>
