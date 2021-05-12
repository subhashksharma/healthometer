<template>
<div class="az-content az-content-dashboard">
      <div class="container">
        
        <div class="az-content-body">
            <PatientDashBoardHeaderComponent></PatientDashBoardHeaderComponent>
            <TabBodyComponent></TabBodyComponent>
        </div>
      </div>
</div>
</template>

<script>

import PatientDashBoardHeaderComponent from '@/app-components/app-content-components/patient-components/dashboard-components/PatientDashBoardHeaderComponent.vue'
import TabBodyComponent from '@/app-components/app-content-components/patient-components/dashboard-components/TabBodyComponent.vue'

export default {
    name:'DashBoardMainComponent',
    components: {
    PatientDashBoardHeaderComponent,
    TabBodyComponent
  },
}
</script>

<style>

</style>