<script setup lang="ts"></script>
<template>
  <section id="P2P" class="px-5 w-full pt-[155px] pb-[70px] bg-[#1D1C3E]">
    <div class="container lg:px-0">
      <h1
        class="text-center font-semibold leading-[87px] text-4xl lg:text-[64px] text-white"
        data-aos="fade-up"
      >
        0xVPN Desktop Client
      </h1>
      <p
        class="text-center font-medium text-xl lg:text-[26px] text-white mt-[28px] mb-[52px]"
        data-aos="fade-up"
      >
        Our client is available for both Mac & Windows.
      </p>

      <div
        data-aos="fade-up"
        class="w-full flex justify-center items-center lg:flex-row flex-col gap-[23px] pt-[50px]"
      >
        <button
          class="flex items-center max-w-[320px] hover:cursor-pointer hover:bg-[#FCBB14] hover:border-transparent duration-[0.3s] px-[38px] border border-black rounded-[23px] font-medium py-[13px] bg-black text-white text-base"
        >
          <div class="flex mr-[5px]"><img src="/mac.png" width="20px" alt="mac" /></div>
          <div class="flex">Download for Mac</div>
        </button>
        <button
          class="flex max-w-[320px] items-center hover:cursor-pointer hover:bg-[#FCBB14] hover:border-transparent duration-[0.3s] px-[38px] border border-black rounded-[23px] font-medium py-[13px] bg-black text-white text-base"
        >
          <div class="flex mr-[5px]"><img src="/windows.png" width="20px" alt="mac" /></div>
          <div class="flex">Download for Windows</div>
        </button>
      </div>
    </div>
  </section>
</template>
