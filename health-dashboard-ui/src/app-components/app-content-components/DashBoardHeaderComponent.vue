<template>
   
          <div class="az-dashboard-one-title">
            <div>
              <h2 class="az-dashboard-title">Hi, welcome back!</h2>
              <p class="az-dashboard-text">Your health analytics dashboard.</p>
            </div>
            <div class="az-content-header-right">
              <div class="media">
                <div class="media-body">
                  <label>Subscription Start Date</label>
                  <h6>Oct 10, 2018</h6>
                </div><!-- media-body -->
              </div><!-- media -->
              <div class="media">
                <div class="media-body">
                  <label>Subscription End Date</label>
                  <h6>Oct 23, 2018</h6>
                </div><!-- media-body -->
              </div><!-- media -->
              <div class="media">
                <div class="media-body">
                  <label>Event Category</label>
                  <h6>All Categories</h6>
                </div><!-- media-body -->
              </div><!-- media -->
              <a href="" class="btn btn-purple" @click="getRealtimeData" >Export</a>
              <button class="btn btn-purple" @click="getRealtimeData">Export1</button>
            </div>
          </div><!-- az-dashboard-one-title -->

          <div class="az-dashboard-nav"> 
            <nav class="nav">
              <a class="nav-link active" data-toggle="tab" href="#">Overvie</a>
              <a class="nav-link" data-toggle="tab" href="#">Stats</a>
              <a class="nav-link" data-toggle="tab" href="#">Demographics</a>
              <a class="nav-link" data-toggle="tab" href="#">More</a>
            </nav>

            <nav class="nav">
              <a class="nav-link" href="#"><i class="far fa-save"></i> Save Report</a>
              <a class="nav-link" href="#"><i class="far fa-file-pdf"></i> Export to PDF</a>
              <a class="nav-link" href="#"><i class="far fa-envelope"></i>Send to Email</a>
              <a class="nav-link" href="#"><i class="fas fa-ellipsis-h"></i></a>
            </nav>
          </div>
</template>

<script>

import io from "socket.io-client";
var socket = io.connect("http://localhost:8080");
   
export default {
    name : 'DashBoardHeaderComponent',
    setup() {
    socket.on('connect', (data) => {
                this.connect = data;
            });

     function  getRealtimeData() {
       console.log('got click ')
      socket.on("newdata", fetchedData => {
        console.log(JSON.stringify(fetchedData));
      })
    };

    return {
      getRealtimeData
    }
    }
}
</script>

<style>

</style>