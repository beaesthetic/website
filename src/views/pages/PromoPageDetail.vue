<template>
    <div id="promo-detail">
        <v-img 
            width="100%"
            src="/img/promo/promozione-bg.png"
            position="center center"
            :aspect-ratio="headerAspectRatio"
            gradient="to top, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.2) 100%">

            <v-container fill-height class="page-header">
                <v-row>
                    <v-col class="white--text" cols="10" offset="1" sm="8" offset-sm="2" md="6" offset-md="3" lg="6" offset-lg="3" xl="6" offset-xl="3">
                        Promozioni
                        <v-divider class="my-4 white"></v-divider>
                    </v-col>
                </v-row>
            </v-container>
        </v-img>
        <v-container class="mb-4">
            <v-row dense class="mt-3">
                <v-col v-for="(promotion, index) in promo" :key="index" class="d-flex child-flex" cols="12" xl="4" lg="4" md="6" sm="6">
                    <v-card flat>
                        <v-card-title class="promo-title center--text">{{ promotion.name }}</v-card-title>
                        <v-card-subtitle class="promo-subtitle">
                            <v-icon size="1.5em" class="mr-2">mdi-calendar-clock</v-icon>
                            <span v-if="promotion.expiryDate !== undefined">Fino al {{promotion.expiryDate.seconds | dateFromSeconds | formateDate }}</span>
                            <span v-else>Per sempre</span>
                        </v-card-subtitle>
                        <v-card-text class="promo-description" v-html="promotion.description"></v-card-text>
                        <v-img class="white--text" :src="promotion.image" max-width="300" aspect-ratio="1"></v-img>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style scoped>
.page-header {
    font-family: 'Montserrat';
    font-size: 1.5em;
    font-weight: bold;
}
.promo-title {
    font-family: 'Montserrat';
    font-size: 1.em;
    font-weight: bold;
}
.promo-subtitle {
    font-family: 'Montserrat';
    font-size: 0.8em;
}
.promo-description {
    font-family: 'Montserrat';
    font-size: 0.9em;
}
</style>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapGetters } = createNamespacedHelpers('content');

export default {
    name: 'promo-page-detail',
    filters: {
        dateFromSeconds: function(seconds) {
            return new Date(seconds * 1000);
        },
        formateDate: function(date) {
            return date.toLocaleDateString('it-IT', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            });
        }
    },
    computed: {
        ...mapGetters([
            'promo'
        ]),
        headerAspectRatio() {
            return this.$vuetify.breakpoint.smAndDown ? 2 : 5;
        },
        promotions: function() {
            return this.promo.filter(promo => promo['expiryDate'] == undefined || promo['expiryDate'] > new Date());
        },
    },
    mounted() {
        var fixedElement = document.getElementsByClassName('v-app-bar')[0];
        var layout = document.getElementById('promo-detail');
        layout.style = "margin-top: "+ fixedElement.offsetHeight + 'px !important';
    },
};
</script>