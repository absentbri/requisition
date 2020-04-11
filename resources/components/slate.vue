<template>
  <!-- background here is not ideal but v-img with content slot wasn't playing ball...-->
  <v-card
    min-width="350"
    :style="`background-image: linear-gradient(rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.6) 100%), url(${backdrop}); background-position: center center; background-size: cover;`"
  >

    <v-row dense>

      <v-col cols="12" sm="2">
        <v-img
          :src="poster"
          width="245"
          height="245"
          contain
        />
      </v-col>

      <v-col cols="12" sm="7" md="8">
         <v-card-title
          class="headline"
          v-text="title"
        />

        <div class="ml-4">
          <v-chip
            :color="available ? 'green' : 'red'"
            pill
            small
            v-text="available ? 'Available' : 'Missing'"
          />
        </div>

        <v-card-text v-text="overview" />
      </v-col>

      <v-col cols="12" sm="3" md="2">

        <div class="ma-4 d-flex flex-column">

          <v-btn
            v-if="available"
            class="mb-2"
            color="primary"
            min-width="90"
            outlined
          >
            <v-icon left>
              mdi-plus
            </v-icon> Request
          </v-btn>
          <v-btn
            v-else
            class="mb-2"
            color="success"
            outlined
          >
            <v-icon left>
              mdi-check
            </v-icon> Available
          </v-btn>

          <v-btn
            v-if="available"
            class="mb-2"
            color="warning"
            outlined
            small
          >
            <v-icon left>
              mdi-alert-circle-outline
            </v-icon>
            Issue
          </v-btn>

          <v-btn
            class="mb-2"
            color="primary"
            outlined
            small
          >
            <v-icon left>
              mdi-magnify
            </v-icon>
            Similar
          </v-btn>

        </div>

      </v-col>

    </v-row>

  </v-card>
</template>

<script>
export default {
  name: 'Slate',
  props: {
    title: String,
    overview: String,
    poster: String,
    backdrop: String,
    quality: String,
    available: Boolean
  }
}
</script>

<style scoped>

</style>
