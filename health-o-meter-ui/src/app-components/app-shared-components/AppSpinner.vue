
<template>
  <transition name="spinner-fade">
    <div class="spinner" id="spinner"></div>
  </transition>
</template>

<script>

export default {
  name: 'AppSpinner'
}
</script>

<style scoped>
@keyframes spinner {
  to {transform: rotate(360deg);}
}

.spinner {
  /*border: 16px solid #61c0cc;*/
  border: 16px solid #b7e4ff;
  border-radius: 50%;
  border-top: 16px solid #5b47fb;;
  position: fixed;
  top: 35%;
  left: 50%;
  margin-left: -50px; 
  margin-top: -50px; 
  text-align: center;
  z-index: 1060;
  overflow: auto;
  width: 100px; 
  height: 100px; 
  overflow: visible;
  animation: spinner 1.6s linear infinite;
}

.spinner-fade-enter-active, .spinner-fade-leave-active {
    transition: opacity .4s;
}
.spinner-fade-enter, .spinner-fade-leave-to {
    opacity: 0;
}
</style>
