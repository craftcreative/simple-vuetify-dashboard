<template>
  <v-container fluid>

    <v-row justify-center align="center">
      <v-col class="text-center" sm="12" md="4">
        <!-- CARD - Login Form -->
        <v-card class="mx-auto mt-5" max-width="400" raised :loading="loading">
          <v-card-title d-flex justify-center class="pb-7" primary-title>
            <v-avatar class="mx-auto" :size="150" color="primary">
              <v-icon x-large color="primary"></v-icon>
            </v-avatar>
          </v-card-title>
          <v-card-text>
            <v-form>
              <!-- TEXT - E-mail -->
              <v-text-field v-model="user.email" label="E-mail"></v-text-field>
              <!-- TEXT - Password -->
              <v-text-field v-model="user.password" label="Password"></v-text-field>
              <!-- TEXT - Login btn -->
              <v-btn mr-4 color="primary" @click="login">Login</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    loading:false,
    user: {
      email: "",
      password: ""
    }
  }),
  methods:{
    login(){
      this.loading = true;
      this.$store.dispatch("login", this.form).then(data => {
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
