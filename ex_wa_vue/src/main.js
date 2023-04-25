import * as Vue from 'vue'
import ProgressBar from './components/ProgressBar.vue'
import App from './App.vue'

const app = Vue.createApp(App);

app.component('ProgressBar', ProgressBar);


app.mount("#app");
