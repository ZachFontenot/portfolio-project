<template>
  <div class="counter">
    Counter: {{ counter }}
</template>

<script>
  const Counter = {
    data() {
      return {
        counter: 0
      }
    }
  }
  
  export default {
  name: 'Counter',
  props: {
    counter: Number
  }
}
</script>
