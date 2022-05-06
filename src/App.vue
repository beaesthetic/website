<template>
  <v-app>
    <AppBar/>
    <v-main>
      <router-view></router-view>
    </v-main>
    <app-footer/>
  </v-app>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;1,600&display=swap');

.background-pink {
  background-color: #fff1ff !important;
  color: black !important;
}

</style>

<script>
import AppBar from './components/AppBar.vue'
import appFooter from '@/views/sections/AppFooter'

export default {
  name: 'App',
  components: {
    AppBar,
    'app-footer': appFooter,
  }
}
</script>
