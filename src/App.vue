<script setup>
import { RouterView } from "vue-router";
import AppLayout from "@/layouts/AppLayout.vue";
</script>

<template>
  <app-layout>
    <router-view />
  </app-layout>
</template>

<style lang="scss">
html {
  font-size: 10px;
}

body {
  margin: 0;
  padding: 0;
  font-size: 1.6rem;
}

#app {
  font-family: Verdana, Geneva, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: lightslategrey;
}

.app-layout-grid {
  display: flex;
  flex-direction: column;
  align-items: stretch;

  width: 100%;
  height: 100%;
  min-height: 100vh;
}

.wrapper {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.site-container {
  width: 100%;
  max-width: calc(
    var(--max-container-width, 168rem) + 2 * var(--content-padding, 2rem)
  );
  margin: 0 auto;
  padding: 0 var(--content-padding, 2rem);

  @supports (width: "max(20vw, 100px)") {
    padding-left: max(
      env(safe-area-inset-left, 1.4rem),
      var(--content-padding, 2rem)
    );
    padding-right: max(
      env(safe-area-inset-right, 1.4rem),
      var(--content-padding, 2rem)
    );
  }
}
</style>
