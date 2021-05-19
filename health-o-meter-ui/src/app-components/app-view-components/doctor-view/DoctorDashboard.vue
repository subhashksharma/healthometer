<template>
<div><DoctorHeaderComponent></DoctorHeaderComponent>
  <DoctorDashboardMainComponent></DoctorDashboardMainComponent>
  <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppFooter from '@/app-components/app-shared-components/AppFooter.vue'
import DoctorDashboardMainComponent from '@/app-components/app-content-components/doctor-components/DoctorDashboardMainComponent.vue'
import DoctorHeaderComponent from '@/app-components/app-content-components/doctor-components/DoctorHeaderComponent.vue';


export default {
  name: 'DoctorDashboard',
  components: {
    DoctorHeaderComponent,
    AppFooter,
    DoctorDashboardMainComponent
  },

}
</script>

<style>

</style>