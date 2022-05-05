<template>
  <v-app-bar fixed elevate-on-scroll ref="appbar" :color="appBarColor" dark prominent>
      <v-container fill-height>
        <v-layout row wrap align-center>
          <v-img src="/img/be-aesthetic-fit.png" max-width="190" contain aspect-ratio="2.24"></v-img>
          <v-spacer></v-spacer>

          <v-row class="text-right hidden-sm-and-down">
            <v-col>
              <template v-for="item in menu">
                <v-btn 
                  :key="item.goto_id"
                  :x-small="$vuetify.breakpoint.smAndDown"
                  @click="menuItemClick(item)" 
                  text color="black"
                  :class="{'active': selectedMenuItem != undefined && item.section_name == selectedMenuItem.section_name}"
                > {{ item.section_name }}</v-btn>
            </template>
            </v-col>
          </v-row>


          <v-btn icon v-if="isMobile" class="hidden-md-and-up">
            <v-icon color="black">mdi-menu</v-icon>
          </v-btn>
          
          <!-- <v-menu >
            <template v-slot:activator="{ on }">
              <v-btn icon v-on="on">
                <v-icon color="black">mdi-menu</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="item in menu" :key="item.goto_id">
                  <v-list-item-title @click="menuItemClick(item)">
                    {{ item.section_name }}
                  </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu> -->

        </v-layout>
      </v-container>
  </v-app-bar>
</template>

<style scoped>
.v-btn.active {
  background-color: antiquewhite !important;
}

v-btn:hover:before {
  opacity: 0 !important;
}
</style>

<script>
export default {
  data: () => ({
    appBarScrolled: false,
    currentRoute: '',
    menu: [
      { section_name: "Trattamenti", goto_id: "#services", route: "/services" },
      { section_name: "Dove", goto_id: "#section-where-i-am", route: 's'},
      { section_name: "Orari", goto_id: "#timetables", route: 's'},
      { section_name: "Marchi", goto_id: "#partners", route: 's' },
      { section_name: "Contatti", goto_id: "#contacts", route: 's'},
    ]
  }),
  methods: {
    menuItemClick: function(item) {
      if('goto_id' in item) {
        this.$vuetify.goTo(item.goto_id, this.options)
      } else if('ref' in item) {
        window.location.href = item.ref
      }
      return false;
    }
  },
  computed: {
    appBarColor: function() {
      return this.appBarScrolled ? 'white' : 'white';
    },
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },
    selectedMenuItem() {
      return this.menu.find(item => {
        return this.$route.path.startsWith(item.route)
      })
    }
  },
  watch: {
    $route (to) {
      let path = to.path;
      this.currentRoute = path;
    }
  },
  mounted: function() {
    this.$watch("$refs.appbar.hideShadow", newValue => {
      this.appBarScrolled = !newValue
    });
  }
}
</script>

<style scoped>
.app-bar {
  min-height: 90px !important;
}
</style>