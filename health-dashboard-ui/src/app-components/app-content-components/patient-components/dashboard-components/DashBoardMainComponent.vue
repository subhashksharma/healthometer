<template>
<div class="az-content az-content-dashboard">
      <div class="container">
        
        <div class="az-content-body">
            <DashBoardHeaderComponent></DashBoardHeaderComponent>
            <TabBodyComponent></TabBodyComponent>
        </div>
      </div>
</div>
</template>

<script>

import DashBoardHeaderComponent from '@/app-components/app-content-components/patient-components/dashboard-components/DashBoardMainComponent.vue'
import TabBodyComponent from '@/app-components/app-content-components/patient-components/dashboard-components/TabBodyComponent.vue'

export default {
    name:'DashBoardMainComponent',
    components: {
    DashBoardHeaderComponent,
    TabBodyComponent
  },
}
</script>

<style>

</style>