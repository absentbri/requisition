<template>
  <v-app>
    <span class="bg"></span>
    <v-content>
      <v-container
        fill-height
        fluid
      >
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="scss">
  .bg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: url("/login.png") no-repeat center center;
    background-size: cover;
    transform: scale(1.1);
  }
  /* Hax... */
  .theme {
    &--dark, &--light{
       &.v-application{
        background: inherit;
      }
    }
  }
</style>
