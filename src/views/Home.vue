<template>
  <div class="container-fluid">
    <b-input-group prepend="N" class="mt-3">
      <b-form-input v-model="n"></b-form-input>
      <b-input-group-append>
        <b-button variant="info" @click="showNValue()">Find</b-button>
      </b-input-group-append>
    </b-input-group>
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
      numberBox: null,
      n: null
    }
  },
  methods: {
    findSeriesSequence (n) {
      if (this.numberBox[n]) return this.numberBox[n]
      console.log('cal')
      let next = this.findSeriesSequence(n - 1) + 2 * (n - 1)
      this.numberBox[n] = next
      this.numberBox = Object.assign({}, this.numberBox)
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
    },
    showNValue () {
      this.findSeriesSequence(this.n)
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
