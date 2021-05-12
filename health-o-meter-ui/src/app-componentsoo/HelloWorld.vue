
<script>
import { Line } from 'vue-chartjs'
import 'chartjs-plugin-streaming';
export default {
  extends: Line,
  mounted () {
    this.renderChart({
      datasets: [{
        data: [],
        label: 'Dataset 1',
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderDash: [8, 4]
      }]
    }, {
      scales: {
        xAxes: [{
          type: 'realtime',
          realtime: {
            onRefresh: function(chart) {
              chart.data.datasets.forEach(function(dataset) {
                dataset.data.push({
                  x: Date.now(),
                  y: Math.random()
                });
              });
            },
            delay: 5000
          }
        }]
      },
plugins: {
          streaming: {          // per-chart option
            frameRate: 1       // chart is drawn 30 times every second
          }
        }

    });
  }
}

</script>