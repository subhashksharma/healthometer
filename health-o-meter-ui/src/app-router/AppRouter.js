import Vue from 'vue';
import Router from 'vue-router';
import store from '@/app-store/AppCentralStore';
import { Role } from '@/app-helper-services/Role';

import AppLandingComponent from '@/app-components/app-view-components/patient-view/AppLandingComponent.vue';
import PatientHealthDashboard from '@/app-components/app-view-components/patient-view/PatientHealthDashboard.vue';
import PatientProfile from '@/app-components/app-view-components/patient-view/PatientProfile.vue';
import DoctorDashboardMainComponent from '@/app-components/app-content-components/doctor-components/DoctorDashboardMainComponent.vue';
Vue.use(Router);
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'AppLandingComponent',
      component: AppLandingComponent,
    },
    {
      path: '/patient-health-dashboard',
      name: 'PatientHealthDashboard',
      beforeEnter : guardMyroute,
      component: PatientHealthDashboard,
      meta: { authorize: [] } 
    },

    {
      path: '/doctor-dashboard',
      name: 'DoctorDashboardMainComponent',
      beforeEnter : guardMyroute,
      component: DoctorDashboardMainComponent,
      meta: { authorize: [Role.Doctor] } 
    },

    {
      path: '/patient-profile',
      name: 'PatientProfile',
      beforeEnter : guardMyroute,
      component: PatientProfile,
    },

    // ,
    // {
    //   path: '*',
    //   name: 'ErrorPage',
    //   component: ErrorPage
    // },
  ],
});


function guardMyroute(to, from, next)
{

  const { authorize } = to.meta;
  if (authorize) {
    if (!store.getters.getLoginInfo.token) {
      next('/'); 
    }
    if (authorize.length && !authorize.includes(store.getters.getLoginInfo.role)) {
      return next({ path: '/' });
    }
  }
  next();
}

