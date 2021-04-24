<template>
<div>
     <div class="az-dashboard-nav"> 
            <nav class="nav">
              <a class="nav-link" v-on:click="activetab=1" v-bind:class="[ activetab === 1 ? 'active' : '' ]" >Overview</a>
              <a class="nav-link" v-on:click="activetab=2" v-bind:class="[ activetab === 2 ? 'active' : '' ]">Real time</a>
              <a class="nav-link" v-on:click="activetab=3" v-bind:class="[ activetab === 3 ? 'active' : '' ]">Demographics</a>
              <a class="nav-link" v-on:click="activetab=4" v-bind:class="[ activetab === 4 ? 'active' : '' ]">Stats</a>
            </nav>

            <nav class="nav">
              <a class="nav-link" href="#"><i class="far fa-save"></i> Save Report</a>
              <a class="nav-link" href="#"><i class="far fa-file-pdf"></i> Export to PDF</a>
              <a class="nav-link" href="#"><i class="far fa-envelope"></i>Send to Email</a>
              <a class="nav-link" href="#"><i class="fas fa-ellipsis-h"></i></a>
            </nav>
          </div>
          <OverviewComponents v-if="activetab === 1" ></OverviewComponents>
          <StatComponents v-if="activetab === 2" ></StatComponents>
          <DemographicsComponents v-if="activetab === 3"></DemographicsComponents>
          <MoreComponents v-if="activetab === 4"></MoreComponents>
          </div>
          
</template>

<script>

import { ref } from 'vue'

import OverviewComponents from '@/app-components/app-content-components/dashboard-components/OverviewComponents.vue'
import StatComponents from '@/app-components/app-content-components/dashboard-components/StatComponents.vue'
import DemographicsComponents from '@/app-components/app-content-components/dashboard-components/DemographicsComponents.vue'
import MoreComponents from '@/app-components/app-content-components/dashboard-components/MoreComponents.vue'
export default {
    
name:"TabBodyComponents",
components: {
    OverviewComponents,
    StatComponents,
    DemographicsComponents,
    MoreComponents
    
  },

  setup(props) {
      const activetab = ref(1)

      return {
        activetab  
      }
  }
}
 
</script>

<style>

</style>