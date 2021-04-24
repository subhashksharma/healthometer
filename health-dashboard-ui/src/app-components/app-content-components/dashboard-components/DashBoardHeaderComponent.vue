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
              <a class="btn btn-purple" @click="getRealtimeData" >Export</a>
            </div>
          </div><!-- az-dashboard-one-title -->

</template>

<script>

import io from "socket.io-client";
var socket = io.connect("http://localhost:8080");
   
export default {
    name : 'DashBoardHeaderComponent',
    setup() {
    
    socket.on('connect', (data) => {
                console.log('Connected to server')
            });

     function  getRealtimeData() {
       console.log('got click ')
        socket.on("message", fetchedData => {
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