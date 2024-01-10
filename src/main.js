import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/index.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import VueSmoothScroll from 'v-smooth-scroll'

const app = createApp(App)
app.use(VueSmoothScroll)
app.use(router)
app.use(createPinia())

app.mount('#app')
