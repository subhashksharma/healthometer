import Vue from 'vue';
import App from './App.vue';

import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import '../node_modules/ionicons/dist/css/ionicons.min.css';
import '../node_modules/typicons.font/src/font/typicons.css';
import '../node_modules/flag-icon-css/css/flag-icon.min.css';

Vue.config.productionTip = false;
import store from '@/app-store/AppCentralStore';
import router from '@/app-router/AppRouter';

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
