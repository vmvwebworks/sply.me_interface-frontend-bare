import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
  theme: {
    primary: '#EDEBED',
    secondary: '#2C3A47',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
    main: '#1e272e',
    header: '#57606f',
    subHeader: '#48393C',
    selector: '#cf6a87',
    footer: '#2f3542',
    side: '#485460'
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
