// eslint-disable
import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/scss/tailwind.scss'
import "@/assets/libs/@mdi/font/css/materialdesignicons.min.css";
import '@/assets/libs/@iconscout/unicons/css/line.css'
import router from './router'
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia) // <-- WAJIB, sebelum pakai store Pinia
app.use(router);
app.mount('#app')
