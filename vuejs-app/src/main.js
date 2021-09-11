import { createApp } from 'vue'

import App from './App.vue'
import AuthService from './clases/auth_service.js'

const app = createApp(App)

app.config.globalProperties.$authService = new AuthService()

app.mount('#app')
