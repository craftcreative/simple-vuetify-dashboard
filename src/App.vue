<template>
  <v-app light
  style="background-color:#110F1B; color:white" >
  <v-main color="primary" class="lighten-3">
      <v-row >
        <v-col cols="12" sm="12" md="12"
        style="background-color:#110F1B;">
        <!-- NAV BAR - Component -->
        <v-container class="pl-sm-0 pr-sm-0" >
        <v-row
        v-if="this.$vuetify.breakpoint.md || this.$vuetify.breakpoint.lg || this.$vuetify.breakpoint.xl"
        justify="space-between"
        class="mt-6"
        >
        <div align="center" class="px-3" >
          <v-img
          height="45"
          width="32"
          src="@/assets/image/logoSyncc.svg"
          ></v-img>
        </div>
        <div align="start">
          <v-img
          class="float-left mr-12"
          height="16"
          width="16"
          @click="goToInstagram()"
          src="@/assets/image/instagramIcon.svg"
          ></v-img>
          <v-img
          v-if="mute"
          class="mr-6"
          align="right"
          @click="muteVideo()"
          height="16"
          width="19"
          src="@/assets/image/muteIconTrue.svg"
          ></v-img>
          <v-img
          v-else
          align="right"
          class="mr-5"
          @click="muteVideo()"
          height="16"
          width="19"
          src="@/assets/image/muteIcon.svg"
          ></v-img>
        </div>
    </v-row>
    <v-row
    v-else-if="this.$vuetify.breakpoint.sm"
    justify="space-between"
    class="mt-6"
    style="padding-left:20px; padding-right:30px;"
    >
    <!-- style="width:36px; height:45px" -->
    <div align="center" class="px-3" >
      <v-img
      class="ml-4"
      height="45px"
      width="32p"
      src="@/assets/image/logoSyncc.svg"
      ></v-img>
    </div>
    <div style="vertical-align: top;">
      <v-img
      class="float-left mr-12"
      height="16"
      width="16"

      @click="goToInstagram()"
      src="@/assets/image/instagramIcon.svg"
      ></v-img>
      <v-img
      v-if="mute"
      class="mr-6"
      align="right"
      @click="muteVideo()"
      height="16"
      width="19"
      src="@/assets/image/muteIconTrue.svg"
      ></v-img>
      <v-img
      v-else
      align="right"
      class="mr-5"
      @click="muteVideo()"
      height="16"
      width="19"
      src="@/assets/image/muteIcon.svg"
      ></v-img>
    </div>
</v-row>
<v-row
v-else
justify="space-between"
class="mt-6"
style="padding-left:13px; padding-right:23px;"
>
<!-- style="width:36px; height:45px" -->
<div align="center" class="px-4" >
  <v-img
  class="ml-4"
  height="47px"
  width="33px"
  src="@/assets/image/logoSyncc.svg"
  ></v-img>
</div>
<div style="vertical-align: top;">
  <v-img
  class="float-left mr-12"
  height="22.4"
  width="22.4"

  @click="goToInstagram()"
  src="@/assets/image/instagramIcon.svg"
  ></v-img>
  <v-img
  v-if="mute"
  class="mr-5"
  align="right"
  @click="muteVideo()"
  height="22.4"
  width="26.6"
  src="@/assets/image/muteIconTrue.svg"
  ></v-img>
  <v-img
  v-else
  align="right"
  class="mr-5"
  @click="muteVideo()"
  height="22.4"
  width="26.6"
  src="@/assets/image/muteIcon.svg"
  ></v-img>
</div>
</v-row>

