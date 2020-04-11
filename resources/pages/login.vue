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
        <v-form @submit.prevent="userLogin">
          <v-card class="elevation-12">
            <v-toolbar
              color="primary"
              flat
            >
              <v-toolbar-title>Login form</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
                <v-text-field
                  label="Username"
                  name="login"
                  type="text"
                  prepend-icon="mdi-account"
                  v-model="login.username"
                />

                <v-text-field
                  id="password"
                  label="Password"
                  name="password"
                  type="password"
                  prepend-icon="mdi-lock"
                  v-model="login.password"
                />
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn color="primary" type="submit">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    layout: 'pretty',
    auth: 'guest',
    data() {
      return {
        login: {
          username: "",
          password: ""
        }
      }
    },
    methods: {
      async userLogin() {
        try {
          let response = await this.$auth.loginWith('local', { data: this.login })
        } catch (err) {
          console.log(err)
        }
      }
    }
  }
</script>
