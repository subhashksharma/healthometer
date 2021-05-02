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
          <OverviewComponent v-if="activetab === 1" ></OverviewComponent>
          <StatComponent v-if="activetab === 2" ></StatComponent>
          <DemographicsComponent v-if="activetab === 3"></DemographicsComponent>
          <MoreComponent v-if="activetab === 4"></MoreComponent>
          </div>
          
</template>

<script>

import { ref } from 'vue'

import OverviewComponent from '@/app-components/app-content-components/dashboard-components/OverviewComponent.vue'
import StatComponent from '@/app-components/app-content-components/dashboard-components/StatComponent.vue'
import DemographicsComponent from '@/app-components/app-content-components/dashboard-components/DemographicsComponent.vue'
import MoreComponent from '@/app-components/app-content-components/dashboard-components/MoreComponent.vue'
export default {
    
name:"TabBodyComponent",
components: {
    OverviewComponent,
    StatComponent,
    DemographicsComponent,
    MoreComponent
    
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