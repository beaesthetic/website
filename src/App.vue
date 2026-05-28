<template>
  <v-app>
    <AppBar v-if="showSiteChrome" @toggleDrawer="toggleDrawer" :menu="routes"/>
    <AppNavigationDrawer v-if="showSiteChrome" v-model="drawer" :menu="routes"/>
    <v-main>
      <router-view></router-view>
    </v-main>
    <app-footer v-if="showSiteChrome"/>
  </v-app>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;1,600&display=swap');

.background-pink {
  background-color: antiquewhite !important; /* fff1ff */
  color: black !important;
}

</style>

<script>
import * as routes from '@/data/routes.yml'
import AppBar from './components/AppBar.vue'
import AppNavigationDrawer from '@/components/AppNavigationDrawer'
import appFooter from '@/views/sections/AppFooter'

export default {
  name: 'App',
  components: {
    AppBar,
    AppNavigationDrawer,
    'app-footer': appFooter,
  },
  methods: {
    toggleDrawer: function () {
      this.drawer = !this.drawer
    }
  },
  computed: {
    showSiteChrome() {
      return !(this.$route.meta && this.$route.meta.standaloneLayout);
    }
  },
  data: () => ({
    drawer: false,
    routes: routes,
  })
}
</script>
