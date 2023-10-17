<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import router from './router/index';


</script>

<template>
<Header/>
<main class=" container mx-auto mt-10">
    <RouterView/>
</main>
</template>

<style scoped>

</style>
