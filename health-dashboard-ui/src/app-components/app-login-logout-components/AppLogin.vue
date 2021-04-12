<template>
    <body class="az-body">
    <div class="az-signin-wrapper">
      <div class="az-card-signin">
        <h1 class="az-logo">Heart "O" Meter</h1>
        <div class="az-signin-header">
          <h2>{{state.error ==='' ? `Welcome back!` : state.error}}</h2>
          <h4>Please sign in to continue</h4>

          <form @submit.prevent="loginToSystem">
            <div class="form-group">
              <label>Email</label>
              <input type="text" class="form-control" placeholder="Enter your email" v-model="state.email">
            </div><!-- form-group -->
            <div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control" placeholder="Enter your password" v-model="state.password" >
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
import { useState } from '@/app-store/index';

export default {
name:'AppLogin',

setup( ) {

  const state = useState();
  async function  loginToSystem() {
       console.log(state.email);
       state.screenLock = true;
       state.showSpinner = true;
      if(state.email==='demo@demo.com' && state.password ==='demo'){ 
        await new Promise(resolve => setTimeout(resolve, 300));
            state.screenLock = false;
            state.showSpinner = false;
            state.isLoggedIn = true;
          router.push('health-dashboard')
         
      }else{
         await new Promise(resolve => setTimeout(resolve, 300));
            state.screenLock = false;
            state.showSpinner = false;
            state.isLoggedIn = true;
        state.error ='invalid login'
      }   
  }

  return {
    state,
    loginToSystem
  }
}
}
</script>

<style>

</style>