
<template>
  <transition name="spinner-fade">
    <div id="screenLock"></div>
  </transition>
</template>

<script>

export default {
  name: 'AppScreenLock'
}
</script>

<style scoped>
  #screenLock {
    cursor: not-allowed;
    opacity: .6;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0px;
    height: 100%;
    z-index: 10;
    background-color: #FFF;
  }
</style>
