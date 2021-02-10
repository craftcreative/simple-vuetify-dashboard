<template lang="html">
  <v-container fluid>
    <v-row justify-center align="center">
      <v-col class="text-center" sm="12">
        <!-- CARD - Login Form -->
        <v-card class="mx-auto mt-5" max-width="550" raised :loading="loading"   elevation="10">
          <template slot="progress">
            <v-progress-linear color="red" indeterminate></v-progress-linear>
          </template>

          <v-card-title d-flex justify-center class="pb-7" primary-title>
            <v-avatar class="mx-auto" :size="250">
              <img alt="Syncc Logo" src="@/assets/logo.png">
            </v-avatar>
          </v-card-title>
          <v-card-text>
            <v-form >
              <!-- TEXT - Login btn -->
              <v-btn
              elevation="10"
              large
              raised
              :loading = "loading"
              class="mb-4"
              color="#1DB954"
              @click="login">
              <v-icon left dark> mdi-spotify</v-icon>
              Login whit Spotify
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    dialog:false,
    loading:false,
    showPass: false,
    spotify_access: {
      access_token: "",
      refresh_token: "",
      expires_in: ""
    }
  }),
  methods:{
    login(){
      this.$router.push({ name: "spotifyLogin"})
    }
  },
  created(){
    if (this.$route.query.access_token != undefined && this.$route.query.access_token != null){
      this.loading = true;
      this.spotify_access.access_token = this.$route.query.access_token
      this.spotify_access.refresh_token = this.$route.query.refresh_token
      this.spotify_access.expires_in  = this.$route.query.expires_in

      this.$store.dispatch("login", this.spotify_access).then(data => {
        console.log("Data"+data);
        this.loading = false;
        this.$router.push("/");
      })
      .catch(err => {
        if(err.response.status === 422){
          this.loading = false;
          console.log("ERROR -> Something happend");
        }
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
