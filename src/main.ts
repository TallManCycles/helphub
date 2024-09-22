import { createApp, defineCustomElement } from 'vue'
import './style.css'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

// Create Vuetify instance
const vuetify = createVuetify({
  components,
  directives,
})

// Define the custom element
const element = defineCustomElement(App)

// Register the custom element
customElements.define('helphub-widget', element)

// If you still want to mount the app normally
createApp(App).use(vuetify).mount('#app')