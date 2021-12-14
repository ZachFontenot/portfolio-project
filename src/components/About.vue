<template>
  <div class="about">
    <h1>
      {{ msg }}
    </h1>
    <main>
      <div>
	<img src="../assets/imago_me.jpg" alt="A black and white portrait in profile">
	<figcaption>
	  <ul class="left">
            <li>30</li>
            <li>has cats</li>
            <li>software engineer</li>
	  </ul>
	</figcaption>
      </div>
       <article>
         <h2>My Whole Life</h2>
         <p class="left">
           I live in Louisiana and I'm from Louisiana.<br>
           I went to School of the Art Institute of Chicago for Undergrad.<br>
           I studied Sound, Film, and Sculpture.<br>
           Now, I am a Software Engineer at Revelry Labs in New Orleans.<br>
         </p>
         <p class="left">
           I have three courses left at BU, including this one.
         </p>
       </article>
     </main>
  </div>
</template>

<script>
  export default {
    name: 'About'
  }
</script>

<style scoped>
main {
    display: flex;
}
p {
    margin: auto;
    padding: 30px;
}
.left {
    text-align: left;
}  
</style>
