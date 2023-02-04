import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'normalize.css'
import axios from "axios"
import 'element-plus/theme-chalk/el-loading.css';
import 'element-plus/theme-chalk/el-message.css';


const app = createApp(App)
axios.defaults.baseURL = 'http://39.106.15.191:8005/'
app.use(router)

app.mount('#app')
