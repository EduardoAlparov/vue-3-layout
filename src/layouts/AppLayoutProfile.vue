<template>
  <div class="app-layout-grid">
    <app-layout-header />

    <slot />

    <app-layout-footer />
  </div>
</template>

<script setup>
import AppLayoutHeader from "@/components/AppLayoutHeader.vue";
import AppLayoutFooter from "@/components/AppLayoutFooter.vue";
</script>
