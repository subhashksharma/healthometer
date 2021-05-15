<template>
        <div class="az-profile-overview">
            <div class="az-img-user">
              <!-- <img src="../../../assets/img/faces/face1.jpg" alt=""> -->
              <svg class="az-img-user" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 6c1.654 0 3 1.346 3 3s-1.346 3-3 3s-3-1.346-3-3s1.346-3 3-3m0-2C9.236 4 7 6.238 7 9s2.236 5 5 5s5-2.238 5-5s-2.236-5-5-5zm0 13c2.021 0 3.301.771 3.783 1.445c-.683.26-1.969.555-3.783.555c-1.984 0-3.206-.305-3.818-.542C8.641 17.743 9.959 17 12 17m0-2c-3.75 0-6 2-6 4c0 1 2.25 2 6 2c3.518 0 6-1 6-2c0-2-2.354-4-6-4z" fill="#626262"/></svg>
            </div><!-- az-img-user -->
            <div class="d-flex justify-content-between mg-b-20">
              <div>
                <h5 class="az-profile-name">Sophia White</h5>
                <p class="az-profile-name-text">UI/UX Designer</p>
              </div>
              <div class="btn-icon-list">
                <button class="btn btn-indigo btn-icon"><i class="typcn typcn-plus-outline"></i></button>
                <button class="btn btn-primary btn-icon"><i class="typcn typcn-message"></i></button>
              </div>
            </div>

            <div class="az-profile-bio">
              Genius, Compiler, Powerful Multitasker, Fantasy Fruit Loop, Replacement President of a Major Soft Drink Manufacturer. <a href="">More</a>
            </div><!-- az-profile-bio -->
            <hr class="mg-y-30">
            <label class="az-content-label tx-13 mg-b-20">Medical Provider</label>
            
          </div><!-- az-profile-overview -->
</template>

<script>
export default {
    name:'DoctorSideProfileComponent'

}
</script>

<style>

</style>