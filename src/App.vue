<script setup>
import AdvancedMenu from "@/components/AdvancedMenu.vue";
</script>

<template>
  <div id="app">
    <AdvancedMenu />

    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
}

.content {
  flex-grow: 1;
  padding: 2em;
  overflow-y: auto;
  background: #ffffff;
}
</style>
