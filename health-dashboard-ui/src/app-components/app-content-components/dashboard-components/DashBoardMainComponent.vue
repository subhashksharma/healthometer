<template>
<div class="az-content az-content-dashboard">
      <div class="container">
        
        <div class="az-content-body">
            <DashBoardHeaderComponent></DashBoardHeaderComponent>
            <TabBodyComponents></TabBodyComponents>
        </div>
      </div>
</div>
</template>

<script>
import DashBoardHeaderComponent from '@/app-components/app-content-components/dashboard-components/DashBoardHeaderComponent.vue'
import TabBodyComponents from '@/app-components/app-content-components/dashboard-components/TabBodyComponents.vue'
import PlanetChart from '@/app-components/app-content-components/PlanetChart.vue'

import Chart from 'chart.js'

export default {
    name:'DashBoardMainComponent',
    components: {
    DashBoardHeaderComponent,
    TabBodyComponents,
    PlanetChart
  },
}
</script>

<style>

</style>