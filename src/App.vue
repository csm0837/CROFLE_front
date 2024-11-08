<!-- src/App.vue -->
<template>
  <div id="app">
    
    <Navbar v-if="!hideNavAndFooter" />
    <div class="main-container">
      <router-view />
    </div>
    <Footer v-if="!hideNavAndFooter" />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
  computed: {
    hideNavAndFooter() {

      return ['/login', '/signup', '/recovery', '/admin/login'].includes(this.$route.path) || this.$route.path.startsWith('/admin');
    }
  }
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  margin: 0 auto;
}

.main-container {
  width: 100%;
  max-width: 1200px;
  flex: 1;
  padding: 1rem;
  box-sizing: border-box;
}
</style>
