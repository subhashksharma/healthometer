<template>
<div><AppHeader></AppHeader>
  <DoctorDashboardMainComponent></DoctorDashboardMainComponent>
  <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppHeader from '@/app-components/app-shared-components/AppHeader.vue'
import AppFooter from '@/app-components/app-shared-components/AppFooter.vue'
import DoctorDashboardMainComponent from '@/app-components/app-doctor-dashboard-components/DoctorDashboardMainComponent.vue'
import { onMounted, ref } from 'vue'
import { useState } from  '@/app-store/index'

export default {
  name: 'DoctorDashboardHome',
  components: {
    AppHeader,
    AppFooter,
    DoctorDashboardMainComponent
  },
   setup() {
    const error = ref(null)
    const state = useState()
 
    onMounted( async ()=> {
         try {
              await state.getTasks()
            } catch (e) {
              error.value = e
            }
    })
  
    console.log('I am running my self'+ JSON.stringify(state.tasks))
    return {
      error,
      state,
    }
  }

}
</script>

<style>

</style>