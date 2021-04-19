<template>
  <div><AppHeader></AppHeader>
  <DashBoardMainComponent></DashBoardMainComponent>
  <AppFooter></AppFooter>
  </div>
</template>


<script>
import AppHeader from '@/app-components/app-shared-components/AppHeader.vue'
import AppFooter from '@/app-components/app-shared-components/AppFooter.vue'
import DashBoardMainComponent from '@/app-components/app-content-components/dashboard-components/DashBoardMainComponent.vue'
import { onMounted, ref } from 'vue'
import { useState } from  '@/app-store/index'

export default {
  name: 'HealthDashboardHome',
  components: {
    AppHeader,
    AppFooter,
    DashBoardMainComponent
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