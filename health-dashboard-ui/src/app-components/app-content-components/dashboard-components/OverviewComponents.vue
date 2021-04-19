<template>
  
    <div class="row row-sm">
            <div class="col-sm-8 col-md-6">
              <div class="az-content-label mg-b-5">Line Chart</div>
              <p class="mg-b-20">Below is the basic line chart example.</p>
              <div class="chartjs-wrapper-demo"><canvas id="chartLine1"></canvas></div>
            </div><!-- col-6 -->
            <div class="col-sm-8 col-md-6 mg-t-20 mg-md-t-0">
              <div class="az-content-label mg-b-5">Area Chart</div>
              <p class="mg-b-20">Below is the basic area chart example.</p>
              <div class="chartjs-wrapper-demo"><canvas id="chartArea1"></canvas></div>
            </div><!-- col-6 -->

            <div class="col-sm-8 col-md-6 col-xl-4 mg-t-20 mg-md-t-0">
              <div class="az-content-label az-content-label-sm mg-b-15">With Transparency</div>
              <div class="ht-200 ht-lg-250"><canvas id="chartBar3"></canvas></div>
            </div>
             <!-- col-6 -->

    </div><!-- row -->

</template>

<script>
export default {
     name:'OverviewComponents',

mounted() {

  /* LINE CHART */
  var ctx8 = document.getElementById('chartLine1');
  new Chart(ctx8, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        data: [12, 15, 18, 40, 35, 38, 32, 20, 25, 15, 25, 30],
        borderColor: '#f10075',
        borderWidth: 1,
        fill: false
      },{
        data: [10, 20, 25, 55, 50, 45, 35, 30, 45, 35, 55, 40],
        borderColor: '#007bff',
        borderWidth: 1,
        fill: false
      }]
    },
    options: {
      maintainAspectRatio: false,
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
            max: 100
          }
        }],
        xAxes: [{
          ticks: {
            beginAtZero:true,
            fontSize: 11
          }
        }]
      }
    }
  });

  var ctx3 = document.getElementById('chartBar3').getContext('2d');
  var gradient = ctx3.createLinearGradient(0, 0, 0, 250);
  gradient.addColorStop(0, '#560bd0');
  gradient.addColorStop(1, '#00cccc');

  new Chart(ctx3, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: '# of Votes',
        data: [12, 39, 20, 10, 25, 18],
        backgroundColor: gradient
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

  /** AREA CHART **/
  var ctx9 = document.getElementById('chartArea1');

  var gradient1 = ctx3.createLinearGradient(0, 350, 0, 0);
  gradient1.addColorStop(0, 'rgba(241,0,117,0)');
  gradient1.addColorStop(1, 'rgba(241,0,117,.5)');

  var gradient2 = ctx3.createLinearGradient(0, 280, 0, 0);
  gradient2.addColorStop(0, 'rgba(0,123,255,0)');
  gradient2.addColorStop(1, 'rgba(0,123,255,.3)');

  new Chart(ctx9, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        data: [12, 15, 18, 40, 35, 38, 32, 20, 25, 15, 25, 30],
        borderColor: '#f10075',
        borderWidth: 1,
        backgroundColor: gradient1
      },{
        data: [10, 20, 25, 55, 50, 45, 35, 37, 45, 35, 55, 40],
        borderColor: '#007bff',
        borderWidth: 1,
        backgroundColor: gradient2
      }]
    },
    options: {
      maintainAspectRatio: false,
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

<style>

</style>