</v-container>
    <!-- NAV BAR -->

    <!-- SECTION - 1 - Download -->
    <v-container style="padding:0px" class="pa-sm-0 pr-sm-0">
    <v-row class="mt-10 mb-md-8 mb-sm-0 px-2">
      <v-col cols="12" sm="12" md="8">
        <!-- Text -->
        <div v-if="this.$vuetify.breakpoint.md || this.$vuetify.breakpoint.lg || this.$vuetify.breakpoint.xl">
          <p style="font-size: 40pt; font-style: normal; color:#FA5257">{{"Syncc with music."}}</p>
          <p class="mt-n10" style="font-size: 40pt; font-style: normal">{{"Download the app."}}</p>
        </div>
        <div style="padding-left:40px;" v-else-if="this.$vuetify.breakpoint.sm">
          <p style="font-size: 30pt; font-style: normal; color:#FA5257">{{"Syncc with music."}}</p>
          <p class="mt-n7" style="font-size: 30pt; font-style: normal">{{"Download the app."}}</p>
        </div>
        <div style="padding-left:40px;" v-else>
          <p style="font-size: 27pt; font-style: normal; color:#FA5257">{{"Syncc with music."}}</p>
          <p class="mt-n7" style="font-size: 27pt; font-style: normal">{{"Download the app."}}</p>
        </div>
      </v-col>
      <v-col align="right" cols="12" sm="12" md="4">
        <!-- Text -->
        <div v-if="this.$vuetify.breakpoint.md || this.$vuetify.breakpoint.lg || this.$vuetify.breakpoint.xl">
          <v-btn
          @click="goToAppStore()"
          style="width:291px; font-family:syncc-medium; letter-spacing:0; text-transform: none; font-size:12pt"
          class="ma-2 py-7 justify-space-between button-download"
          color="secondary" large > Download on iOS
          <v-icon class="mr-6" dark right >{{apple}}</v-icon>
        </v-btn> <br />
        <v-btn
        style="width:291px; font-family:syncc-medium; letter-spacing:0; text-transform: none; font-size:12pt"
        @click="goToAndroidStore()"
        class="ma-2 py-7 justify-space-between button-download"
        color="secondary"
        large>Download on Android
        <v-icon class="mr-6" dark right>{{android}}</v-icon>
      </v-btn>
    </div>
    <div v-else class="">
      <v-btn v-if="os == 'Android' "
      style=" box-shadow:none; font-family:syncc-medium; width:100%; height:76px; letter-spacing:0; text-transform: none; font-size:12pt"
      color="secondary"
      @click="goToAndroidStore()"
      class="justify-space-between"
      tile
      large><span class="pl-3">Download on Android</span>
      <v-icon class="mr-6" dark right>{{android}}</v-icon>
    </v-btn>
    <v-btn v-else-if="os == 'iOS' "
    @click="goToAppStore()"
    style="box-shadow:none; font-family:syncc-medium;width:100%;height:76px; letter-spacing:0; text-transform: none; font-size:12pt"
    color="secondary"
    class="justify-space-between"
    tile
    large><span class="pl-3"> Download on iOS</span>
    <v-icon class="mr-6" dark right>{{apple}}</v-icon>
  </v-btn>
  <div v-else >
    <v-btn
    style="box-shadow:none; font-family:syncc-medium; width:100%; height:76px; letter-spacing:-0.05em;  text-transform: none; font-size:12pt"
    color="secondary"
    class="justify-space-between"
    @click="goToAppStore()"
    tile
    large>
    <span class="text-left pl-4"> Download on iOS</span>
    <v-icon class="mr-6 " align-end dark right>{{apple}}</v-icon>
  </v-btn><br />
  <v-btn
  style="box-shadow:none; font-family:syncc-medium;width:100%; height:76px; letter-spacing:-0.05em; text-transform: none; font-size:12pt"
  color="secondary"
  class="mt-3 justify-space-between"
  @click="goToAndroidStore()"
  tile
  large><span class="text-left pl-4">Download on Android</span>
  <v-icon class="mr-6 text-right" dark right>{{android}}</v-icon>
</v-btn>
</div>
</div>

</v-col>
</v-row>
</v-container>
<!-- SECTION - 1 - Download -->
<!-- SECTION - 2 - Video -->
<div v-if="this.$vuetify.breakpoint.xl ">
  <video autoplay="autoplay" playsinline="" loop="loop" preload="auto" :muted="mute" style="width:100%;height:auto">
    <source :src="require(`@/assets/video/xlVideo.webm`)" type="video/webm">
      <source :src="require(`@/assets/video/xlVideo.mp4`)" type="video/mp4">
      </video>
    </div>
