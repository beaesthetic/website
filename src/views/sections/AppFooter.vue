<template>
    <v-footer class="background-pink" padless id="contact">
        <v-card flat tile class="background-pink lighten-1 black--text text-center" width="100%">
            <v-card-text>
                <v-container>
                    <v-row align="center">
                        <v-col cols="12" lg="6" xl="6" md="6" class="text-left">
                            BeAesthetic<br>
                            Via Sant'Albertino, snc, 61043<br>
                            Cagli (PU)<br>
                            Tel. 351 52 53 634<br>
                            P. iva 02600650016<br>
                        </v-col>
                        <v-col cols="12" lg="6" xl="6" md="6">
                            <div class="text-h7 mb-1" id="contacts-title"> Contatti </div>
                            <v-layout class="d-inline-flex flex-wrap">
                                <template v-for="(icon, index) in icons">
                                    <icon-with-text class="ma-4" :title="icon.name" :icon="icon.icon" :href="icon.link" :key="index" />
                                </template>
                            </v-layout>
                        </v-col>
                    </v-row>
                </v-container>
                <!-- TODO: add vertical divider <v-divider :key="icon" vertical color="white"/> -->
            </v-card-text>

            <v-container><v-divider></v-divider></v-container>
            <v-card-text class="black--text copyright">
                {{ new Date().getFullYear() }} — BeAesthetic - Site by Andrea Petreti
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<style scoped>
#contacts-title {
    font-family: 'Montserrat' !important;
    font-weight: bold;
}
.copyright {
    font-family: 'Montserrat' !important;
    font-weight: 100;
    font-size: 0.7em;
    text-align: right;
}
</style>

<script>

import IconWithText from '@/components/IconWithText'

export default {
    components: {
        'icon-with-text': IconWithText
    },
    data: () => ({
        icons: [
            {
                icon: 'mdi-phone',
                name: '+39 351 52 53 634',
                link: 'tel:+393515253634'
            },
            {
                icon: 'mdi-instagram',
                name: 'beaesthetic',
                link: '#'
            },
            {
                icon: 'mdi-whatsapp',
                name: '+39 351 52 53 634',
                link: 'whatsapp://send?abid=+393515253634'
            },
        ]
    }),
}
</script>

<style>

</style>