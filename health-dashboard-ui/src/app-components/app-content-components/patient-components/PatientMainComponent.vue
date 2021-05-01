<template>
  <div class="az-content az-content-profile">
      <div class="container mn-ht-100p">
        <PatientSideBarComponent></PatientSideBarComponent>
        <PatientTabBodyComponent></PatientTabBodyComponent>
      </div><!-- container -->
    </div><!-- az-content -->
    
</template>

<script>
import PatientSideBarComponent from '@/app-components/app-content-components/patient-components/PatientSideBarComponent.vue'
import PatientTabBodyComponent from '@/app-components/app-content-components/patient-components/PatientTabBodyComponent.vue'


export default {
  name:'PatientMainComponent',
  components:{
    PatientSideBarComponent,
    PatientTabBodyComponent
  }
}
</script>

<style>

</style>