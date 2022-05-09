<template>
    <v-navigation-drawer
        class="hidden-md-and-up"
        v-model="model"
        temporary
        right
        app
      >
        <v-list-item class="my-5">
            <v-img src="/img/be-aesthetic-fit.png" 
                max-width="190" 
                contain aspect-ratio="2.24" 
                @click.stop="$router.push('/')"/>
        </v-list-item>

        <v-divider class="mb-5"></v-divider>

        <v-list-item v-for="(route, index) in routes" :key="index" 
            link 
            :class="{'active': selectedMenuItem != undefined && route.section_name == selectedMenuItem.section_name}"
            @click="menuItemClick(route)"
            >
            <v-list-item-content>
                <v-list-item-title>{{ route.section_name }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>

    </v-navigation-drawer>
</template>

<style scoped>
.v-list-item.active {
  background-color: antiquewhite !important;
}

v-list-item:hover:before {
  opacity: 0 !important;
}
</style>

<script>
export default {
    name: 'AppNavigationDrawer',
    props: {
        value: {
            type: Boolean,
            default: false
        },
        menu: Array,
    },
    methods: {
        menuItemClick: function(item) {
            if ('route' in item) {
                this.$router.push(item.route);
            }
            return false;
        },
    },
    computed: {
      model: {
        get() {
          return this.value
        },
        set(value) {
          this.$emit('input', value)
        }
      },
      selectedMenuItem() {
        return this.menu.find(item => {
                return this.$route.path.startsWith(item.active_route)
            });
        }
    },
    watch: {
        $route (to) {
            let path = to.path;
            this.currentRoute = path;
            console.log(this.currentRoute);
        }
    },
    data() {
        return {
            routes: this.menu,
            currentRoute: '',
        };
    },
            
}
</script>