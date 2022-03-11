

import VueAplayer from './vue-aplayer.vue'



export default    {
  install(app  ) {
    // configure the app
    app.component(VueAplayer.name,VueAplayer)
  }
}