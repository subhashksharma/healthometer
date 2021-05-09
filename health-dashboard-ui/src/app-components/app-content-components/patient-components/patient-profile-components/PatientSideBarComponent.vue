<template>
  <div class="az-content-left az-content-left-profile">
          <PatientSideProfileComponent></PatientSideProfileComponent>
          <PatientMedicalProviderComponent></PatientMedicalProviderComponent>
    </div><!-- az-content-left -->
</template>

<script>

import PatientMedicalProviderComponent from '@/app-components/app-content-components/patient-components/patient-profile-components/PatientMedicalProviderComponent.vue'
import PatientSideProfileComponent from '@/app-components/app-content-components/patient-components/patient-profile-components/PatientSideProfileComponent.vue'
export default {

name: "PatientSideBarComponent",
components: {
  PatientMedicalProviderComponent,
  PatientSideProfileComponent
}

}
</script>

<style>

</style>