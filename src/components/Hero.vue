<script setup lang="ts"></script>
<template>
  <section class="w-full hero-section pb-24">
    <div class="container px-5 lg:px-0 pt-[155px] flex">
      <div class="w-full lg:w-[50%] pt-[90px]">
        <h1
          data-aos="fade-up"
          class="font-bold text-4xl lg:text-[65px] leading-10 lg:leading-[88px] text-white"
        >
          Decentralized P2P <br />
          VPN Network
          <span class="text-[#FCBB14]">!</span>
        </h1>
        <p
          data-aos="fade-up"
          class="font text-xl lg:text-[30px] leading-7 lg:leading-[41px] mt-[53px] mb-[70px] text-white"
        >
          0xVPN allows you to browse the web securely and privately without any restrictions using a
          distributed P2P network.
        </p>
        <div class="w-full flex gap-[23px]">
          <button
            class="hover:cursor-pointer bg-[#FCBB14] hover:border-transparent text-[#121829] px-[38px] rounded-[23px] font-medium py-[13px] text-base hover:bg-white duration-[0.3s] transition-all"
          >
            Launch VPN Bot
          </button>
          <button
            class="hover:cursor-pointer hover:bg-white hover:border-transparent hover:text-[#121829] duration-[0.3s] px-[38px] border border-white rounded-[23px] font-medium py-[13px] bg-[#1B255C] text-white text-base"
          >
            Become a Node
          </button>
        </div>
      </div>
      <div></div>
    </div>
  </section>
</template>

<style>
.hero-section {
  background-size: cover;
  background-position: center;
  background-image: url('/hero-bg.png');
}
</style>
