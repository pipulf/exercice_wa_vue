<template>
<p>{{title}}</p>
<progress id="progress-bar" max="100" :value="starting_percentage" :style="style()"> {{starting_percentage}}%</progress>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    title: String,
    starting_percentage: Number,
    color: String
  },
  methods: {
    style() {
        return 'background: ' + this.color
    }
  }
}
</script>

<style>

</style>