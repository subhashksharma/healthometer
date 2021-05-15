<template>
    <body class="az-body">
    <div class="az-signin-wrapper">
      <div class="az-card-signin">
        <h1 class="az-logo">HealthOMeter</h1>
        <div class="az-signin-header">
           <h2>{{error ==='' ? `Welcome back!` : error}}</h2>
          <h4>Please sign in to continue</h4>

        <form @submit.prevent="loginToSystem">
         <div class="form-group">
              <label class="rdiobox">
                <input name="radio" type="radio" :value="'d'" @click="setLoginAs">
                <span>As Doctor</span>
              </label>
            </div><!-- form-group -->

          <div class="form-group">
               <label class="rdiobox">
                <input name="radio" type="radio" :value="'p'" @click="setLoginAs">
                <span>As Patient</span>
              </label>
            </div><!-- form-group -->


            <div class="form-group">
              <label>Email</label>
              <input type="text" class="form-control" placeholder="Enter your email" v-model="email">
            </div><!-- form-group -->
            <div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control" placeholder="Enter your password" v-model="password" >
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
import AuthRepository from '@/app-helper-services/repository/AuthRepository.js'
export default {
name:'AppLogin',
 data() {
    return {
      email: 'subhash@gmail.com',
      password: 'subhash',
      loginAs:'',
      error: ''
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
    const loginInfo = await AuthRepository.signInUser({email :this.email, password: this.password, role: this.loginAs})
       .then((patient) => {
         this.$store.commit("setSpinner", false);
            this.$store.commit("setScreenLock", false);
      return patient;
    })
    .catch((err) => {
      console.log("getting all error" + JSON.stringify(err.response.data.error));
      this.error = err.response.data.error
      this.$store.commit("setSpinner", false);
      this.$store.commit("setScreenLock", false);
    });
          console.log("loginInfo " + loginInfo) ;
          if(loginInfo && loginInfo.data) {
              this.$store.dispatch("loginInfoAction", {
                userId: loginInfo.data.id,
                userName: loginInfo.data.email,
                firstName:loginInfo.data.firstName,
                lastName: loginInfo.data.lastName,
                token: loginInfo.data.token,
                role:loginInfo.data.role,
                isLoggedIn: true,
              });
          
            if(loginInfo.data.role==='d' && loginInfo.data.token ) {
              router.push('doctor-dashboard')
            }else if(loginInfo.data.role==='p' && loginInfo.data.token )  { 
              router.push('patient-health-dashboard')
            }
           
        }
  }


  // async   loginToSystem() {
  //      console.log(this.email);
  //       this.$store.commit("setSpinner", true);
  //           this.$store.commit("setScreenLock", true);
  //         const loginInfo = await AuthRepository.signInUser({email :this.email, password: this.password, role: this.loginAs});
          
  //         console.log(loginInfo);
  //         if(loginInfo.data) {
  //             this.$store.dispatch("loginInfoAction", {
  //               userId: loginInfo.data.id,
  //               userName: loginInfo.data.email,
  //               firstName:loginInfo.data.firstName,
  //               lastName: loginInfo.data.lastName,
  //               token: loginInfo.data.token,
  //               role:loginInfo.data.role,
  //               isLoggedIn: true,
  //             });
  //           this.$store.commit("setSpinner", false);
  //           this.$store.commit("setScreenLock", false);

  //           if(loginInfo.data.role==='d' && loginInfo.data.token ) {
  //             router.push('doctor-dashboard')
  //           }else if(loginInfo.data.role==='p' && loginInfo.data.token )  { 
  //             router.push('patient-health-dashboard')
  //           }
           
  //       }else{
  //        await new Promise(resolve => setTimeout(resolve, 300));
  //           this.$store.commit("setSpinner", false);
  //           this.$store.commit("setScreenLock", false);
  //           this.isLoggedIn = false;
  //           this.error ='invalid login'
  //     }   
  // }
  
}



}
</script>

<style>

</style>