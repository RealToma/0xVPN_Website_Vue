import 'aos/dist/aos.css'
import './assets/main.css'
import Vue3Marquee from 'vue3-marquee'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(Vue3Marquee).mount('#app')
