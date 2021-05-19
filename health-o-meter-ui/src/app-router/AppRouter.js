import Vue from 'vue';
import Router from 'vue-router';
import store from '@/app-store/AppCentralStore';
import { Role } from '@/app-helper-services/Role';

import AppLandingComponent from '@/app-components/app-view-components/AppLandingComponent.vue';
import PatientHealthDashboard from '@/app-components/app-view-components/patient-view/PatientHealthDashboard.vue';
import PatientProfile from '@/app-components/app-view-components/patient-view/PatientProfile.vue';
import DoctorDashboardMainComponent from '@/app-components/app-content-components/doctor-components/DoctorDashboardMainComponent.vue';
import DoctorDashboard from '@/app-components/app-view-components/doctor-view/DoctorDashboard.vue';

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
      path: '/doctor',
      name: 'doctor',
      component: DoctorDashboard,
    },

    {
      path: '/patient-health-dashboard',
      name: 'PatientHealthDashboard',
      beforeEnter: guardMyroute,
      component: PatientHealthDashboard,
      meta: { authorize: [Role.Doctor, Role.Patient] },
    },

    {
      path: '/doctor-dashboard',
      name: 'DoctorDashboardMainComponent',
      beforeEnter: guardMyroute,
      component: DoctorDashboardMainComponent,
      meta: { authorize: [Role.Doctor] },
    },

    {
      path: '/patient-profile',
      name: 'PatientProfile',
      beforeEnter: guardMyroute,
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
    if (store.getters.getLoginInfo && !store.getters.getLoginInfo.token) {
      next('/');
    }

    if (
      authorize.length &&
      !authorize.includes(
        store.getters.getLoginInfo && store.getters.getLoginInfo.role
          ? store.getters.getLoginInfo.role
          : null
      )
    ) {
      return next({ path: '/' });
    }
  }
  next();
}

