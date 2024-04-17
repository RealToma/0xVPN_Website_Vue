<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AOS from 'aos'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Howitworks from './components/How-it-works.vue'
import Token from './components/Token.vue'
import Collaboration from './components/Collaboration.vue'
import RoadMap from './components/Road-map.vue'
import FAQ from './components/Faq.vue'
import Footer from './components/Footer.vue'

import DesktopClient from './components/DesktopClient.vue'
import LoadingSpinner from './components/LoadingSpinner.vue';

const isLoading = ref(true);

const loadWebsite = async () => {

  // Simulate loading website with a delay
  await new Promise(resolve => {
    setTimeout(resolve, 1500)
  });

  // Set isLoading to false once website is loaded
  isLoading.value = false;

};


onMounted(() => {
  AOS.init();
  loadWebsite();
});


// const components = {
//   LoadingSpinner
// }

</script>

<template>
  <div>
    <LoadingSpinner v-if="isLoading" />
    <div v-if="!isLoading">
      <Header />
      <Hero />
      <DesktopClient />
      <Howitworks />
      <Token />
      <Collaboration />
      <RoadMap />
      <FAQ />
      <Footer />
    </div>
  </div>

</template>

<style>
body {
  overflow-x: hidden;
  background: rgba(0,4,13,1);
}

html {
  scroll-behavior: smooth;
}
</style>