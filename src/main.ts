import { createApp, defineCustomElement, h } from 'vue'
import App from './App.vue'
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

// Create a new component that extends the original component
const CustomElement = {
  extends: App,
  props: {
    vuetify: Object,
  },
  setup(props: any) {
    const app = createApp({
      render: () => h(App),
    })
    app.use(props.vuetify)
    return app.mount('#app')
  },
}

// Define the custom element
const element = defineCustomElement(CustomElement)

// Register the custom element
customElements.define('helphub-widget', element)

// If you still want to mount the app normally
createApp(App).use(vuetify).mount('#app')