<div v-else-if="this.$vuetify.breakpoint.lg || this.$vuetify.breakpoint.md ">
  <video autoplay="autoplay" playsinline="" loop="loop" preload="auto" :muted="mute" style="width:100%;height:auto">
    <source :src="require(`@/assets/video/synccLargeVideo.webm`)" type="video/webm">
      <source :src="require(`@/assets/video/largeVideo.mp4`)" type="video/mp4">
      </video>
    </div>
    <div v-else>
      <video autoplay="autoplay" playsinline="" loop="loop" preload="auto" :muted="mute" style="width:100%;height:auto">
        <source :src="require(`@/assets/video/synccSmallVideo.webm`)" type="video/webm">
          <source :src="require(`@/assets/video/smallVideo.mp4`)" type="video/mp4">
          </video>

        </div>
        <!-- SECTION - 2 - Video -->
        <!-- SECTION - 3 - Paragraphs -->
        <v-container class="pl-sm-0 pr-sm-0">
        <!-- 1 -->
        <v-row class="px-8 mt-12">
          <v-col
          v-if="this.$vuetify.breakpoint.md || this.$vuetify.breakpoint.lg || this.$vuetify.breakpoint.xl"
           cols="12">
          <!-- Text -->
          <p style="font-family:syncc-medium; font-size: 20px; font-style: normal" > 01.</p>
          <p class="mt-n4" style="font-size: 30pt; font-style: normal;">{{"A social platform with"}}</p>
          <p class="mt-n8" style="font-size: 30pt; font-style: normal; color:#FA5257">{{"music in focus."}}</p>
          <p  style="font-size: 15pt; font-style: normal">Discover music from real people and listen together in real</p>
          <p class="mt-n5" style="font-size: 15pt; font-style: normal">time through your Spotify premium account.</p>
        </v-col>
        <v-col
        v-else-if="this.$vuetify.breakpoint.sm"
        class="px-2"
        cols="12" sm="12">
        <!-- Text -->
        <p style="font-family:syncc-medium; font-size: 16px; font-style: normal" > 01.</p>
        <p class="mt-n3" style="font-size: 25pt; font-style: normal;">{{"A social platform with"}}</p>
        <p class="mt-n6" style="font-size: 25pt; font-style: normal; color:#FA5257">{{"music in focus."}}</p>
        <p  style="font-size: 16pt; font-style: normal">
          Discover music from real people and listen together in real time through your Spotify premium account.
        </p>
      </v-col>
        <v-col
        class="px-2"
        v-else
        cols="12" sm="12">
        <!-- Text -->
        <p style="font-family:syncc-medium; font-size: 16px; font-style: normal" > 01.</p>
        <p class="mt-n3" style="font-size: 20pt; font-style: normal;">{{"A social platform with"}}</p>
        <p class="mt-n6" style="font-size: 20pt; font-style: normal; color:#FA5257">{{"music in focus."}}</p>
        <p  style="font-size: 13pt; font-style: normal">
          Discover music from real people and listen together in real time through your Spotify premium account.
        </p>
      </v-col>
    </v-row>
    <!-- 2 mt-n1 -->
    <v-row class="px-8 mt-12">
      <v-col
      v-if="this.$vuetify.breakpoint.md || this.$vuetify.breakpoint.lg || this.$vuetify.breakpoint.xl"
       cols="12">
      <!-- Text -->
      <p style="font-family:syncc-medium; font-size: 20px; font-style: normal" > 02.</p>
      <p class="mt-n4" style="font-size: 30pt; font-style: normal; color:#FA5257">Connect with idols.</p>
      <p class="mt-n8" style="font-size: 30pt; font-style: normal;">Listen together and chat.</p>
      <p  style="font-size: 15pt; font-style: normal">On Syncc you can interact with your idols, listen to music</p>
      <p class="mt-n5" style="font-size: 15pt; font-style: normal">and talk in a direct, fun and effortless way.</p>
    </v-col>
    <v-col
    v-else-if="this.$vuetify.breakpoint.sm"
    class="px-2"
    cols="12" sm="12">
    <!-- Text -->
    <p style="font-family:syncc-medium; font-size: 14px; font-style: normal" > 02.</p>
    <p class="mt-n3" style="font-size: 25pt; font-style: normal;">Connect with idols.</p>
    <p class="mt-n6" style="font-size: 25pt; font-style: normal; color:#FA5257">Listen together and chat.</p>
    <p  style="font-size: 16pt; font-style: normal">
      On Syncc you can interact with your idols, listen to music and talk in a direct, fun and effortless way.
    </p>
  </v-col>
    <v-col
    v-else
    class="px-2"
    cols="12" sm="12">
    <!-- Text -->
    <p style="font-family:syncc-medium; font-size: 14px; font-style: normal" > 02.</p>
    <p class="mt-n3" style="font-size: 20pt; font-style: normal;">Connect with idols.</p>
    <p class="mt-n6" style="font-size: 20pt; font-style: normal; color:#FA5257">Listen together and chat.</p>
    <p  style="font-size: 13pt; font-style: normal">
      On Syncc you can interact with your idols, listen to music and talk in a direct, fun and effortless way.
    </p>
  </v-col>
