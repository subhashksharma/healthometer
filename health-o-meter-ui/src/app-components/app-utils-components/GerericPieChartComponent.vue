<template>
  <canvas id="canvasId"></canvas>
</template>

<script>
import Chart from 'chart.js';
export default {
  name: 'GenericPieChartComponent',
  props: {
    dataCheck: String,
  },


    mounted() {
              // Donut Chart
        var datapie = {
          labels: ['Oxygen level', 'Bood Pressure', 'Referral', 'Social', 'Other'],
          datasets: [{
            data: [25,20,30,15,10],
            backgroundColor: ['#6f42c1', '#007bff','#17a2b8','#00cccc','#adb2bd']
          }]
        };

        var optionpie = {
          maintainAspectRatio: false,
          responsive: true,
          legend: {
            display: false,
          },
          animation: {
            animateScale: true,
            animateRotate: true
          }
        };

        // For a doughnut chart
        var ctxpie= document.getElementById('canvasId');
        var myPieChart6 = new Chart(ctxpie, {
          type: 'doughnut',
          data: datapie,
          options: optionpie
        });
    }

};
</script>

<style></style>
