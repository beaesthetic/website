<template>
    <v-hover>
        <template>
            <v-hover v-slot="{ hover }">
                <v-card flat :class="{ 'on-hover': hover, 'card-item': true }" tile outlined>
                    <v-img class="white--text align-center" 
                            :src="thumbnail"
                            aspect-ratio="1.3"
                            gradient="to top, rgba(0, 0, 0, 0.11) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.11) 100%">

                        <v-card-title :class="{ 'service-title': true, 'text-center': true }">
                            <v-col>
                                <v-divider class="my-4 mx-12 white"></v-divider>
                                {{title}}
                                <v-divider class="my-4 mx-12 white"></v-divider>
                            </v-col>
                        </v-card-title>
                    </v-img>
                </v-card>
            </v-hover>
        </template>
    </v-hover>
</template>

<style scoped>
.service-title {
    letter-spacing: .1em;
    text-transform: uppercase;
    font-family: 'Montserrat';
    font-weight: bold;
    font-size: 1.5em;
    justify-content: center;
    
}
.card-item {
    transition: all .2s ease-in-out;
}

.card-item.on-hover {
    transform: scale(1.1);
    z-index: 1;
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