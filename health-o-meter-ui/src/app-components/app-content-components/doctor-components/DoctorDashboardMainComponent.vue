<template>
  <div class="az-content pd-t-0">
      <div class="container">
        <div class="col-md-3 col-xl-3"><DoctorSideBarComponent></DoctorSideBarComponent></div>
        <div class="col-md-9 col-xl-9"><DoctorTabBodyComponent></DoctorTabBodyComponent></div>
      </div><!-- container -->
    </div><!-- az-content -->
    
</template>

<script>
import DoctorSideBarComponent from '@/app-components/app-content-components/doctor-components/DoctorSideBarComponent.vue'
import DoctorTabBodyComponent from '@/app-components/app-content-components/doctor-components/DoctorTabBodyComponent.vue'


export default {
  name:'DoctorDashboardMainComponent',
  components:{
    DoctorSideBarComponent,
    DoctorTabBodyComponent
  }
}
</script>

<style>

</style>