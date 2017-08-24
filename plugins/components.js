import Vue from 'vue'
import { VueTyper } from 'vue-typer'
import VueMoment from 'vue-moment'
import VueEvents from 'vue-events'
import VueTouch from 'vue-touch'

// Components
Vue.component('vue-typer', VueTyper)
// Vue.component('v-touch', VueTouch)

// Vue plugins
Vue.use(VueMoment)
Vue.use(VueEvents)
Vue.use(VueTouch, {name: 'v-touch'})