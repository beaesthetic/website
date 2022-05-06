<template>
    <v-container class="py-16 px-4">
        <v-row>
            <v-col>
                <div class="text-h5 mb-3 text-center service-section-title">Trattamenti Professionali</div>
                <v-divider class="my-4 mx-12 black"></v-divider>
            </v-col>

        </v-row>
        <v-row dense class="mt-3">
            <v-col 
                v-for="(service, index) in services" 
                :key="index" 
                class="d-flex child-flex pa-0"
                cols="12" xl="4" lg="4" md="6" sm="6"
                @click="$router.push('/services/' + service.name)"
                >
                <service-item :title="service.title" :thumbnail="service.thumbnail" >
                    <template #description><div v-html=service.description /></template>
                </service-item>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.service-section-title {
    letter-spacing: .1em !important;
    text-transform: uppercase;
    font-family: 'Montserrat' !important;
    font-weight: 300;
}
</style>

<script>
import ServiceItem from '@/components/ServiceItem'
import services from '@/data/services.yml'

export default {
    components: {
        'service-item': ServiceItem
    },
    data: () => ({
        services: services.services
    })
}
</script>