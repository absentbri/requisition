<template>
  <v-form
    ref="form"
    v-model="state.valid"
  >
    <v-card flat>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="form.hostname"
            class="my-4"
            label="Hostname"
            prepend-inner-icon="mdi-dns"
            :rules="[v => !!v || 'Hostname is required']"
            required
          />
          <v-text-field
            v-model="form.port"
            class="my-4"
            label="Port"
            prepend-inner-icon="mdi-midi-port"
            :rules="[v => !!v || 'Port is required']"
            required
          />
          <v-text-field
            v-model="form.baseUrl"
            class="my-4"
            label="Base Url"
            prepend-inner-icon="mdi-web"
          />
          <v-text-field
            v-model="form.apiKey"
            class="my-4"
            label="API Key"
            prepend-inner-icon="mdi-key"
            :rules="[v => !!v || 'API Key is required']"
            required
          />
          <v-row
            no-gutters
          >
            <v-col>
              <v-switch
                v-model="form.ssl"
                label="SSL"
                prepend-icon="mdi-lock"
              />
            </v-col>

            <v-col class="text-right">
              <v-btn
                color="warning"
                class="mr-4"
                outlined
                @click="connectivityTest"
              >
                Test
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-row no-gutters>
            <v-col cols="11">
              <v-select
                v-model="form.profile"
                class="my-4"
                :items="options.profiles"
                :rules="[v => !!v || 'Profile is required']"
                label="Default Quality Profile"
                no-data-text="No profiles available"
                clearable
              />
            </v-col>
            <v-col
              cols="1"
              align-self="center"
              align="center"
              @click="refresh('profiles')"
            >
              <v-icon class="my-4">
                mdi-refresh
              </v-icon>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="11">
              <v-select
                v-model="form.folder"
                class="my-4"
                :items="options.folders"
                :rules="[v => !!v || 'Folder is required']"
                label="Default Root Folder"
                no-data-text="No folders available"
                clearable
              />
            </v-col>
            <v-col
              cols="1"
              align-self="center"
              align="center"
              @click="refresh('folders')"
            >
              <v-icon class="my-4">
                mdi-refresh
              </v-icon>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="text-right">
          <v-btn
            color="success"
            class="mr-4"
            outlined
            @click="doSave"
          >
            Save
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-form>
</template>

<script>
export default {
  name: 'Sonarr',
  data () {
    return {
      state: {
        valid: false,
        saving: false
      },
      form: {
        hostname: '',
        port: '',
        baseUrl: '',
        apiKey: '',
        ssl: false,
        profile: null,
        folder: null
      },
      options: {
        profiles: [],
        folders: []
      }
    }
  },
  mounted () {
    this.getSettings()
  },
  methods: {
    async connectivityTest () {
      try {
        this.$toast.clear()
        const response = await this.$axios.post('/api/settings/sonarr/test', this.form)
        if (response.data) {
          await this.refresh()
          this.$toast.success('Connection Successful.')
        } else {
          throw new Error('connection failed')
        }
      } catch (e) {
        this.$toast.error(`Connection unsuccessful (${e.message})`, { icon: 'alert', duration: 5000 })
      }
    },
    async doSave () {
      this.$toast.clear()
      if (!this.state.valid) { return this.$toast.error('Unable to save, please check fields...') }
      try {
        await this.$axios.post('/api/settings/sonarr', this.form)
      } catch (e) {
        this.$toast.error('An error occurred...')
      }
    },
    async getSettings () {
      this.$nuxt.$loading.start()
      const req = await this.$axios.get('/api/settings/sonarr')
      if (req.data) {
        this.form = Object.assign({}, this.form, req.data)
        await this.refresh()
      }
      this.$nuxt.$loading.finish()
    },
    async refresh (type = 'all') {
      const req = await this.$axios.get(`/api/settings/sonarr/options/${type}`)
      this.options = Object.assign({}, this.options, req.data)
    }
  }
}
</script>

<style scoped>

</style>
