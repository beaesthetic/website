<template>
    <v-container class="py-16 px-4">
        <v-row>
            <v-col class="text-h4">Dove Sono</v-col>
        </v-row>
        <v-row dense class="mt-3">
            <v-col v-for="(service, index) in services" :key="index" class="d-flex child-flex" cols="12" xl="3" lg="4" md="6" sm="6">
                <service-item :title="project.title" 
                        :thumbnail="service.thumbnail" >
                    <template #description><div v-html=project.description /></template>
                </service-item>
            </v-col>
        </v-row>
    </v-container>
</template>

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