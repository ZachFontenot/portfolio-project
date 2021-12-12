<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <Counter counter="0"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Counter from './components/Counter.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Counter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: linear-gradient(90deg, hsla(356, 76%, 50%, 1) 0%, hsla(104, 63%, 36%, 1) 100%);
  background: -moz-linear-gradient(90deg, hsla(356, 76%, 50%, 1) 0%, hsla(104, 63%, 36%, 1) 100%);
  background: -webkit-linear-gradient(90deg, hsla(356, 76%, 50%, 1) 0%, hsla(104, 63%, 36%, 1) 100%);
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#E01F2D", endColorstr="#409422", GradientType=1 );
}
</style>
