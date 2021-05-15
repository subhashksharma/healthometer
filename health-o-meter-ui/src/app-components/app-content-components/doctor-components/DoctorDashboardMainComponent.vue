<template>
  <div class="az-content az-content-profile">
      <div class="container mn-ht-100p">
        <DoctorSideBarComponent></DoctorSideBarComponent>
        <DoctorTabBodyComponent></DoctorTabBodyComponent>
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