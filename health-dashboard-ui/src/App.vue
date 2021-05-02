<template>
  <!-- disabling screen lock -->
  <app-screen-lock v-if="state.screenLock"></app-screen-lock>
  <!-- progress spinner -->
  <app-spinner v-if="state.showSpinner"></app-spinner>
  <router-view ></router-view>
</template>

<script>
import AppSpinner from '@/app-components/app-shared-components/AppSpinner.vue';
import AppScreenLock from '@/app-components/app-shared-components/AppScreenLock.vue';

import { useState } from '@/app-store/index';
import { onMounted } from 'vue';

export default {
  name: 'App',
  components: {
    AppSpinner,
    AppScreenLock,
  },

  setup() {
    const state = useState();
    onMounted(() => {
      state.screenLock = false;
      state.showSpinner = false;
    });
    return {
      state,
    };
  },
};
</script>

<style lang="scss">
/* @import '@/assets/scss/azia.scss'; */
</style>
