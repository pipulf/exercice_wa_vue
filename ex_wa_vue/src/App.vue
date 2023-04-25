<template>
  <div class="texts">
    <span>Test technique WEB-ARIO réalisé par Billard Raphaël</span>
    <span>réalisé le 25/04/2023</span>
  </div>

  <div v-for="(bar, index) in progressBars" :key="index">
      <ProgressBar
      :title="bar.title"
      :percentage="bar.percentage"
      />

    <div class="buttons1">
      <button class="button" type="button" v-on:click="reset(index)">
        RAZ
      </button>
      <button class="button" type="button" v-on:click="addFive(index)">
        + 5%
      </button>
      <button class="button" type="button" v-on:click="addTen(index)">
        + 10%
      </button>
      <button class="button" type="button" v-on:click="removeProgressBar(index)">
       Supprimer
      </button>
    </div>
      
  </div>

  <div class="buttons2">
    <button class="button" type="button" v-on:click="reset()">
      Remettre à zéro les compteurs
    </button>
    <button class="button" type="button" v-on:click="addFive()">
      Ajouter 5% à tous
    </button>
    <button class="button" type="button" v-on:click="addTen()">
      Ajouter 10% à tous
    </button>
    <button class="button" type="button" v-on:click="addProgressBar()">
      Ajouter une barre de progression
    </button>
  </div>
</template>

<script>
import ProgressBar from './components/ProgressBar.vue';

export default {
  name: 'App',
  components: {
    ProgressBar
  },
  props: {},
  data: function() {
    return {
      progressBars: [
          { title: 'Initialisation du test technique', percentage: 50},
          { title: 'Avancement de la phase de développement', percentage: 25}
        ]
    }
  },
  methods: {
    reset(index = null) {
      if (index) {
        this.progressBars[index].percentage = 0;
      }else {
        this.progressBars.map(progressBar => {
          progressBar.percentage = 0;
        });
      }
    },
    addFive(index = null) {
      if (index) {
        (this.progressBars[index].percentage += 5) > 100 ? this.progressBars[index].percentage = 100 : this.progressBars[index].percentage += 5;
      }else {
        this.progressBars.map(progressBar => {
          (progressBar.percentage += 5) > 100 ?  progressBar.percentage = 100 : progressBar.percentage += 5;
        });
      }
    },
    addTen(index = null) {
      if (index) {
        (this.progressBars[index].percentage += 10) > 100 ? this.progressBars[index].percentage = 100 : this.progressBars[index].percentage += 10;
      }else {  
        this.progressBars.map(progressBar => {
          (progressBar.percentage += 10) > 100 ?  progressBar.percentage = 100 : progressBar.percentage += 10;
        });
      }
    },
    addProgressBar() {
      this.progressBars.push({ title: 'Barre de progression n°' + (this.progressBars.length + 1) , percentage: 0});
    },
    removeProgressBar(index) {
      this.progressBars.splice(index, 1);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body {
  background-color: #242424;
}

.texts {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  margin: 5em;
  font-size: 0.8em;
  font-weight: bold;
}

.buttons1 {
  display: flex;
  justify-content: center;
  margin-top: 0.5em;
  margin-bottom: 1em;

}

.buttons2 {
  display: flex;
  justify-content: center;
  margin-top: 5em;
}

.button {
  background-color: #373737 ;
  border: none;
  margin: 0.5em;
  padding: 1em;
  color: white;
  font-size: 0.7em;
}

.button:hover {
  cursor: pointer;
}
</style>
