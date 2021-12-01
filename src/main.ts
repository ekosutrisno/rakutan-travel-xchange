import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './index.css'

const app = createApp(App);

// Use Pinia as Store Management (as Vuex alternative)
app.use(createPinia())

app.mount('#app')
