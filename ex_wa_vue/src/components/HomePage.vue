<template>
  <div id="body">
    <p>Test technique WEB-ARIO réalisé par Billard Raphaël</p>
    <p>réalisé le 25/04/2023</p>
    <div v-for="(bar, index) in progressBars" :key="index">
      <ProgressBar
      :title="bar.title"
      :starting_percentage="bar.starting_percentage"
      :color="bar.color"
      />
    </div>


  </div>
</template>

<script>
import ProgressBar from './ProgressBar.vue';

export default {
    name: "HomePage",
    components: { ProgressBar },
    props: {},
  data: function() {
    return {
      progressBars: [
          { title: 'Initialisation du test technique', starting_percentage: 50, color: '#60ADE8'},
          { title: 'Avancement de la phase de développement', starting_percentage: 25, color: '#7160E8'}
        ]
    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#body {
  background-color: #242424;
}

p {
  color: white;
}

</style>
