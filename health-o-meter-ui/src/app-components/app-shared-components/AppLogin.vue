<template>
    <body class="az-body">
    <div class="az-signin-wrapper">
      <div class="az-card-signin">
        <h1 class="az-logo">HealthOMeter</h1>
        <div class="az-signin-header">
          <!-- <h2>{{state.error ==='' ? `Welcome back!` : state.error}}</h2> -->
          <h4>Please sign in to continue</h4>

        <form @submit.prevent="loginToSystem">
         <div class="form-group">
              <label class="rdiobox">
                <input name="radio" type="radio" :value="'doctor'" @click="setLoginAs">
                <span>As Doctor</span>
              </label>
            </div><!-- form-group -->

          <div class="form-group">
               <label class="rdiobox">
                <input name="radio" type="radio" :value="'patient'" @click="setLoginAs">
                <span>As Patient</span>
              </label>
            </div><!-- form-group -->


            <div class="form-group">
              <label>Email</label>
              <input type="text" class="form-control" placeholder="Enter your email" v-model="this.email">
            </div><!-- form-group -->
            <div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control" placeholder="Enter your password" v-model="this.password" >
            </div><!-- form-group -->
            <button class="btn btn-az-primary btn-block">Sign In</button>
          </form>
        </div><!-- az-signin-header -->
        <!-- <div class="az-signin-footer">
          <p><a href="">Forgot password?</a></p>
          <p>Don't have an account? <a href="page-signup.html">Create an Account</a></p>
        </div> -->
        <!-- az-signin-footer -->
      </div><!-- az-card-signin -->
    </div><!-- az-signin-wrapper -->

  </body>

</template>

<script>
import router from '@/app-router/AppRouter';

export default {
name:'AppLogin',
 data() {
    return {
      email: 'demo@demo.com',
      password: 'demo',
    };
  },

methods:{
    

   setLoginAs(event) {
    this.loginAs = event.target.value;
  },

  async   loginToSystem() {
       console.log(this.email);
        this.$store.commit("setSpinner", true);
            this.$store.commit("setScreenLock", true);
      if(this.email==='demo@demo.com' && this.password ==='demo'){ 
        await new Promise(resolve => setTimeout(resolve, 300));
            this.$store.commit("setSpinner", false);
            this.$store.commit("setScreenLock", false);
            //this.isLoggedIn = true;
            this.$store.getters.validateLogin.isLoggedIn = true;
            this.$store.commit("setValidateLoginInfo", this.$store.getters.validateLogin);
             router.push('patient-health-dashboard')
           
            // if(state.loginAs==='doctor'){
            //   router.push('doctor-dashboard')
            // } 
      }else{
         await new Promise(resolve => setTimeout(resolve, 300));
            this.$store.commit("setSpinner", false);
            this.$store.commit("setScreenLock", false);
            this.isLoggedIn = false;
            state.error ='invalid login'
      }   
  }
  
}



}
</script>

<style>

</style>