import Vue from 'vue';
import App from './App.vue';

import 'jquery/dist/jquery';
import 'popper.js/dist/umd/popper';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import {
  mdbContainer,
  mdbRow,
  mdbBtn
} from 'mdbvue';
import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue'
Vue.config.productionTip = false
Vue.use(mdbBtn);
Vue.use(mdbContainer);
Vue.use(mdbRow)
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')