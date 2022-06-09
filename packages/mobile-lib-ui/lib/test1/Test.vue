<template>
  <div class="test">
    {{message}}--{{doubleCount}}--ffffff-sdfsdf
    <button @click="addCount"></button>
  </div>
</template>

<script>
  import { computed, ref } from 'vue'
  export default {
    name: 'TestComponent',
    setup() {
      const message = 'hello world111111!'
      const count = ref(1)
      const doubleCount = computed(() => count.value * 2)
      const addCount = () => {
        count.value+= 1
      }
      return {
        message,
        doubleCount,
        addCount
      }
    }
  }
</script>

<style lang="scss" scoped></style>
