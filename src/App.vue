<template lang="html" >
  <v-app dark
  style="background-color:#110F1B; color:white" >
  <v-main color="primary" class="lighten-3">
  <router-view :key="$route.path"/>

  </v-main>
</v-app>
</template>

<script>

export default {
  name: 'syncc-app',
  metaInfo: {
    title: 'Syncc with music. Download the app.',
  },
  data: () => ({
    pathname: "LOL"
  }),
  methods:{
    getUrl(){
      var pathname = window.location.pathname
      pathname = pathname.split('/')
      pathname = this.arrayRemove(pathname, "")
      console.log(pathname);
    },
    arrayRemove(arr, value) {
        return arr.filter(function(ele){
            return ele != value;
        });
    },
    createCoolLog(){
      console.log('  ██████ ▓██   ██▓ ███▄    █  ▄████▄   ▄████▄        ▄▄▄       ██▓███   ██▓███\n▒██    ▒  ▒██  ██▒ ██ ▀█   █ ▒██▀ ▀█  ▒██▀ ▀█       ▒████▄    ▓██░  ██▒▓██░  ██▒\n░ ▓██▄     ▒██ ██░▓██  ▀█ ██▒▒▓█    ▄ ▒▓█    ▄      ▒██  ▀█▄  ▓██░ ██▓▒▓██░ ██▓▒\n  ▒   ██▒  ░ ▐██▓░▓██▒  ▐▌██▒▒▓▓▄ ▄██▒▒▓▓▄ ▄██▒     ░██▄▄▄▄██ ▒██▄█▓▒ ▒▒██▄█▓▒ ▒\n▒██████▒▒  ░ ██▒▓░▒██░   ▓██░▒ ▓███▀ ░▒ ▓███▀ ░ ██▓  ▓█   ▓██▒▒██▒ ░  ░▒██▒ ░  ░\n▒ ▒▓▒ ▒ ░   ██▒▒▒ ░ ▒░   ▒ ▒ ░ ░▒ ▒  ░░ ░▒ ▒  ░ ▒▓▒  ▒▒   ▓▒█░▒▓▒░ ░  ░▒▓▒░ ░  ░\n░ ░▒  ░ ░ ▓██ ░▒░ ░ ░░   ░ ▒░  ░  ▒     ░  ▒    ░▒    ▒   ▒▒ ░░▒ ░     ░▒ ░\n░  ░  ░   ▒ ▒ ░░     ░   ░ ░ ░        ░         ░     ░   ▒   ░░       ░░\n      ░   ░ ░              ░ ░ ░      ░ ░        ░        ░  ░\n          ░ ░                ░        ░          ░');
    }
  },
  created(){
    this.getUrl()
    this.createCoolLog()
  }
};
</script>
<style lang="css" scoped >

@font-face {
  font-family: 'syncc-regular';
  src: url(./assets/font/regular.woff2) format('woff2'),
  url(./assets/font/regular.woff) format('woff');
}

@font-face {
  font-family: 'syncc-medium';
  src: url(./assets/font/medium.woff2) format('woff2'),
  url(./assets/font/medium.woff) format('woff');
  font-weight: 500;
  font-style: normal;
  font-display: block;
}

#app {
  font-family:syncc-regular, san-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow:none !important;
  letter-spacing:-0.10em
}

.row > .col-12 {
  padding: 0px
}

.text-right {
  float: right;
}

.button-download {
  border-radius: 12px
}

.stars {
  display: inline-block;
  width: 13px;
  height: 13px;
  background-image: url(https://i.stack.imgur.com/KaEDC.png);
}
.repeat{
  background-repeat: repeat;
}
</style>
