import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Styles
import './assets/style.css'

const app = createApp(App).use(createPinia()).use(router)

app.mount('#app')
