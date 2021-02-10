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
  <h1>Privacy policy</h1>

  <p class="pp">Through this privacy policy, Muzyncc AB (publ) (“SYNCC”, “we”, “us” and/or “our”) wish to inform you, as a user of our services (“You” and/or “Your”) about our processing of personal data and protection of privacy, and the principles that governs our use of personal data in our SYNCC application (the “Service”).</p>
  <p class="pp">Here You can read about our what measures we take to protect Your integrity and which rights You have in connection with our processing of Your personal data. Protecting Your privacy and complying with applicable data protection legislation is important to us.
  </p>
  <p class="pp">For all processing of personal data described in this privacy policy, Muzyncc AB (publ) acts as controller of personal data, within the meaning of the EU General Data Protection Regulation (the “GDPR”), if nothing else is stated herein. If You wish to contact us regarding our processing of personal data, our contact information is found herein below (section 7).</p>

  <h2 class="mb-2">1. Personal data which we collect</h2>
  <p class="pp">The Service is available only to registered users. When You create an account and begin to use the Service, we ask You to connect your Spotify account, for Your name and a username. There is no obligation or legal requirement for You to provide the data. However, it is necessary for us to collect and save the data in order for You to be able to set up a user account on the Service, and for us, to administer Your account. </p>
  <p class="pp">Your SYNCC profile may contain the following:<br>
    • Your profile picture and profile information; <br>
    • Music sessions (playlists you have created on SYNCC); <br>
    • List of users you follow and users who follow you; <br>
    • Imported playlists from Spotify;
  </p>

  <p class="pp">Your profile may be available to all registered users of the Service. However, other users can only see your public playlists imported from Spotify. Unless you start a “private session” (a chatroom with only invited users where you can listen together and chat), the songs you listen to with the App will appear in your followers’ music feed and discovery. Followers may then join you in listening to the music, add the songs to their own playlist or share the music with other friends (collectively, “Music Activities”). You may save your sessions to your profile which then will be visibile to all registered users of the Service. </p>
  <p class="pp"><b>Your Activities.</b> We collect content that you make available on the Service, such as your profile information (Spotify account details and full name), playlists, photos, comments and messages. Unless you decide to start a private session (as further explained above), that content is not treated as private or confidential and you should not have any expectation of privacy with respect to it. </p>
  <p class="pp"><b>Information we automatically collect</b></p>
  <p class="pp"><b>Analytical data.</b> We may use third party analytics tools to collect information about your use of the Service and create statistics from such information. For example, we may record the frequency and scope of your use of the Service, the duration of your sessions, the interactions and communications you make with the Service’s interface (played songs, liked songs, shared songs etc.), and content that you view or post while using the Service.
  </p>
  <p class="pp"><b>Device Information.</b> We may collect information about your personal computer or mobile device, including its model, operating system, unique device identifiers, browser type, mobile network information and the Internet Protocol (IP) address through which you accessed the Service. </p>
  <p class="pp"><b>Features we have access to.</b> Subject to your explicit consent, we have access to the following features and collect the following information: your device’s camera, photo album and microphone. You may decline to give us access to your camera, photo album and microphone, but in that case, you may not be able to enjoy the full features of the Service. In addition, we may have access to your lock screen, system clock, cache storage, push notifications and messaging app for the purpose of providing you the various features of the App.
  </p>
  <p class="pp">By using the Service, additional user generated content will be created and saved, such as role, plays, users following You, Your followed users, playlists, tracks, comments and voice messages, and including a unique authentication id.</p>

  <h2 class="mb-2">2. Use of collected data</h2>
  <p class="pp">Your consent serves as the legal basis for processing your information. You may withdraw consent at any time, without affecting the lawfulness of data processing we carried out based on your consent before such withdrawal. </p>
  <p class="pp">We may use the information we collect for the following purposes: <br>
    • Operating the Services and providing their features and functionalities; <br>
    • Sending you updates, recommendation based on your Music Activities, notifications and push notifications, conduct surveys and send you other communications related to the Service;  <br>
    • Improving and customizing the Services and developing new services;  <br>
    • Collecting statistical and aggregated information about users’ experience within the Services; <br>
    • Providing you with support, handling complaints and contacting you when we believe it is necessary;  <br>
    • Enforcing the Terms and this Policy and preventing misuse of the Services; <br>
    • Complying with any applicable law and assisting law enforcement agencies and competent authorities, if we believe it is necessary or justified; and  <br>
    • Taking any action in any case of dispute involving you, with respect or in relation to the App. </p>

    <h2 class="mb-2">3. Recipients who can review personal data</h2>
    <p class="pp">We use the personal data solely within our own organisation to administrate, operate and develop the Service, and do not sell, trade or otherwise transfer personal data. However, it may be transferred to and shared with other recipients, such as other group companies or service providers or other companies with which we cooperate, e.g. personal data processors who we retain to process personal data. In such events, all transfers of the personal data are regulated though agreements to secure the protection and integrity of our users’ personal data. The personal data is stored on Digitalocean data centres in Amsterdam, Netherlands. In particular, developers will be able to access the data, and so also administrators handling developer access.</p>
    <p class="pp">We do not transfer collected personal data to a third country, i.e. any country outside of the EU/EEA. However, transfer may take place if, for example, we have retained a processor to carry out certain processing. Transfer of personal data to a third country always requires a legal basis for such transfer.</p>

    <h2 class="mb-2">4. Length of time that the data is stored</h2>
    <p>Personal data is saved for as long as You have an account and a user relationship to the Service and to us. However, Your account and data may be erased if no meaningful usage of the account has taken place and a period of 12 consecutive months has elapsed.
      If You wish to close Your user account, You can easily do it in the account settings while You are logged in.
    </p>
    <p class="pp">When Your account has been closed, we will erase Your personal data without delay and no later than required from time to time under applicable data protection legislation, or an order of a court or public authority. Your data may be stored otherwise for a longer time if we are subject to applicable legislation requiring us to continue to store the data.</p>

    <h2 class="mb-2">5. Information regarding Your rights under the General Data Protection Regulation</h2>
    <p class="pp">
      According to the provisions of the EU General Data Protection Regulation (GDPR), You have rights including the following:<br>
      - To obtain, free of charge and upon request, access to, and a copy of, the personal data about you which is processed (Article 15);<br>
      - To have inaccurate information rectified or incomplete data completed (Article 16);<br>
      - To request, in those cases and subject to the conditions stated in the GDPR, erasure of your personal data (Article 17);<br>
      - To obtain restriction of such processing which involves your personal data (Article 18);<br>
      - To object to the processing which takes place (Article 21); and<br>
      - To receive and transfer such personal data which you have provided to us in accordance with what is known as the right to data portability (Article 20).</p>

      <h2 class="mb-2">6. Revocation of consent, deregister from receiving newsletters and other mailouts
      </h2>
      <p class="pp">To the extent we process personal data, and this is based on You consent, You are entitled to revoke Your consent at any time. You can always deregister from receiving newsletters or other mailouts by notifying us at any time, or by clicking on the deregistration link in each respective communication we send You.
      </p>

      <h2 class="mb-2">7. Revocation of consent, deregister from receiving mailouts</h2>
      <p class="pp">Muzyncc AB (publ) operates and is responsible for the Service and is the controller for the processing of personal data which takes place.<br>
        Muzyncc AB (publ), Swedish companies reg. no: 559224-7091 <br>
        Postal address: Grevgatan 40, 114 53 Stockholm, Sweden <br>
        Email: hello@syncc.app </p>

        <h2 class="mb-2">8. Right to submit a complaint</h2>
        <p class="pp">If You are dissatisfied or have any criticism of the processing of personal data which is carried out, You are always entitled to submit a complaint to the Swedish Data Protection Authority, or to any other relevant supervisory authority. For contact information and other information about the Swedish Data Protection Authority, we refer to the authority’s website www.datainspektionen.se/other-lang/in-english/.</p>

        <h2 class="mb-2">9. Changes to this privacy policy</h2>
        <p class="pp">We may come to make changes and amendments to this privacy policy over time. When these changes and/or amendments are material we will inform You in a manner we see appropriate to ensure that You have received the information. This may be through sending You an email, through an information notice in the Service, or in another manner. We encourage You to read such notices carefully.</p>

        <h2 class="mb-2">10. Applicable law</h2>
        <p class="pp">We are a Swedish company domiciled in Sweden. This privacy policy shall be construed in accordance with the laws of Sweden and the from time to time applicable mandatory EU legislation, unless consumer protection legislation demands otherwise.</p>

        <p>&nbsp;</p>
        <p class="pp"><b>Syncc team</b></p>

        <p>Date 15.6.2020</p>
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
.pp {
  letter-spacing:-0.05em
}
</style>
