<template>
  <h1 @click="clicked">{{ message }}</h1>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      message: 'Hello!'
    }
  },
  methods: {
    clicked () {
      this.message = 'Clicked!!!'
    }
  }
})
</script>
