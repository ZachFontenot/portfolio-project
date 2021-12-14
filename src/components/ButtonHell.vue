<template>
<div>
  <button @click="buttonReplicate" id="match">Do I dare?</button>
  <button @click="clearButtons" id="other-match">Stop the Madness!</button>
  <div id="papa">
  </div>
</div>
</template>

<script>
export default {
  name: 'ButtonHell',
  // If I had more time, I would figure out a better way to make this
  // more random. Text fitting and position willy nilly
  methods: {
    buttonReplicate(_event) {
      let papa = document.getElementById('papa')
      let newButton = document.createElement("button")
      newButton.style.width =  Math.floor(Math.random() * 100) + "px"
      newButton.style.pos
      newButton.style.height = Math.floor(Math.random() * 100) + "px"
      newButton.style.margin = "auto"
      newButton.innerHTML = 'Replicating'
      newButton.addEventListener('click', this.buttonReplicate)
      papa.appendChild(newButton)
    },

    clearButtons(_event) {
      let pap = document.getElementById('papa')
      while (pap.firstChild) {
	pap.removeChild(pap.firstChild)
      }
    }
  }
}
</script>

<style scoped>
#papa {
    display: flex;
    flex-flow: row wrap-reverse;
    gap: 50px;
}
</style>
