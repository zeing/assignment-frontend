<template>
  <div class="home">
    <p v-for="(data, index) in numberBox" :key="index">{{`order: ${index} = ${data}`}}</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  },
  data: () => {
    return {
      numberBox: null
    }
  },
  computed: {},
  methods: {
    findSeriesSequence (n) {
      if (this.numberBox[n]) return this.numberBox[n]
      console.log('cal')
      let next = this.findSeriesSequence(n - 1) + 2 * (n - 1)
      this.numberBox[n] = next
      localStorage.setItem('numberBox', JSON.stringify(this.numberBox))
      return next
    },
    getNumberBoxFromLocalStorage () {
      let getNumberBox = localStorage.getItem('numberBox')
      if (getNumberBox) {
        this.numberBox = JSON.parse(localStorage.getItem('numberBox'))
      } else {
        this.numberBox = { 1: 3, 2: 5, 3: 9, 4: 15 }
      }
    }
  },
  mounted () {
    this.getNumberBoxFromLocalStorage()
    this.findSeriesSequence(7)
    this.findSeriesSequence(6)
    this.findSeriesSequence(5)
  }
}
</script>
