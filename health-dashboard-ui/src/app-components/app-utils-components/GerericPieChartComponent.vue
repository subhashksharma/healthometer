<template>
  <canvas id="canvasId"></canvas>
</template>

<script>
import { defineComponent, onMounted, ref, toRefs } from 'vue';
import { getChartData } from '@/app-helpers/chartServerData.js';
import Chart from 'chart.js';
export default {
  name: 'GenericChartComponent',
  props: {
    dataCheck: String,
  },

  setup(props) {
        //console.log(props.dataCheck);
    const refVal = getChartData(0);
    const data = ref(null);

    onMounted(async () => {
      data.value = await refVal.fetchData();
      console.log('printin it' + JSON.stringify(data.value));

      const ctx = document.getElementById('canvasId');
      new Chart(ctx, data.value);
      //  }
    });

    return { data };
  },
};
</script>

<style></style>
