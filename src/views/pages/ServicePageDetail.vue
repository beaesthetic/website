<template>
    <div id="service-detail">
        <v-img 
            width="100%"
            :src="service.thumbnail"
            position="center center"
            aspect-ratio="5"
            gradient="to top, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.2) 100%">

            <v-container fill-height class="service-header">
                <v-row>
                    <v-col cols="7" offset="3" class="white--text">
                        {{ service.title }}
                        <v-divider class="my-4 white"></v-divider>
                    </v-col>
                </v-row>
            </v-container>
        </v-img>
        <v-row class="my-5 fill-height">
            <v-col cols="6" offset="4">
                <template v-for="(description, index) in service.descriptions">
                    <div :key="index" class="single-description">
                        <h3 class="mt-5">{{ description.name }}</h3>
                        <p class="mt-2">{{ description.description }}</p>
                        <v-divider class="my-4 black" v-show="index < service.descriptions.size - 1"></v-divider>
                    </div>
                </template>
            </v-col>
        </v-row>
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
.single-description {
    font-family: 'Montserrat';
}
.single-description h3 {
    font-size: 1.1em;
    font-weight: bold;
}
.single-description p {
    font-size: 0.9em;
}
</style>

<script>
import services from '@/data/services.yml'

export default {
    name: 'ServicePageDetail',
    data() {
        return {
            service: services.services.find(service => service.name == this.$route.params.serviceName),
        };
    },
    mounted() {
        var fixedElement = document.getElementsByClassName('v-app-bar')[0];
        var layout = document.getElementById('service-detail');
        layout.style = "margin-top: "+ fixedElement.offsetHeight + 'px !important';
        console.log(services.services.find(service => service.name == this.$route.params.serviceName));
    },
    methods: {
        //
    },
};
</script>