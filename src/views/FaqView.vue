<template lang="html">
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
        @click="goToHome()"
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
      @click="goToHome()"
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
    @click="goToHome()"
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
  </div>
</v-row>

</v-container>
<!-- NAV BAR -->

<!-- SECTION - 1 - Privacy -->
<v-container style="padding:0px" class="mt-14 pa-sm-0 pr-sm-0">
  <div class="ml-5">

    <h3>Syncc FAQ</h3>

    <p><b>How do I install Syncc?
    </b><br><br>Click on the download button in the email. This will install Testflight on the first time. Click on the link in the email again to redeem Syncc Alpha access.</p>

    <p><b>What can I do if the app is collapsing or my playlists aren’t imported correctly?
    </b><br><br>Swipe away both Syncc and Spotify and restart Syncc.</p>

    <p><b>How do I end a session?
    </b><br><br>Go into the session chat room and press “End session” in the upper left corner.</p>

    <p><b>My username and profile picture doesn’t appear on my profile?
    </b><br><br>Swipe away Syncc and restart. The profile picture is imported from your Spotify profile when you register. This will be improved in future versions.</p>

    <p><b>Why does it “bounce” to Spotify and back to Syncc when I play the first song?
    </b><br><br>Spotify requires authorization for the first track. This will be improved in future versions.</p>

    <p><b>When I create a new session it also creates a new playlist on Spotify, why?
    </b><br><br>A temporary playlist will be created on Spotify. If you want to remove it go into the session and press “End session” in the upper left corner. This will be improved in future version.</p>

    <p><b>When joining a friends session, the music played is not in exact sync. What can we do to make it in sync?
    </b><br><br>Try restarting Syncc and rejoining the session. In case the offset is on the host, they will need to the same thing.</p>

    <p><b>Why can’t I queue songs to my session after creating one?
    </b><br><br>Queue and playlist management is coming in the next version.</p>

    <p>&nbsp;</p>
    <p>If this didn't solve your issue, drop us an email <a href="mailto:support@syncc.app">support@syncc.app</a><br><br>
      <b>Syncc team</b></p>
      <p>&nbsp;</p>
    </div>
  </v-container>
</v-col>
</v-row>
</template>

<script>
export default {
  methods:{
    goToInstagram(){
      window.open('https://www.instagram.com/synccapp/',"_blank");
    },
    goToHome(){
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style lang="css" scoped>
h3 {

  letter-spacing:-0.05em
}
b {
  color: #f05459;
}
p {
  max-width: 480px;
  margin-top: 3em;
  letter-spacing:-0.05em
}
</style>
