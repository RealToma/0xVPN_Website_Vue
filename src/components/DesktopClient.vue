<script setup lang="ts"></script>
<template>
  <section id="desktop-client" class="px-5 w-full pt-[100px] pb-[70px] bg-[#657fcb]">
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
        Our client is available for both Windows & Mac.
        <br /><br />
        This is a BETA version, please
        <a href="https://t.me/zerox_vpn_support" target="_blank" class="underline">report</a> any
        bugs to our team.
      </p>

      <div
        data-aos="fade-up"
        class="w-full flex justify-center items-center lg:flex-row flex-col gap-[23px] pt-[50px]"
      >
        <a
          href="https://download.0xvpn.org/0xVPN-Client-Setup-0.1.0.zip"
          class="flex max-w-[340px] items-center hover:cursor-pointer hover:bg-[#FCBB14] hover:border-transparent duration-[0.3s] px-[38px] border border-black rounded-[23px] font-medium py-[13px] bg-black text-white text-base"
        >
          <div class="flex mr-[5px]"><img src="/windows.png" width="20px" alt="mac" /></div>
          <div class="flex">&nbsp;Download for Windows (x64)</div>
        </a>
        <a
          href="https://download.0xvpn.org/0xVPN-Client-0.1.0-arm64.dmg"
          class="flex items-center max-w-[340px] hover:cursor-pointer hover:bg-[#FCBB14] hover:border-transparent duration-[0.3s] px-[38px] border border-black rounded-[23px] font-medium py-[13px] bg-black text-white text-base"
        >
          <div class="flex mr-[5px]"><img src="/mac.png" width="20px" alt="mac" /></div>
          <div class="flex">&nbsp;Download for Mac (M1/M2)</div>
        </a>
      </div>
    </div>
  </section>
</template>
