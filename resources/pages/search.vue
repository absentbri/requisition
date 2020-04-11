<template>
  <v-layout>
    <v-row dense>
      <v-col cols="12">
        <v-card>
          <v-card-title class="headline">
            Search
          </v-card-title>
           <v-card-text>
             <v-text-field
                flat
                solo-inverted
                hide-details
                prepend-inner-icon="mdi-magnify"
                label="Search"
              />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-card-text>
             Stuffs
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
	export default {
    name: 'search',
    layout: 'private'
	}
</script>
