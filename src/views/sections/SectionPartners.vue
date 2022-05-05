<template>
    <v-container class="py-16 px-4">
        <v-row>
            <v-col>
                <div class="text-h5 mb-3 text-center service-section-title">Marchi Selezionati</div>
                <v-divider class="my-4 mx-12 black"></v-divider>
            </v-col>

        </v-row>
        <v-row dense class="mt-3">
            <v-col cols="12">
                <v-slide-group v-model="model" class="pa-4">
                    <v-slide-item v-for="(partner, index) in partners" :key="index" class="mx-4">
                        <v-card flat>
                            <a :href="partner.link" target="_blank">
                                <v-img :src="partner.picture" width="300" aspect-ratio="5" contain/>
                            </a>
                        </v-card>
                    </v-slide-item>
                </v-slide-group>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.service-section-title {
    letter-spacing: .1em !important;
    text-transform: uppercase;
    font-family: 'Montserrat' !important;
    font-weight: bold;
}
</style>

<style>
.v-slide-group__content {
  justify-content: center !important;
}
</style>

<script>
import partners from '@/data/partners.yml'

export default {
    data: () => ({
        partners: partners.partners,
        model: null,
    })
}
</script>