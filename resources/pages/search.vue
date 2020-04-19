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
                v-model="query"
                flat
                solo-inverted
                hide-details
                prepend-inner-icon="mdi-magnify"
                label="Search"
                @input="search"
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
  import Slate from '@/components/slate.vue'
  import { debounce } from 'lodash'

	export default {
    name: 'search',
    layout: 'private',
    data() {
      return {
        query: ''
      }
    },
    components: {
      Slate
    },
    methods: {
      async search() {
        if(this.query.length) {
          debounce(() => {
            // await this.$axios.get("")
          }, 300)
        }
      }
    }
	}
</script>
