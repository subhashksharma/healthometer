<template>
<div class="az-content az-content-dashboard">
      <div class="container">
        
        <div class="az-content-body">
            <!-- <DashBoardHeaderComponent></DashBoardHeaderComponent>
            <TabBodyComponents></TabBodyComponents> -->

            I am doctor dash baord
        </div>
      </div>
</div>
</template>

<script>
import DashBoardHeaderComponent from '@/app-components/app-content-components/dashboard-components/DashBoardHeaderComponent.vue'
import TabBodyComponent from '@/app-components/app-content-components/dashboard-components/TabBodyComponent.vue'

export default {
    name:'DoctorDashboardMainComponent',
    components: {
    DashBoardHeaderComponent,
    TabBodyComponent
  },
}
</script>

<style>

</style>