<template>
    <div>
        <v-row>
            <v-col>
                <div :key="index" class="single-description">
                    <h3 class="mt-5">{{ name }}</h3>
                    <h5 class="mt-2" v-if="subtitle !== undefined">{{ subtitle }}</h5>
                    <p class="mt-2">{{ description }}</p>
                </div>
            </v-col>
            <v-col md="auto" v-if="image !== undefined">
                <v-img :src="image" width="150" aspect-ratio="1"></v-img>
            </v-col>
        </v-row>
    </div>
</template>

<style scoped>
.single-description {
    font-family: 'Montserrat';
}
.single-description h3 {
    font-size: 1.1em;
    font-weight: bold;
}
.single-description p {
    font-size: 0.9em;
    text-align: justify;
    text-justify: justify;
}
</style>

<script>
export default {
    name: 'ServiceDetailDescription',
    props: {
        name: String,
        subtitle: String,
        description: String,
        image: String,
    },
}
</script>