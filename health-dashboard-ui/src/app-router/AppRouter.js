import { createWebHistory, createRouter } from 'vue-router';

import { useState } from '@/app-store/index';
import AppLandingComponent from '@/app-components/app-view-components/patient-view/AppLandingComponent.vue';
import PatientHealthDashboard from '@/app-components/app-view-components/patient-view/PatientHealthDashboard.vue';
import PatientProfile from '@/app-components/app-view-components/patient-view/PatientProfile.vue';
import DoctorDashboard from '@/app-components/app-view-components/doctor-view/DoctorDashboard.vue';
const routes = [
  {
    path: '/',
    name: 'AppLandingComponent',
    component: AppLandingComponent,
  },
  {
    path: '/patient-health-dashboard',
    name: 'PatientHealthDashboard',
    component: PatientHealthDashboard,
  },

  {
    path: '/doctor-dashboard',
    name: 'DoctorDashboard',
    component: DoctorDashboard,
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
//   console.log(' I am not logged in ::::::' + state);
//   // if (!state.isLoggedIn && to.path !== '/') {
//   //   console.log(' I am not logged in');
//   //   return next({ path: '/' });
//   // }
//   next();
// });

export default router;
