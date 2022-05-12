<template>
    <v-row v-if="latest != undefined" justify="center" align="center">
        <v-col cols="1" class="mr-1 text-right">    
            <v-icon size="1.5em">mdi-newspaper</v-icon>
        </v-col>
        <v-col cols="10">
            <v-row justify="center" align="center">        
                <v-col cols="12" class="mb-0 pa-0 pt-2 d-inline-block">
                    <span class="promo-active-title mr-1">Promo attive</span>
                </v-col>
                <v-col cols="12" class="mb-0 pa-0 d-inline-block text-truncate promo-content">
                    <a href="/promo">
                        <span class="mr-1 promo-title"> {{ latest.name }} </span>
                        <span class="promo-description"> {{ latest.description }} </span>
                    </a>
                </v-col>
            </v-row>
        </v-col>
    </v-row>    
</template>

<style scoped>
.promo-content a {
    text-decoration: underline;
    color: black;
}

.promo-active-title {
    font-size: 1.2em;
    font-weight: bold;
    font-family: 'Montserrat';
}
.promo-title {
    font-family: 'Montserrat';
    font-size: 1.1em;
    font-weight: 500;
}
.promo-description {
    font-family: 'Montserrat';
    font-size: 1em;
    text-align: justify;
    text-justify: justify;
}

</style>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapGetters } = createNamespacedHelpers('content');

export default {
    name: 'promo-reporter',
    computed: {
        ...mapGetters([
            'promo'
        ]),
        latest: function() {
            if (this.promo !== undefined) {
                let ordered = Object.assign([], this.promo).sort(function(a, b){
                    return new Date(b.insertDate.seconds * 1000) - new Date(a.insertDate.seconds * 1000);
                });
                return ordered[0];
            }
            return {};
        },
    }
}
</script>