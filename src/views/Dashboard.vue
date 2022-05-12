<template>
    <div>
        <v-img class="fill-viewport"
            height="100vh"
            white
            src="/img/centro1.jpg"
            gradient="to bottom, rgba(0, 0, 0, 0.11) 0%, rgba(0, 0, 0, 0.4) 100%">
            <v-container id="contact-header" fluid class="hidden-sm-and-down">
                <v-row align="center">
                    <v-col cols="2" offset="1">
                        <v-layout class="d-inline-flex flex-wrap black--text">
                            <template v-for="(contact, index) in contacts">
                                <icon-with-text :icon="contact.icon" :href="contact.link" :key="index" icon-size="1.4em" />
                            </template>
                        </v-layout>
                    </v-col>
                    <v-col cols="5">
                        <promo-reporter></promo-reporter>
                    </v-col>
                    <v-col cols="2" offset="2">
                        <v-layout wrap align-center>
                            <a :href="phoneContact.link">
                                <v-icon size="1.5em" class="mr-1">{{phoneContact.icon}}</v-icon>
                                <span class="black--text">{{ phoneContact.name }}</span>
                            </a>
                        </v-layout>
                    </v-col>
                </v-row>
            </v-container>
        </v-img>

        <section id="services">
            <section-services/>
        </section>


        <section id="section-where-i-am">
            <where-i-am />
        </section>

        <section id="partners">
            <partners />
        </section>
    </div>
</template>

<style scoped>
#contact-header {
    background-color: antiquewhite;
    font-size: 0.7em;
    font-family: 'Montserrat';
}
#contact-header a {
    text-decoration: none;
}
</style>

<script>
import whereIAm from '@/views/sections/WhereIAm'
import SectionServices from '@/views/sections/SectionServices'
import partners from '@/views/sections/SectionPartners'
import PromoReporter from '@/components/PromoReporter'
import IconWithText from '@/components/IconWithText'
import * as contacts from '@/data/contacts.yml'

export default {
    name: 'main-dashboard',
    components: {
        'partners': partners,
        'where-i-am': whereIAm,
        'section-services': SectionServices,
        'icon-with-text': IconWithText,
        PromoReporter
    },
    mounted: () => {
        var fixedElement = document.getElementsByClassName('v-app-bar')[0];
        var layout = document.getElementById('contact-header');
        layout.style = "margin-top: "+ fixedElement.offsetHeight + 'px !important';
    },
    data: () => ({
        contacts: contacts.filter(contact => contact.icon != 'mdi-phone'),
        phoneContact: contacts.filter(contact => contact.icon == 'mdi-phone')[0],
    }),
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
#section-where-i-am {
    background-color: white !important;
}
</style>