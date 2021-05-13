<template>
  <h1>Root Component</h1>
  <HelloWorld :text="text" />
</template>

<script>
import {defineComponent} from 'vue';
import HelloWorld from './components/HelloWorld'
export default defineComponent({
  components:{
    HelloWorld
  },
  setup(){
    return {
      text:'hello world'
    }
  }
})
</script>