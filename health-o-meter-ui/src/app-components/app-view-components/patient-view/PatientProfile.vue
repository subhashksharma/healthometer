<template>
  <div><AppHeader></AppHeader>
  <!-- <PatientMainComponent></PatientMainComponent> -->
  <AppFooter></AppFooter>
  </div>
</template>


<script>
import AppHeader from '@/app-components/app-shared-components/AppHeader.vue'
import AppFooter from '@/app-components/app-shared-components/AppFooter.vue'
//import PatientMainComponent from '@/app-components/app-content-components/patient-components/patient-profile-components/PatientMainComponent.vue'

export default {
  name: 'PatientProfile',
  components: {
    AppHeader,
    AppFooter,
   // PatientMainComponent
  },
}
</script>

<style>

</style>