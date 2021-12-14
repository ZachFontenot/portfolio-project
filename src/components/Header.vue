<template>
  <div>
    <header>
      <h1>Mostly Mediocre</h1>
      <nav>
	<router-link to="/">Main Page</router-link>
        <router-link to="/about">About Me</router-link>
	<router-link to="/code">Stuff about Erlang</router-link>
	<router-link to="/zachresume">My Resume</router-link>
	<router-link to="/buttons?">Buttons?</router-link>
        <a href="https://github.com/ZachFontenot">My Github</a>
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
  color: #7cb8bb;
  border-style: solid;
  border-width: medium;
  border-color: black;
  margin: 30px;
  text-align: center;
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
  background-color: #dca3a3;
  height: 30px;
  padding-top: 15px;
}

.router-link-active {
    color: #f43
}
</style>
