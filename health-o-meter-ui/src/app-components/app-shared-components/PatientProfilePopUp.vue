<template>
        <div class="dropdown-menu" v-bind:class="{ show: isProfileActive }" >
              <div class="az-dropdown-header d-sm-none">
                <a href="" class="az-header-arrow"><i class="icon ion-md-arrow-back"></i></a>
              </div>
              <div class="az-header-profile">
                <div class="az-img-user">
                     <svg class="az-img-user" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 6c1.654 0 3 1.346 3 3s-1.346 3-3 3s-3-1.346-3-3s1.346-3 3-3m0-2C9.236 4 7 6.238 7 9s2.236 5 5 5s5-2.238 5-5s-2.236-5-5-5zm0 13c2.021 0 3.301.771 3.783 1.445c-.683.26-1.969.555-3.783.555c-1.984 0-3.206-.305-3.818-.542C8.641 17.743 9.959 17 12 17m0-2c-3.75 0-6 2-6 4c0 1 2.25 2 6 2c3.518 0 6-1 6-2c0-2-2.354-4-6-4z" fill="#626262"/></svg>
           
                </div><!-- az-img-user -->
                <h6>{{this.patientData[0].patientFirstName}}</h6>
                <span>Premium Member</span>
              </div><!-- az-header-profile -->
            
            <router-link to="/patient-profile"><a class="dropdown-item"><i class="typcn typcn-user-outline"></i> My Profile</a></router-link> 
              
              <a href="" class="dropdown-item"><i class="typcn typcn-edit"></i> Edit Profile</a>
              <a href="" class="dropdown-item"><i class="typcn typcn-time"></i> Activity Logs</a>
              <a href="" class="dropdown-item"><i class="typcn typcn-cog-outline"></i> Account Settings</a>
              <a href="" class="dropdown-item" @click="signOut"><i class="typcn typcn-power-outline"></i> Sign Out</a>
            </div><!-- dropdown-menu -->
</template>

<script>
import router from '@/app-router/AppRouter';
import AuthRepository from '@/app-helper-services/repository/AuthRepository';
import PatientRepositoryFactory from  '@/app-helper-services/PatientRepositoryFactory';

const PatientInfoRepository = PatientRepositoryFactory.get('patient');


export default {
   name:"PatientProfilePopUp",
   props: {
  	isProfileActive: {
      type: Boolean,
  	},
  
  },
    data(){
        return {
          patientData:{}
        }
    },
    mounted(){
      this.getpatientbyId('60a02f98780af979c0b733f3')
    },
    methods: {
    signOut : async function() {

      this.$store.commit('setSpinner', true);
      this.$store.commit('setScreenLock', true);
      await AuthRepository.signOutUser({
      })
        .then((logoutInfo) => {
          this.$store.commit('setSpinner', false);
          this.$store.commit('setScreenLock', false);

           this.$store.this.state.logoutInfo = null
           router.push('/');

          return logoutInfo;
        })
        .catch((err) => {
          console.log(
            'not logout correctlt' + JSON.stringify(err.response.data.error)
          );
          this.error = err.response.data.error;
          this.$store.commit('setSpinner', false);
          this.$store.commit('setScreenLock', false);
        });


    },
    
    getpatientbyId: async function(id) {
      const { data } = await PatientInfoRepository.getPatient(id);
      this.patientData = data;
      console.log(`patient data from popo ${JSON.stringify(this.patientData)}`);
    }
  }

    }
</script>

<style>

</style>