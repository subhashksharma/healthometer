<template>
  <div class="row row-sm">
    <div class="col-sm-6 mg-t-20 mg-lg-t-0 mg-b-20">
      <div class="card card-dashboard-four">
        <div class="card-header">
          <h6 class="card-title">Sessions by Channel</h6>
        </div>
        <!-- card-header -->
        <div class="card-body row">
          <div class="col-md-6 d-flex align-items-center">
         <GerericPieChartComponent></GerericPieChartComponent> 
          </div>
          <!-- col -->
          <div class="col-md-6 col-lg-5 mg-lg-l-auto mg-t-20 mg-md-t-0">
            <div class="az-traffic-detail-item">
              <div>
                <span>Oxygen level</span>
                <span>1,320 <span>(25%)</span></span>
              </div>
              <div class="progress">
                <div
                  class="progress-bar bg-purple wd-25p"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <!-- progress -->
            </div>
            <div class="az-traffic-detail-item">
              <div>
                <span>Bood Pressure</span>
                <span>987 <span>(20%)</span></span>
              </div>
              <div class="progress">
                <div
                  class="progress-bar bg-primary wd-20p"
                  role="progressbar"
                  aria-valuenow="20"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <!-- progress -->
            </div>
            <div class="az-traffic-detail-item">
              <div>
                <span>Referral</span>
                <span>2,010 <span>(30%)</span></span>
              </div>
              <div class="progress">
                <div
                  class="progress-bar bg-info wd-30p"
                  role="progressbar"
                  aria-valuenow="30"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <!-- progress -->
            </div>
            <div class="az-traffic-detail-item">
              <div>
                <span>Social</span>
                <span>654 <span>(15%)</span></span>
              </div>
              <div class="progress">
                <div
                  class="progress-bar bg-teal wd-15p"
                  role="progressbar"
                  aria-valuenow="15"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <!-- progress -->
            </div>
            <div class="az-traffic-detail-item">
              <div>
                <span>Other</span>
                <span>400 <span>(10%)</span></span>
              </div>
              <div class="progress">
                <div
                  class="progress-bar bg-gray-500 wd-10p"
                  role="progressbar"
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <!-- progress -->
            </div>
          </div>
          <!-- col -->
        </div>
        <!-- card-body -->
      </div>
      <!-- card-dashboard-four -->
    </div>

    <div class="col-sm-6 mg-t-20 mg-lg-t-0 mg-b-20">
      <div class="card card-dashboard-four">
        <div class="card-header">
          <h6 class="card-title">Real time feed</h6>
          <div class="az-toggle-group-demo">
            <div
              class="az-toggle az-toggle-success"
              v-on:click="isRealTimeMonitoringOn"
              v-bind:class="[activetab === true ? 'on' : '']"
            >
              <span></span>
            </div>
          </div>
        </div>
        <!-- card-header -->

        <div class="card-body row">
            <table class="table table-hover mg-b-0">
              <thead>
                <tr>
                  <th>Patient ID</th>
                  <th>Patient Name</th>
                  <th>Patient Age</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="data in patientData" :key="data.id">
                  <th scope="row">{{ data.id }}</th>
                  <td>{{ data.name }}</td>
                  <td>{{ data.age }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- card-body -->
      </div>

      <!-- card-dashboard-four -->



    <div class="col-sm-6 mg-t-20 mg-lg-t-0">
      <div class="card card-dashboard-four">
        <div class="card-header">
          <h6 class="card-title">Real time Oxygen level</h6>
        </div>
        <!-- card-header -->

        <div class="card-body row">
              <GenericRealTimeChartComponent v-bind:chartName="'realtimeOxyegen'"></GenericRealTimeChartComponent>
          </div>
        </div>
        <!-- card-body -->
      </div>

    <div class="col-sm-6 mg-t-20 mg-lg-t-0">
      <div class="card card-dashboard-four">
        <div class="card-header">
          <h6 class="card-title">Real time heart rate level</h6>
        </div>
        <!-- card-header -->

        <div class="card-body row">
              <GenericRealTimeChartComponent v-bind:chartName="'realtimeHeart'"></GenericRealTimeChartComponent>
          </div>
        </div>
        <!-- card-body -->
      </div>

    </div>
</template>

<script>
import GerericPieChartComponent from '@/app-components/app-utils-components/GerericPieChartComponent.vue';
import GenericRealTimeChartComponent from '@/app-components/app-utils-components/GenericRealTimeChartComponent.vue'
import io from 'socket.io-client';

let socket = io({
  autoConnect: false,
});

export default {
  name: 'RealtimeStatComponent',
  components: {
    GerericPieChartComponent,
    GenericRealTimeChartComponent
  },
  data() {
    return {
      activetab: false,
      patientData: [
        {
          name: 'Steve',
          age: 56,
          id: 1,
        },
        {
          name: 'Dave',
          age: 33,
          id: 2,
        },
      ],
    };
  },

  methods: {
    isRealTimeMonitoringOn() {
      this.activetab = !this.activetab;

      if (this.activetab) {
        socket = io.connect('http://localhost:8080');

        socket.on('connect', (data) => {
          console.log('Connected to server');
        });

        console.log('got click ');
        socket.on('message', (fetchedData) => {
          console.log(JSON.stringify(fetchedData));

          this.patientData.push(fetchedData);
        });
      } else {
        console.log('got click for disconnect');
        socket.emit('forceDisconnect', (fetchedData) => {
          console.log(JSON.stringify(fetchedData));
        });
      }
    },
  },
};
</script>

<style>

</style>
