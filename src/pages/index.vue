<template>
  <h1> vite + vue3 + ts </h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VueUse',
  setup() {
    const x = 1,
      y = 2
    return {
      x,
      y,
    }
  },
})
</script>
