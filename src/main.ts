import { defineCustomElement, h } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Import Vuetify styles and icons
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Create Vuetify instance
const vuetify = createVuetify({
  components,
  directives
})

// Create a wrapper component for Vuetify integration in a web component
const AppWrapper = defineCustomElement({
  render: () => h(App),
  setup() {
    return { vuetify }
  }
})

// Define the custom element
customElements.define('my-vue-widget', AppWrapper)