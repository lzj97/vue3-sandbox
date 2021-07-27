<template>
  <h1>Root Component</h1>
  <HelloWorld :text="text" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HelloWorld from '@/components/HelloWorld'
export default defineComponent({
  components: {
    HelloWorld,
  },
  setup() {
    const text = ref<string>('hello world')
    return {
      text,
    }
  },
})
</script>
