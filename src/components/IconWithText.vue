<template>
    <v-layout ma-0 pa-0 class="flex-column flex-wrap-reverse align-center">
        <v-btn class="text-center" icon :href="href" target="_blank">
            <v-icon :size="iconSize == undefined ? '24px' : iconSize">{{icon}}</v-icon>   
        </v-btn>
        <div class="mt-1" v-if="title != undefined">{{title}}</div>
    </v-layout>
</template>

<style scoped>
div {
    font-family: 'Montserrat';
}
</style>

<script>
export default {
    name: 'icon-with-text',
    props: {
        title: String,
        icon: String,
        href: String,
        iconSize: String,
    }
}
</script>