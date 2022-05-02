<template>
    <v-footer class="background-pink" padless id="contact">
        <v-card flat tile class="background-pink lighten-1 white--text text-center" width="100%">
            <v-card-text>
                <v-row>
                    <v-col cols="6" class="text-left">
                        BeAesthetic<br>
                        Via Sant'Albertino, snc, 61043<br>
                        Cagli (PU)
                    </v-col>
                    <v-col cols="12" xl="6" lg="6">
                        <v-row>
                            <v-col v-for="icon in icons" :key="icon.icon">
                                <v-btn class="mx-4 white--text" icon :href="icon.link" target="_blank">
                                    <v-icon size="24px">{{icon.icon}}</v-icon>   
                                </v-btn>
                                <div>{{icon.name}}</div>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <!-- TODO: add vertical divider <v-divider :key="icon" vertical color="white"/> -->
            </v-card-text>
            <v-divider dark class="inset-both"></v-divider>
            <v-card-text class="white--text">
                {{ new Date().getFullYear() }} — <strong>Andrea Petreti</strong>
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
export default {
    data: () => ({
        icons: [
            {
                icon: 'mdi-instagram',
                name: 'beaesthetic',
                link: '#'
            },
            {
                icon: 'mdi-email',
                name: 'centrobeasthetic@gmail.com',
                link: 'mailto:centrobeasthetic@gmail.com'
            }
        ]
    }),
}
</script>

<style>

</style>