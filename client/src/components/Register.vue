<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <Panel title="Register">
        <form name="tab-tracker-form" autocomplete="off">
          <v-text-field label="Email" v-model="email"></v-text-field>
          <v-text-field label="Password" type="password" v-model="password" autocomplete="new-password"></v-text-field>
          <v-alert :value="error" transition="scale-transition" error>
            {{error}}
          </v-alert>
          <br>
          <v-btn class="cyan" dark @click="register">
            Register
          </v-btn>
        </form>
      </Panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    async register() {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        });
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.token);
        this.$router.push({ name: "songs" });
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
