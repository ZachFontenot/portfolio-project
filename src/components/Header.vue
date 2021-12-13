<template>
  <div>
    <header>
      <h1>Mostly Mediocre</h1>
      <nav>
	<!-- <a href="../../public/not_index.html">Main Page</a> -->
        <!-- <a href="../assets/else.html">About Me</a> -->
	<!-- <a href="audio.html">A Track</a> -->
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
