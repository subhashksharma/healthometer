<template>
     <div class="az-content-body az-content-body-profile">
          <nav class="nav az-nav-line">
            <a class="nav-link" v-on:click="activetab=1" v-bind:class="[ activetab === 1 ? 'active' : '' ]" >Patient Overview</a>
            <a class="nav-link" v-on:click="activetab=2" v-bind:class="[ activetab === 2 ? 'active' : '' ]" >Patient Demographics</a>
            <a  class="nav-link" v-on:click="activetab=3" v-bind:class="[ activetab === 3 ? 'active' : '' ]" >General Reports </a>
            <a class="nav-link" v-on:click="activetab=4" v-bind:class="[ activetab === 4 ? 'active' : '' ]" >General</a>
            <a  class="nav-link" v-on:click="activetab=5" v-bind:class="[ activetab === 5 ? 'active' : '' ]" >Billing</a>
          </nav>
<PatientOverviewComponent v-if="activetab === 1"></PatientOverviewComponent>
<PatientDemographicsComponent v-if="activetab === 2"></PatientDemographicsComponent>
<PatientReportComponent v-if="activetab === 3"></PatientReportComponent>
<PatientBillingComponent v-if="activetab === 4"></PatientBillingComponent>
<PatientBillingComponent v-if="activetab === 5"></PatientBillingComponent>

</div><!-- az-content-body -->
          
</template>

<script>

import { ref } from 'vue'

import PatientOverviewComponent from '@/app-components/app-content-components/patient-components/PatientOverviewComponent.vue'
import PatientDemographicsComponent from '@/app-components/app-content-components/patient-components/PatientDemographicsComponent.vue'
import PatientReportComponent from '@/app-components/app-content-components/patient-components/PatientReportComponent.vue'
import PatientBillingComponent from '@/app-components/app-content-components/patient-components/PatientBillingComponent.vue'
//import PatientBillingComponent from '@/app-components/app-content-components/patient-components/PatientBillingComponent.vue'
export default {
    
name:"PatientTabBodyComponent",
components: {
    PatientOverviewComponent,
    PatientDemographicsComponent,
    PatientReportComponent,
    PatientBillingComponent
    
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