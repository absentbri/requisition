<template>
  <v-app>

    <v-app-bar
      :clipped-left="true"
      fixed
      app
    >
      <v-toolbar-title v-text="title" />

      <v-spacer />

      <v-btn
        icon
        title="Logout"
        @click="logout"
      >
        <v-icon>mdi-logout</v-icon>
      </v-btn>

    </v-app-bar>

    <v-navigation-drawer
      :mini-variant="true"
      :clipped="true"
      :permanent="true"
      fixed
      app
    >

      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          :title="item.title"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <!-- retained due to https://github.com/vuetifyjs/vuetify/issues/2830 -->
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer app>
      <v-spacer />
      <span>Requisition Version 0.0.1</span>
      <v-spacer />
    </v-footer>

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
    async logout() {
      await this.$auth.logout();
    }
  }
}
</script>

<style lang="scss">
  body {
    // feel this should come from the dark theme??
    background: black;
  }
  .container {
    max-width: 1200px;
  }
</style>
