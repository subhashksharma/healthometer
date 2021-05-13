<template>
<div>
     <div class="az-dashboard-nav"> 
            <nav class="nav">
              <a class="nav-link" v-on:click="activetab=1" v-bind:class="[ activetab === 1 ? 'active' : '' ]" >Overview</a>
              <a class="nav-link" v-on:click="activetab=2" v-bind:class="[ activetab === 2 ? 'active' : '' ]">Real time</a>
            </nav>

            <nav class="nav">
              <a class="nav-link" href="#"><i class="far fa-save"></i> Save Report</a>
              <a class="nav-link" href="#"><i class="far fa-file-pdf"></i> Export to PDF</a>
              <a class="nav-link" href="#"><i class="far fa-envelope"></i>Send to Email</a>
              <a class="nav-link" href="#"><i class="fas fa-ellipsis-h"></i></a>
            </nav>
          </div>
          <OverviewComponent v-if="activetab === 1" ></OverviewComponent>
          <RealtimeStatComponent v-if="activetab === 2" ></RealtimeStatComponent>
          </div>
          
</template>

<script>


import OverviewComponent from '@/app-components/app-content-components/patient-components/dashboard-components/OverviewComponent.vue'
import RealtimeStatComponent from '@/app-components/app-content-components/patient-components/dashboard-components/RealtimeStatComponent.vue'

export default {
    
name:"TabBodyComponent",
components: {
    OverviewComponent,
    RealtimeStatComponent
  },

data()  {
  return {
    activetab :2
  }
}

}
 
</script>

<style>

</style>