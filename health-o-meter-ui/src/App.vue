<template>
  <!-- disabling screen lock -->
  <div id="app">
  <app-screen-lock v-if="showSpinner"></app-screen-lock>
  <!-- progress spinner -->
  <app-spinner v-if="screenLock"></app-spinner>
  <router-view ></router-view>
  </div>
</template>

<script>
import AppSpinner from '@/app-components/app-shared-components/AppSpinner.vue';
import AppScreenLock from '@/app-components/app-shared-components/AppScreenLock.vue';

export default {
  name: 'App',
  components: {
    AppSpinner,
    AppScreenLock,
  },

  computed: {
    showSpinner() {
      return this.$store.getters.spinner;
    },
    screenLock() {
      return this.$store.getters.screenLock;
    },
  },
  
};
</script>

<style lang="scss">
 @import '@/assets/scss/azia.scss' 
</style>
