<template>
  <canvas id="canvasId"></canvas>
</template>

<script>
import {onMounted, ref , toRefs} from 'vue';
import {getChartData} from "@/app-helpers/chartServerData.js"
import  {Chart } from  'chart.js';
export default {
  name: 'GenericChartComponent',
props: {
  	nameCheck: {
      type: String,
  	}
  },

   setup(props) {

  const { nameCheck } = toRefs(props)

  console.log("Props VValue " + nameCheck.value)

  const refVal = getChartData(0);
 const data = ref(null);
   
   onMounted( async () => {

       data.value =  await refVal.fetchData();
      console.log('printin it' + JSON.stringify(data.value));
   
    //   const dataCheck = {
    //     type: 'line',
    //     data: {
    //       labels: [
    //         'Mercury',
    //         'Venus',
    //         'Earth',
    //         'Mars',
    //         'Jupiter',
    //         'Saturn',
    //         'Uranus',
    //         'Neptune',
    //       ],
    //       datasets: [
    //         {
    //           label: 'Number of Moons',
    //           data: [0, 0, 1, 2, 79, 82, 27, 14],
    //           backgroundColor: 'rgba(54,73,93,.5)',
    //           borderColor: '#36495d',
    //           borderWidth: 3,
    //         },
    //         {
    //           label: 'Planetary Mass (relative to the Sun x 10^-6)',
    //           data: [
    //             0.166,
    //             2.081,
    //             3.003,
    //             0.323,
    //             954.792,
    //             285.886,
    //             43.662,
    //             51.514,
    //           ],
    //           backgroundColor: 'rgba(71, 183,132,.5)',
    //           borderColor: '#47b784',
    //           borderWidth: 3,
    //         },
    //       ],
    //     },
    //     options: {
    //       responsive: true,
    //       lineTension: 1,
    //       scales: {
    //         yAxes: [
    //           {
    //             ticks: {
    //               beginAtZero: true,
    //               padding: 25,
    //             },
    //           },
    //         ],
    //       },
    //     },
    //   };

      const ctx = document.getElementById('canvasId');
      new Chart(ctx, data.value);
      //  }
    });

    return {data};
  },
};
</script>

<style></style>
