<template>
    <v-hover>
        <template>
            <v-card flat>
                <v-img class="white--text align-end" 
                        src="https://dummyimage.com/1200x750/567/fff.png&text=Example"
                        aspect-ratio="1"
                        gradient="to top, rgba(0, 0, 0, 0.5) 10%, rgba(0, 0, 0, 0.11) 36%, rgba(0, 0, 0, 0) 46%">

                    <v-card-title class="service-title text-center">
                        {{title}}<br>
                    </v-card-title>
                </v-img>
            </v-card>
        </template>
    </v-hover>
</template>

<style scoped>
.service-title {
    letter-spacing: .1em;
    text-transform: uppercase;
}
</style>

<script>
export default {
    name: 'service-item',
    data: () => ({
        gallery: false
    }),
    props: {
        title: String,
        thumbnail: String,
        description: String,
    },
    methods: {
        getImage: function(path) {
            return require(`@/assets/` + path)
        }
    }
}
</script>