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

export default {
    name:'DashBoardMainComponent',
    components: {
    DashBoardHeaderComponent,
    TabBodyComponents
  },
}
</script>

<style>

</style>