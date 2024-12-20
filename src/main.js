import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

const vueApp = createApp(App)
vueApp.use(router)
vueApp.mount('#app')
