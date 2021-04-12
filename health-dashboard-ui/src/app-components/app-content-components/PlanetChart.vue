<template>
  <div>
    <canvas id="planet-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import planetChartData from '@/app-components/app-content-components/planet-data.js'
export default {
  name: 'PlanetChart',
    data() {
    return {
      planetChartData: planetChartData
    }
  },
  mounted() {
    //const ctx = document.getElementById('planet-chart');
   // new Chart(ctx, this.planetChartData);

   var ctx1 = document.getElementById('chartBar1').getContext('2d');
  new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: '# of Votes',
        data: [12, 39, 20, 10, 25, 18],
        backgroundColor: '#560bd0'
      }]
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      legend: {
        display: false,
          labels: {
            display: false
          }
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true,
            fontSize: 10,
            max: 80
          }
        }],
        xAxes: [{
          barPercentage: 0.6,
          ticks: {
            beginAtZero:true,
            fontSize: 11
          }
        }]
      }
    }
  });
  
  }
}
</script>