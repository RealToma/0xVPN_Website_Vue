<script setup lang="ts">
import ArrowRight from './icons/Arrow-right.vue'
</script>
<template>
  <section id="P2P" class="px-5 w-full pt-[120px] pb-[70px] bg-[#1D1C3E]">
    <div class="container lg:px-0">
      <h1 class="text-center font-semibold leading-[87px] text-4xl lg:text-[64px] text-white" data-aos="fade-up">
        0xVPN Desktop Client
      </h1>
      <p class="text-center font-medium text-xl lg:text-[26px] text-white mt-[28px] mb-[52px]" data-aos="fade-up">
        Our client is available for both Mac & Windows.
      </p>

      <div data-aos="fade-up" class="w-full flex justify-center items-center gap-[23px] pt-[50px]">
        <button
          class="hover:cursor-pointer bg-[#FCBB14] hover:border-transparent text-[#121829] px-[38px] rounded-[23px] font-medium py-[13px] text-base hover:bg-white duration-[0.3s] transition-all">
          Download for Mac
        </button>
        <button
          class="hover:cursor-pointer hover:bg-white hover:border-transparent hover:text-[#121829] duration-[0.3s] px-[38px] border border-white rounded-[23px] font-medium py-[13px] bg-[#1B255C] text-white text-base">
          Download for Windows
        </button>
      </div>
    </div>
  </section>
</template>
