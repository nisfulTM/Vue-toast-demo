import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

import { Quasar, Notify } from 'quasar'
import quasarIconSet from 'quasar/icon-set/material-icons'

// Quasar styles
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/dist/quasar.css'

// Import all components & directives
import * as All from 'quasar' // just for demo purposes; in real apps, import only what you need

// 1️⃣ Create the Vue app
const app = createApp(App)

// 2️⃣ Use Quasar
app.use(Quasar, {
  components: All,
  directives: All,
  plugins: { Notify },     // optional now
  iconSet: quasarIconSet
})

// 3️⃣ Mount the app
app.mount('#app')
