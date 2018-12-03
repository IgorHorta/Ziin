import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'

const API_TOKEN = "AIzaSyCGZ6mfCLtlVzcWbU82D5lYK20ZoeuMG10";

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: API_TOKEN,
    libraries: 'places'
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')

