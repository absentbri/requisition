<template>
  <v-container>
    <v-row dense>
      <v-col>
        <v-card>
          <v-card-title class="headline">
            Settings
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col>
        <v-card class="pa-4">
          <v-tabs
            v-model="tab"
            vertical
          >
            <v-tab
              v-for="(item,idx) in items"
              :key="idx"
              class="justify-start"
            >
              <v-icon left>
                {{ item.icon }}
              </v-icon>
              <span
                class="hidden-xs-only"
                v-html="item.text"
              />
            </v-tab>

            <v-tab-item
              v-for="(item,idx) in items"
              :key="idx"
              :transition="false"
              :reverse-transition="false"
            >
              <component
                :is="item.component"
              />
            </v-tab-item>
          </v-tabs>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import General from '@/components/settings/general.vue'
import Users from '@/components/settings/users.vue'
import Sonarr from '@/components/settings/sonarr.vue'
import Radarr from '@/components/settings/radarr.vue'
import Notifications from '@/components/settings/notifications.vue'

export default {
  name: 'Settings',
  layout: 'private',
  components: {
    General,
    Users,
    Sonarr,
    Radarr,
    Notifications
  },
  data () {
    return {
      tab: null,
      items: [
        {
          text: 'General',
          component: 'general',
          icon: 'mdi-cog'
        },
        {
          text: 'Users',
          component: 'users',
          icon: 'mdi-account'
        },
        {
          text: 'Sonarr',
          component: 'sonarr',
          icon: 'mdi-radio-tower'
        },
        {
          text: 'Radarr',
          component: 'radarr',
          icon: 'mdi-satellite-uplink'
        },
        {
          text: 'Notif<span class="hidden-sm-only">ication</span><span class="hidden-md-and-up">y</span>',
          component: 'notifications',
          icon: 'mdi-bell'
        }
      ]
    }
  }
}
</script>