</v-row>
<!-- 3 mt-n1 -->
<v-row class="px-8 mt-12">
  <v-col
  v-if="this.$vuetify.breakpoint.md || this.$vuetify.breakpoint.lg || this.$vuetify.breakpoint.xl"
   cols="12">
  <!-- Text -->
  <p style="font-family:syncc-medium; font-size: 20px; font-style: normal" > 03.</p>
  <p class="mt-n4" style="font-size: 30pt; font-style: normal;">Discover music from people.</p>
  <p class="mt-n8" style="font-size: 30pt; font-style: normal; color:#FA5257">Not algorithms.</p>
  <p  style="font-size: 15pt; font-style: normal">Inspire others with your flawless music taste and discover new</p>
  <p class="mt-n5" style="font-size: 13pt; font-style: normal">music from friends, music influencers and artists.</p>
</v-col>
<v-col
v-else-if="this.$vuetify.breakpoint.sm"
class="px-2"
cols="12" sm="12">
<!-- Text -->
<p style="font-family:syncc-medium; font-size: 14px; font-style: normal" > 03.</p>
<p class="mt-n3" style="font-size: 25pt; font-style: normal;">Discover music from people.</p>
<p class="mt-n6" style="font-size: 25pt; font-style: normal; color:#FA5257">Not algorithms.</p>
<p  style="font-size: 16pt; font-style: normal">
  Inspire others with your flawless music taste and discover new music from friends, music influencers and artists.
</p>
</v-col>
<v-col
v-else
class="px-2"
cols="12" sm="12">
<!-- Text -->
<p style="font-family:syncc-medium; font-size: 14px; font-style: normal" > 03.</p>
<p class="mt-n3" style="font-size: 20pt; font-style: normal;">Discover music from people.</p>
<p class="mt-n6" style="font-size: 20pt; font-style: normal; color:#FA5257">Not algorithms.</p>
<p  style="font-size: 13pt; font-style: normal">
  Inspire others with your flawless music taste and discover new music from friends, music influencers and artists.
</p>
</v-col>
</v-row>
</v-container>
<!-- SECTION - 3 - Paragraphs -->
</v-col>
</v-row>

<!-- SECTION - 4 - Following -->
<v-row class="mt-8" style="background-color:#6558F9;" >
  <v-col cols="12">
    <marquee-text class="py-2" :repeat="100"  :duration="3">
      <span style="font-family:syncc-medium; font-size: 22px;" class="badge badge-success ml-2 mr-2">FOLLOW</span>
      <span style="font-family:syncc-medium; font-size: 22px;" class="badge badge-success mr-2">US</span>
    </marquee-text>
  </v-col>
</v-row>
<!-- SECTION - 4 - Following -->
<!-- SECTION - 5 - Contacting -->
<v-container class="pl-sm-0 pr-sm-0" >
  <v-row class="mt-16 px-4 mt-12">
    <v-col  cols="6" sm="6" md="3">
      <!-- Text -->
      <div v-if="this.$vuetify.breakpoint.md || this.$vuetify.breakpoint.lg || this.$vuetify.breakpoint.xl">
        <p class="mt-n4" style="font-size: 15pt; font-style: normal;">Instagram</p>
        <p class="mt-n5" ><a  style="font-size: 15pt; font-style: normal; color:#FA5257" @click="goToInstagram()">@synccapp </a></p>
      </div>
      <div v-else>
        <p class="mt-n4" style="font-size: 12pt; font-style: normal;">Instagram</p>
        <p class="mt-n5" ><a  style="font-size: 12pt; font-style: normal; color:#FA5257" @click="goToInstagram()">@synccapp </a></p>
      </div>

    </v-col>
    <v-col class="pl-2" cols="6" sm="6" md="3">
      <!-- Text -->
      <div v-if="this.$vuetify.breakpoint.md || this.$vuetify.breakpoint.lg || this.$vuetify.breakpoint.xl">
        <p class="mt-n4" style="font-size: 15pt; font-style: normal;">Get in touch</p>
        <p class="mt-n5" ><a  style="font-size: 15pt; font-style: normal; color:#FA5257; text-decoration: transparent;" href="mailto:hello@syncc.app">hello@syncc.app</a></p>
      </div>
      <div v-else>
        <p class="mt-n4" style="font-size: 12pt; font-style: normal;">Get in touch</p>
        <p class="mt-n5" ><a  style="font-size: 12pt; font-style: normal; color:#FA5257; text-decoration: transparent;" href="mailto:hello@syncc.app">hello@syncc.app</a></p>    </div>
      </v-col>
    </v-row>
  </v-container>
  <!-- SECTION - 5 - Contacting -->
