<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <v-btn flat dark to="/">
        TabTracker
      </v-btn>
    </v-toolbar-title>

    <!-- TODO: IMPLEMENT ME -->
    <!-- <v-toolbar-items>
      <v-btn flat dark>
        Browse
      </v-btn>
    </v-toolbar-items> -->
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn v-if="!$store.state.isUserLoggedIn" flat dark to="login">
        Login
      </v-btn>
      <v-btn v-if="!$store.state.isUserLoggedIn" flat dark to="register">
        Sign up
      </v-btn>
      <v-btn @click="logout" v-if="$store.state.isUserLoggedIn" flat dark>
        Logout
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: "PageHeader",
  methods: {
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$router.push({
        name: "root"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
