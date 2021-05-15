<template>
     <div class="az-content-body az-content-body-profile">
          <nav class="nav az-nav-line">
            <a class="nav-link" v-on:click="activetab=1" v-bind:class="[ activetab === 1 ? 'active' : '' ]" >Doctor Overview</a>
            <a class="nav-link" v-on:click="activetab=2" v-bind:class="[ activetab === 2 ? 'active' : '' ]" >Disease Pridictor</a>
          </nav>
<DoctorOverviewComponent v-if="activetab === 1"></DoctorOverviewComponent>
<DiseasePridictorComponent v-if="activetab === 2"></DiseasePridictorComponent>

</div><!-- az-content-body -->
          
</template>

<script>

import DoctorOverviewComponent from '@/app-components/app-content-components/doctor-components/DoctorOverviewComponent.vue'
import DiseasePridictorComponent from '@/app-components/app-content-components/doctor-components/DiseasePridictorComponent.vue'
export default {
    
name:"DoctorTabBodyComponent",
components: {
    DoctorOverviewComponent,
    DiseasePridictorComponent,
    
  },

 data()  {
  return {
    activetab :1
  }
}
}
 
</script>

<style>

</style>