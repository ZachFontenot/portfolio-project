<template>
  <Header/>
  <div>
    <h2>Hi, Welcome to my Porjest</h2>
    <p>
      In it, you will find things. Here, some Ulysses
    </p>
    <p>
      —But a lovely mummer! he murmured to himself. Kinch, the loveliest
mummer of them all!
    </p>
    <p>
He shaved evenly and with care, in silence, seriously.
    </p>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
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
  margin: 30px;
}

html {
    background-color: #ffecd1;
}
</style>
