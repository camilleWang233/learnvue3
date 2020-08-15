<template>
  <div id="app">
    <NavBar></NavBar>
   
    <router-view />
    <Footer></Footer>

  </div>
</template>

<script>
// import Header form './layout.Header.vue';
// import Header from './layout/header';
import NavBar from './layout/NavBar';
import Footer from './layout/Footer';
export default {
  // 组件实例化
  components:{
    // Header,
    NavBar,
    Footer,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
