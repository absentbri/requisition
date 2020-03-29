<template>
  <v-container>
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="8"
        md="4"
      >
        <v-card class="elevation-12">
          <v-toolbar
            color="primary"
            flat
          >
            <v-toolbar-title>Login form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form @keyup.native.enter="login">
              <v-text-field
                label="Login"
                name="login"
                type="text"
                prepend-icon="mdi-account"
                v-model="username"
              />

              <v-text-field
                id="password"
                label="Password"
                name="password"
                type="password"
                prepend-icon="mdi-lock"
                v-model="password"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" @click="login">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    layout: 'login',
    data() {
      return {
        username: "",
        password: ""
      }
    },
    methods: {
      async login() {
        const { username, password } = this;
        if(this.username.length && this.password.length) {
          const authMe = await this.$axios.post("/api/auth/basic", {
            username,
            password
          });
        }
      }
    }
  }
</script>
