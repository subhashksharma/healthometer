<template>
  <canvas :id="chartName"> </canvas>
</template>
<script>
import { Line } from 'vue-chartjs';
import 'chartjs-plugin-streaming';
export default {
  name: 'GenericRealTimeChartComponent',

  props: {
    chartName: {
      type: String,
    },
  },
  data() {
    return {};
  },
  methods: {
    onRefresh(chart) {
      var now = Date.now();
      chart.data.datasets.forEach(function(dataset) {
        dataset.data.push({
          x: now,
          y: Math.random(),
        });
      });
    },
  },
  mounted() {
    var ctx3 = document.getElementById(this.chartName).getContext('2d');
    var gradient = ctx3.createLinearGradient(0, 0, 0, 250);
    gradient.addColorStop(0, '#560bd0');
    gradient.addColorStop(1, '#00cccc');

    new Chart(ctx3, {
      type: 'line',
      data: {
        datasets: [
          {
            backgroundColor: gradient,
            borderColor: '#007bff',
            borderWidth: 1,
            fill: false,
          }
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
              display: false,
                labels: {
                  display: false
                }
            },
        scales: {
          xAxes: [
            {
              type: 'realtime',
              realtime: {
                onRefresh: this.onRefresh,
                delay: 500,
              },
            },
          ],
        },
        plugins: {
          streaming: {
            frameRate: 10,
          },
        },
        
        tooltips: {
            callbacks: {
              label: function(tooltipItem) {
                      return tooltipItem.yLabel;
              }
            }
        }
      },
    });

    // this.renderChart({
    //   datasets: [{
    //     data: [],
    //     label: 'Dataset 1',
    //     borderColor: '#f10075',
    //     borderWidth: 1,
    //     fill: false,
    //     borderWidth: 1,
    //     backgroundColor: "#f10075"
    //   }]
    // }, {
    //   scales: {
    //     responsive: true,
    //     maintainAspectRatio: false,
    //     xAxes: [{
    //       type: 'realtime',
    //       realtime: {
    //         onRefresh: this.onRefresh,
    //         delay: 5000
    //       }
    //     }]
    //   },
    //   plugins: {
    //       streaming: {
    //         frameRate: 10
    //       }
    //     }

    // });
  },
};
</script>
