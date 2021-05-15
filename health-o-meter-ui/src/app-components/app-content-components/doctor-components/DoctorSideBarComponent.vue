<template>
  <div class="az-content-left az-content-left-profile">
          <DoctorSideProfileComponent></DoctorSideProfileComponent>
          <DoctorMedicalProviderComponent></DoctorMedicalProviderComponent>
    </div><!-- az-content-left -->
</template>

<script>

import DoctorMedicalProviderComponent from '@/app-components/app-content-components/doctor-components/DoctorMedicalProviderComponent.vue'
import DoctorSideProfileComponent from '@/app-components/app-content-components/doctor-components/DoctorSideProfileComponent.vue'
export default {

name: "DoctorSideBarComponent",
components: {
  DoctorMedicalProviderComponent,
  DoctorSideProfileComponent
}

}
</script>

<style>

</style>