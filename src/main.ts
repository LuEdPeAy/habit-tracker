import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/main.css'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
