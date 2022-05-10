<template>
    <div id="service-detail">
        <div v-if="service !== undefined">
            <v-img 
                width="100%"
                :src="service.thumbnail"
                position="center center"
                :aspect-ratio="headerAspectRatio"
                gradient="to top, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.2) 100%">

                <v-container fill-height class="service-header">
                    <v-row>
                        <v-col class="white--text" cols="10" offset="1" sm="8" offset-sm="2" md="6" offset-md="3" lg="6" offset-lg="3" xl="6" offset-xl="3">
                            {{ service.title }}
                            <v-divider class="my-4 white"></v-divider>
                        </v-col>
                    </v-row>
                </v-container>
            </v-img>
            <v-row class="my-5 fill-height">
                <v-col cols="10" offset="1" sm="8" offset-sm="2" md="6" offset-md="3" lg="6" offset-lg="3" xl="6" offset-xl="3">
                    <template v-for="(description, index) in service.descriptions">
                        <div :key="index">
                            <service-detail-description 
                                :name="description.name"
                                :subtitle="description.subtitle"
                                :description="description.description"
                                :image="description.image"/>
                            <v-divider class="my-4 black" v-show="index < service.descriptions.size - 1"></v-divider>
                        </div>
                    </template>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<style scoped>
.fill-viewport {
    height: 100vh;
}
.service-header {
    font-family: 'Montserrat';
    font-size: 1.5em;
    font-weight: bold;
}
</style>

<script>
import { createNamespacedHelpers } from 'vuex'
import serviceDetailDescription from '@/components/ServiceDetailDescription'

const { mapGetters } = createNamespacedHelpers('services');

export default {
    name: 'ServicePageDetail',
    components: {
        'service-detail-description': serviceDetailDescription
    },
    computed: {
        ...mapGetters([
            'services'
        ]),
        service: function () {
            if (this.services !== undefined) {
                return this.services.find(service => service.name == this.$route.params.serviceName)
            }
            return {};
        },
        headerAspectRatio() {
            return this.$vuetify.breakpoint.smAndDown ? 2 : 5;
        },
    },
    mounted() {
        var fixedElement = document.getElementsByClassName('v-app-bar')[0];
        var layout = document.getElementById('service-detail');
        layout.style = "margin-top: "+ fixedElement.offsetHeight + 'px !important';
    },
};
</script>