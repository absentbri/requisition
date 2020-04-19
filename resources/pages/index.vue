<template>
  <v-row dense>
    <v-col cols="12">
      <v-card>
        <v-card-title class="headline">Trending</v-card-title>

        <v-card-subtitle>Current trending videos are listed below, want something else? search here</v-card-subtitle>

        <v-card-actions>
          <v-btn
            text
            to="/search"
            nuxt
          >
            Search Now
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>

    <v-col
      v-for="(item, i) in items"
      :key="i"
      cols="12"
    >
      <slate v-bind="item" />
    </v-col>
  </v-row>
</template>

<script>
import Slate from '@/components/slate.vue'

export default {
  name: 'index',
  layout: 'private',
  components: {
    Slate
  },
  data () {
    return {
      items: [
        {
          title: 'Hunt for Red October',
          overview: 'A new, technologically-superior Soviet sub, the Red October, is heading for the U.S. coast under the command of Captain Marko Ramius. The American government thinks Ramius is planning to attack. A lone CIA analyst has a different idea: he thinks Ramius is planning to defect, but he has only a few hours to find him and prove it — because the entire Russian naval and air commands are trying to find him, too.',
          poster: 'https://image.tmdb.org/t/p/original/bqvlKYlWq2uibsuVzKTWseeccd2.jpg',
          backdrop: 'https://image.tmdb.org/t/p/original/pXBGI43RCsbxNQNEPnkXC6GQMx3.jpg',
          quality: '1080p',
          available: true
        },
        {
          title: '1917',
          overview: 'At the height of the First World War, two young British soldiers must cross enemy territory and deliver a message that will stop a deadly attack on hundreds of soldiers.',
          poster: 'https://image.tmdb.org/t/p/original/AuGiPiGMYMkSosOJ3BQjDEAiwtO.jpg',
          backdrop: 'https://image.tmdb.org/t/p/original/2lBOQK06tltt8SQaswgb8d657Mv.jpg',
          quality: '1080p',
          available: false
        },
        {
          title: 'Saving Private Ryan',
          overview: 'As U.S. troops storm the beaches of Normandy, three brothers lie dead on the battlefield, with a fourth trapped behind enemy lines. Ranger captain John Miller and seven men are tasked with penetrating German-held territory and bringing the boy home.',
          poster: 'https://image.tmdb.org/t/p/original/gc7IN6bWNaWXv4vI6cxSmeB7PeO.jpg',
          backdrop: 'https://image.tmdb.org/t/p/original/hjQp148VjWF4KjzhsD90OCMr11h.jpg',
          quality: '1080p',
          available: true
        },
        {
          title: 'Fury',
          overview: 'In the last months of World War II, as the Allies make their final push in the European theatre, a battle-hardened U.S. Army sergeant named \'Wardaddy\' commands a Sherman tank called \'Fury\' and its five-man crew on a deadly mission behind enemy lines. Outnumbered and outgunned, Wardaddy and his men face overwhelming odds in their heroic attempts to strike at the heart of Nazi Germany.',
          poster: 'https://image.tmdb.org/t/p/original/fa4PxEPRKWRyjzYje1jM4m30qzd.jpg',
          backdrop: 'https://image.tmdb.org/t/p/original/pKawqrtCBMmxarft7o1LbEynys7.jpg',
          quality: '1080p',
          available: true
        }
      ]
    }
  }
}
</script>
