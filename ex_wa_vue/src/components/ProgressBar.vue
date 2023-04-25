<template>
    <div>
        <span class="title">{{title}}</span>
        <div class="group">
            <div class="label">{{percentage}}%</div>
            <progress max="100" :value="percentage" :style="style(percentage)"></progress>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    title: String,
    percentage: Number,
  },
  methods: {
    style(percentage) {
        if (percentage >= 0 && percentage < 25) {
            return 'accent-color: #7160E8; width: 50%; height: 2em';
        } else if (percentage >= 25 && percentage < 50) {
            return 'accent-color: #60ADE8; width: 50%; height: 2em';
        } else if (percentage >= 50 && percentage < 75) {
            return 'accent-color: #60E8B6; width: 50%; height: 2em';
        }  else if (percentage >= 75) {
            return 'accent-color: #30DB63; width: 50%; height: 2em';
        }
    }
  }
}
</script>

<style>
.title{
    font-size: 0.6em;
    margin-bottom: 5px;
    color: white;
    }

.group {
    display: flex;
    align-items: center;
    justify-content: center;

}

.label {
    margin-right: 0.5em;
    color: #747474;
    font-size: 1em;
}


</style>