<template>
  <div><AppHeader></AppHeader>
  <DashBoardMainComponent></DashBoardMainComponent>
  <AppFooter></AppFooter>
  </div>
</template>


<script>
import AppHeader from '@/app-components/app-shared-components/AppHeader.vue'
import AppFooter from '@/app-components/app-shared-components/AppFooter.vue'
import DashBoardMainComponent from '@/app-components/app-content-components/patient-components/dashboard-components/DashBoardMainComponent.vue'

export default {
  name: 'PatientHealthDashboard',
  components: {
    AppHeader,
    AppFooter,
    DashBoardMainComponent
  },
  

}
</script>

<style>

</style>