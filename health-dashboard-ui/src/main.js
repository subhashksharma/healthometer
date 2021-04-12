import { createApp } from 'vue'
import App from './App.vue'

import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import '../node_modules/ionicons/dist/css/ionicons.min.css';
import '../node_modules/typicons.font/src/font/typicons.css';
import '../node_modules/flag-icon-css/css/flag-icon.min.css';

import router from '@/app-router/AppRouter';
import { stateSymbol, createState } from '@/app-store/index';

createApp(App)
  .provide(stateSymbol, createState())
  .use(router)
  .mount('#app');
