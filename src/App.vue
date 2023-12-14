<script setup lang="ts">


// import HelloWorld from './components/HelloWorld.vue'

import { ref, onMounted } from 'vue'
import * as stylex from "@stylexjs/stylex";
import { buttons } from './stylex/button-stylex'

onMounted(() => {
  
})
</script>

<template>
  <div>
      <button :class=stylex.props(buttons.primary).className>
        Enviar
      </button>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
