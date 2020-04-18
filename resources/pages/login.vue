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
        <v-alert
          v-model="alert.show"
          :type="alert.type"
          v-text="alert.text"
          dismissible
        />
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
    name: 'login',
    layout: 'pretty',
    auth: 'guest',
    data() {
      return {
        login: {
          username: "",
          password: ""
        },
        alert: {
          show: false,
          type: 'error',
          text: ''
        }
      }
    },
    methods: {
      async userLogin() {
        if(!this.login.username.length && !this.login.password.length) return false
        let outcome = true;
        try {
          const req = await this.$auth.loginWith('local', { data: this.login })
          outcome = req.data.success
        } catch (err) { }
        if(!outcome) {
          this.$toast.error('Username or password invalid.')
        }
      }
    }
  }
</script>
