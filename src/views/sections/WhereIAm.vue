<template>
    <v-container class="black--text py-16 px-4">
        <v-row>
            <v-col cols="12" xl="6" lg="6">
                <h2 class="display-1 mb-3 text-center whereiam-title">Dove Sono</h2>
                <v-divider class="my-4 mx-12 black"></v-divider>
                <v-card height="400" class="text-center mx-auto" elevation="0">
                    <v-container class="pa-0 text-center">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d257.7781823062511!2d12.662963119156776!3d43.54483418677168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132c502a481b96a3%3A0xd3b99698455cffc6!2sVia%20Sant&#39;Albertino%2C%2061043%20Cagli%20PU!5e0!3m2!1sit!2sit!4v1651401709244!5m2!1sit!2sit" 
                        width="100%" 
                        height="400" 
                        style="border:0;" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade" />
                    </v-container>
                </v-card>
            </v-col>
            <v-col cols="12" xl="6" lg="6">
                <h2 class="display-1 mb-3 text-center whereiam-title">Orari</h2>
                <v-divider class="my-4 mx-12 black"></v-divider>
                <table class="text-center mx-auto timetable mt-8">
                    <tr v-for="(timeSlot, index) in timetable" :key="index" class="px-4">
                        <td class="text-right pr-4">{{ timeSlot.day }}</td>
                        <td class="text-left pl-4">{{ timeSlot.time }}</td>
                    </tr>
                </table>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.timetable {
    font-family: 'Montserrat';
    font-size: 1.6em;
}

.whereiam-title {
    font-family: 'Montserrat' !important;
    font-weight: bold !important;
}

</style>

<script>
import timetable from '@/data/timetable.yml'

export default {
    data: () => ({
        timetable: timetable.timetable
    }),
    methods: {
        //timelineTextAlign: function(index) {
        //    if (this.$vuetify.breakpoint.smAndDown) return "text-left";
        //    return (index % 2 == 0) ? "text-left" : "text-right";
        //}
    },
    filters: {
        format_date: function (date_str) {
            if (!date_str) return ''
            let date = new Date(date_str);
            const month = date.toLocaleString('default', { month: 'long' });
            const year = date.getFullYear();
            return `${month.toString()} ${year}`
        },
        capitalize: function (text) {
            if (!text) return ''
            return text.charAt(0).toUpperCase() + text.slice(1)
        }
    }
}
</script>