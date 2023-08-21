import Vue from 'vue'
import App from './App.vue'
import packageInfo from './../package.json';

import { createPinia, PiniaVuePlugin } from 'pinia'
Vue.use(PiniaVuePlugin)
const pinia = createPinia()

import Vuetify from 'vuetify'
Vue.use(Vuetify)
const opts = {}
const vuetify = new Vuetify(opts)

import '@mdi/font/css/materialdesignicons.css'

import VueTippy, { TippyComponent } from "vue-tippy";
Vue.use(VueTippy, {
  maxWidth: 'min(400px,70vw)'
});
// eslint-disable-next-line vue/multi-word-component-names
Vue.component("tippy", TippyComponent);

Vue.config.productionTip = false;

Vue.prototype.$appName = "PURE suggest";
Vue.prototype.$appNameHtml = '<span class="has-text-primary">PURE&nbsp;</span><span class="has-text-info">suggest</span>';
Vue.prototype.$appSubtitle = "Citation-based literature search"
Vue.prototype.$version = packageInfo.version;

new Vue({
  pinia,
  vuetify,
  render: h => h(App),
}).$mount('#app')