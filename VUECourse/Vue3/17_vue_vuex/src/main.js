import { createApp } from 'vue'
import App from './App.vue'

//挂载 store
import store from './store';
const app = createApp(App);


app.use(store).mount('#app')
