<template>
    <div>
        <v-parallax class="fill-viewport"
            height="100vh"
            white
            src="img/background-dashboard.jpg">
            <v-row fill-height align="center" justify="center">
                <v-content class="text-center">
                    <v-row align="center" justify="center">   
                        Ciaooo
                        <!-- <v-col class="text-left">
                            <img src="img/be-aesthetic-fit.png" alt="Be Aesthetic"/>
                        </v-col> -->
                        <!-- <v-col class="text-left title">
                            Ciao, sono Andrea Petreti!
                        </v-col>
                        <v-col cols="12">
                            <v-btn text icon href="https://github.com/petretiandrea" target="_blank"><v-icon >mdi-github</v-icon></v-btn>
                            <v-btn text icon href="https://www.linkedin.com/in/andrea-petreti/" target="_blank"><v-icon>mdi-linkedin</v-icon></v-btn>
                            <v-btn text icon href="mailto:petretiandrea@gmail.com" target="_blank"><v-icon>mdi-email</v-icon></v-btn>
                            <v-btn text icon href="https://profile.codersrank.io/user/petretiandrea" target="_blank">
                                <icon-svg data="@/assets/icons/coders-rank.svg" width="24" color="#0000008a"/>
                            </v-btn>
                        </v-col>
                        <v-col cols="12" v-if="$vuetify.breakpoint.smAndDown"> 
                            <v-btn text outlined color="white" large href="/cv">Il mio curriculum</v-btn>
                        </v-col> -->
                    </v-row>
                </v-content>
            </v-row>
        </v-parallax>
    
        <section id="services">
            <section-services/>
        </section>


        <section class="section-where-i-am">
            <where-i-am />
        </section>

        <app-footer />
    </div>
</template>



<script>
import whereIAm from '@/views/sections/WhereIAm'
import SectionServices from '@/views/sections/SectionServices'
import appFooter from '@/views/sections/AppFooter'

export default {
    name: 'main-dashboard',
    components: {
        'where-i-am': whereIAm,
        'section-services': SectionServices,
        'app-footer': appFooter
    }
}
</script>

<style scoped>
.inset-both {
    margin-left: 72px;
    margin-right: 72px;
}
.dark-grey {
    background-color: #212529 !important;
}
.fill-viewport {
    height: 100vh;
}
.section-where-i-am {
    color: red !important;
    background-color: white !important;
}
</style>