</v-main>
</v-app>
</template>

<script>
import MarqueeText from 'vue-marquee-text-component'

export default {
  name: 'syncc-app',
  metaInfo: {
    title: 'Syncc with music. Download the app.',
  },
  components: {
    MarqueeText
  },
  data: () => ({
    mute: true,
    text: "Follow us ",
    os: "Computer",
    unSuportedVideo: ['MacOS','iOS'],
    apple: "fab fa-apple",
    android: "fab fa-google-play"
  }),
  methods:{
    goToInstagram(){
      window.open('https://www.instagram.com/synccapp/',"_blank");
    },
    goToAppStore(){
      window.open('https://apps.apple.com/se/app/syncc/id1497208842?l=en',"_blank");
    },
    goToAndroidStore(){
      window.open('https://play.google.com/store/apps/details?id=app.syncc.mobile.android',"_blank");
    },
    muteVideo(){
      this.mute = !this.mute
    },
    getOS() {
      var userAgent = window.navigator.userAgent,
      platform = window.navigator.platform,
      macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
      windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
      iosPlatforms = ['iPhone', 'iPad', 'iPod'],
      os = null;
      if (macosPlatforms.indexOf(platform) !== -1) {
        os = 'MacOS';
      } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = 'iOS';
      } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = 'Win';
      } else if (/Android/.test(userAgent)) {
        os = 'Android';
      } else if (!os && /Linux/.test(platform)) {
        os = 'Linux';
      }
      this.os = os
    },
    createCoolLog(){
      console.log('  ██████ ▓██   ██▓ ███▄    █  ▄████▄   ▄████▄        ▄▄▄       ██▓███   ██▓███\n▒██    ▒  ▒██  ██▒ ██ ▀█   █ ▒██▀ ▀█  ▒██▀ ▀█       ▒████▄    ▓██░  ██▒▓██░  ██▒\n░ ▓██▄     ▒██ ██░▓██  ▀█ ██▒▒▓█    ▄ ▒▓█    ▄      ▒██  ▀█▄  ▓██░ ██▓▒▓██░ ██▓▒\n  ▒   ██▒  ░ ▐██▓░▓██▒  ▐▌██▒▒▓▓▄ ▄██▒▒▓▓▄ ▄██▒     ░██▄▄▄▄██ ▒██▄█▓▒ ▒▒██▄█▓▒ ▒\n▒██████▒▒  ░ ██▒▓░▒██░   ▓██░▒ ▓███▀ ░▒ ▓███▀ ░ ██▓  ▓█   ▓██▒▒██▒ ░  ░▒██▒ ░  ░\n▒ ▒▓▒ ▒ ░   ██▒▒▒ ░ ▒░   ▒ ▒ ░ ░▒ ▒  ░░ ░▒ ▒  ░ ▒▓▒  ▒▒   ▓▒█░▒▓▒░ ░  ░▒▓▒░ ░  ░\n░ ░▒  ░ ░ ▓██ ░▒░ ░ ░░   ░ ▒░  ░  ▒     ░  ▒    ░▒    ▒   ▒▒ ░░▒ ░     ░▒ ░\n░  ░  ░   ▒ ▒ ░░     ░   ░ ░ ░        ░         ░     ░   ▒   ░░       ░░\n      ░   ░ ░              ░ ░ ░      ░ ░        ░        ░  ░\n          ░ ░                ░        ░          ░');
    }
  },
  created(){
    this.getOS()
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
