<script setup lang="ts">
import AOS from 'aos'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Howitworks from './components/How-it-works.vue'
import Token from './components/Token.vue'
import Collaboration from './components/Collaboration.vue'
import RoadMap from './components/Road-map.vue'
import FAQ from './components/Faq.vue'
import Footer from './components/Footer.vue'

import { onMounted } from 'vue'
onMounted(() => {
  AOS.init()
})
</script>
<template>
  <div>
    <Header />
    <Hero />
    <Howitworks />
    <Token />
    <Collaboration />
    <RoadMap />
    <FAQ />
    <Footer />
  </div>
</template>

<style>
body {
  overflow-x: hidden;
}

html {
  scroll-behavior: smooth;
}
</style>
