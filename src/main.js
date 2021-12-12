import { createApp } from 'vue'
//import Counter from './components/Counter.vue'

const Counter = {
  data() {
    return {
      counter: 0
    }
  }
}

createApp(Counter).mount('#counter')
