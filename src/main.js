import '@babel/polyfill'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import store from './store'
import numeral from 'numeral';
import numFormat from 'vue-filter-number-format';
import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

import { firestorePlugin } from 'vuefire'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircle, faHammer } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome'
import moment from 'vue-moment';

import './custom.scss'
import { config } from './helpers/firebaseConfig'

Vue.config.productionTip = false

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(moment)
Vue.use(VueAxios, axios)
Vue.use(firestorePlugin)

Vue.filter('numFormat', numFormat(numeral))

Vue.axios.defaults.baseURL = 'http://localhost:8000/api/'
Vue.axios.defaults.params = {}
axios.defaults.params['format'] = 'json'

// font-awesome icons
library.add(faFacebookSquare, faTwitterSquare, faCircle, faHammer)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)

firebase.initializeApp(config);

export const db = firebase.firestore()

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')