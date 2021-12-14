<template>
  <div>
    <header>
      <h1>Mostly Mediocre</h1>
      <nav>
	<router-link to="/">Main Page</router-link>
        <router-link to="/about">About Me</router-link>
	<router-link to="/code">Some Thoughts</router-link>
        <!-- <a href="https://github.com/ZachFontenot">My Github</a> -->
      </nav>
    </header>
  </div>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style scoped>
div {
  color: #15616d;
  border-style: solid;
  border-width: medium;
  border-color: black;
  margin: 30px;
}

a {
  color: #001524;
  display: inline;
  margin: 3em;
}

a:hover {
  color: #f43;
}

nav {
  background-color: #ff9633;
  height: 30px;
  padding-top: 15px;
}
</style>
