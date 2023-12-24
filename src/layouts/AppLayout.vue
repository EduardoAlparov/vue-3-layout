<script setup>
import AppLayoutDefault from "@/layouts/AppLayoutDefault.vue";
import { useRoute } from "vue-router";
const route = useRoute();
const defaultLayout = AppLayoutDefault;

</script>

<template>
  <component :is="route.meta.layout || defaultLayout">
    <slot />
  </component>
</template>

<style scoped></style>
