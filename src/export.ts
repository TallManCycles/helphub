import { defineCustomElement } from 'vue';
import App from '../src/App.vue';

// Define the custom element
const element = defineCustomElement(App);



// Register the custom element
customElements.define('helperhub-widget', element);


