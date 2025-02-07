import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vuesax from 'vuesax-alpha'
import 'boxicons'

import App from './App.vue'
import router from './router'

// Styles
import './assets/theme.css'
import './assets/style.scss'

const app = createApp(App).use(createPinia()).use(router).use(Vuesax)

app.mount('#app')
