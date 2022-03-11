 import {createApp} from "vue";
 import App from './App.vue';

 import VueAplayer from '../lib/aplayer.es'
 import '../lib/style.css'

 const app=createApp(App)


 app.use(VueAplayer)
 app.mount("#app")