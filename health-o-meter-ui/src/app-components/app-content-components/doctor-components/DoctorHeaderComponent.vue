<template>
      <div class="az-header">
      <div class="container">
        <div class="az-header-left">
          <router-link to="/patient-health-dashboard"><a class="az-logo"><span style="color : #5b47fb">Health "O" Meter</span></a></router-link> 
          <a href="" id="azMenuShow" class="az-header-menu-icon d-lg-none"><span></span></a>
        </div><!-- az-header-left -->
        <div class="az-header-menu">
          <!-- <div class="az-header-menu-header">
            <a href="index.html" class="az-logo"><span></span> Health "O" Meter</a>
            <a href="" class="close">&times;</a>
          </div> -->
          <!-- az-header-menu-header -->
          <ul class="nav">
        
          </ul>
        </div><!-- az-header-menu -->
        <div class="az-header-right">
          <a href="" target="_blank" class="az-header-search-link"><i class="far fa-file-alt"></i></a>
          <a href="" class="az-header-search-link"><i class="fas fa-search"></i></a>
          <div class="az-header-message">
            <a href="#"><i class="typcn typcn-messages"></i></a>
          </div><!-- az-header-message -->

          <div class="dropdown az-header-notification" v-on:click="notificationOn" >
            <a class="new"><i class="typcn typcn-bell"></i></a>
            <NotificationPopUp :isNotificationActive="isNotificationActive"></NotificationPopUp>
          </div><!-- az-header-notification -->
          <div class="dropdown az-profile-menu" v-on:click="profileOn" >
            <a  class="az-img-user">   <svg class="az-img-user" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 6c1.654 0 3 1.346 3 3s-1.346 3-3 3s-3-1.346-3-3s1.346-3 3-3m0-2C9.236 4 7 6.238 7 9s2.236 5 5 5s5-2.238 5-5s-2.236-5-5-5zm0 13c2.021 0 3.301.771 3.783 1.445c-.683.26-1.969.555-3.783.555c-1.984 0-3.206-.305-3.818-.542C8.641 17.743 9.959 17 12 17m0-2c-3.75 0-6 2-6 4c0 1 2.25 2 6 2c3.518 0 6-1 6-2c0-2-2.354-4-6-4z" fill="#626262"/></svg>
           </a>
            <PatientProfilePopUp :isProfileActive="this.isProfileActive" ></PatientProfilePopUp>
          </div>
        </div><!-- az-header-right -->
      </div><!-- container -->
    </div><!-- az-header -->
</template>

<script>
import PatientProfilePopUp from '@/app-components/app-shared-components/PatientProfilePopUp.vue'
import NotificationPopUp from '@/app-components/app-shared-components/NotificationPopUp.vue'
export default {
  name: 'DoctorHeaderComponent',
  components: {
    PatientProfilePopUp,
    NotificationPopUp
  },
   data() {
    return {
    isProfileActive :false,
    isNotificationActive:false
    };
  },

  methods: {
     notificationOn(){
      this.isProfileActive =false;
      this.isNotificationActive = !this.isNotificationActive

    }, 
    profileOn() {
      this.isProfileActive = !this.isProfileActive
      this.isNotificationActive = false;
    }, 
  
    getpatientbyId: async function(id) {
      const { data } = await PatientInfoRepository.getPatient(id);
      console.log(`patient data ${data}`);
    }
  }


}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
