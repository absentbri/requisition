<template>
  <v-app>
    <v-app-bar
      fixed
      app
    >
      <v-btn
        icon
        title="Home"
        nuxt
        to="/"
      >
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />

      <v-spacer />

      <v-btn
        icon
        title="Settings"
        to="/settings"
        nuxt
      >
        <v-icon>mdi-cog</v-icon>
      </v-btn>

      <v-btn
        icon
        title="Logout"
        @click="logout"
      >
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container>
        <v-responsive min-width="350">
          <nuxt />
        </v-responsive>
      </v-container>
    </v-content>

    <v-bottom-navigation
      app
      fixed
      grow
    >
      <v-btn
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        :title="item.title"
        nuxt
      >
        <span>{{ item.title }}</span>
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: 'Requisition',
      items: [
        {
          icon: 'mdi-apps',
          title: 'Dashboard',
          to: '/'
        },
        {
          icon: 'mdi-magnify',
          title: 'Search',
          to: '/search'
        },
        {
          icon: 'mdi-view-list',
          title: 'Requests',
          to: '/requests'
        },
        {
          icon: 'mdi-alert-circle-outline',
          title: 'Issues',
          to: '/issues'
        }
      ]
    }
  },
  methods: {
    async logout () {
      await this.$auth.logout()
    }
  }
}
</script>

<style lang="scss">
  body {
    /* feel this should come from the dark theme?? */
    background: black;
  }
  .container {
    max-width: 1200px;
  }
  /* remove the active background from home button*/
  .v-btn:not(.v-btn--text):not(.v-btn--outlined).v-btn--active:before {
    opacity: 0;
  }
</style>
