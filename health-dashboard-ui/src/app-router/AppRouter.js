import { createWebHistory, createRouter } from 'vue-router';

import { useState } from '@/app-store/index';
import HealthDashboardHome from '@/app-components/app-view-components/HealthDashboardHome.vue';
import PatientActivity from '@/app-components/app-view-components/PatientActivity.vue';
import LandingComponent from '@/app-components/app-view-components/LandingComponent.vue';
import PatientProfile from '@/app-components/app-view-components/PatientProfile.vue';
const routes = [
  {
    path: '/',
    name: 'LandingComponent',
    component: LandingComponent,
  },
  {
    path: '/health-dashboard',
    name: 'HealthDashboardHome',
    component: HealthDashboardHome,
  },

  {
    path: '/patient-activity',
    name: 'PatientActivity',
    component: PatientActivity,
  },

  {
    path: '/patient-profile',
    name: 'PatientProfile',
    component: PatientProfile,
  },

  // ,
  // {
  //   path: '*',
  //   name: 'ErrorPage',
  //   component: ErrorPage
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const state = useState();
//   console.log(' I am not logged in' + useState());
//   if (!state.isLoggedIn && to.path !== '/') {
//     console.log(' I am not logged in');
//     return next({ path: '/' });
//   }
//   next();
// });

export default router;
