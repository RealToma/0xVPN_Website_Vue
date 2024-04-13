<script setup lang="ts">
import ArrowRight from './icons/Arrow-right.vue'
</script>
<template>
  <section id="P2P" class="px-5 w-full pt-[155px] pb-[70px] bg-[#1D1C3E]">
    <div class="container lg:px-0">
      <h1
        class="text-center font-semibold leading-[87px] text-4xl lg:text-[64px] text-white"
        data-aos="fade-up"
      >
        How does it work?
      </h1>
      <p
        class="text-center font-medium text-xl lg:text-[26px] text-white mt-[28px] mb-[52px]"
        data-aos="fade-up"
      >
        0xVPN P2P Distributed Network is composed of two main components: clients and nodes.
      </p>

      <div
        data-aos="fade-up"
        class="flex flex-col md:flex-col gap-28 lg:flex-col xl:flex-row items-center"
      >
        <div class="w-full lg:w-full xl:w-1/2">
          <p class="font text-xl lg:text-[30px] leading-7 lg:leading-[41px] mb-[50px] text-white">
            The client is the software that you install on your device to connect to the VPN network
            and browse the web securely.
            <br />
            <br />
            The node is the software that you install on your server to lend your internet
            connection to the network, and in return, earn rewards.
            <br />
            <br />
            Our goal: to become the first L2-Chain for a decentralized P2P VPN, accessible
            worldwide, without censorship and respecting your privacy, where clients bid for node
            usage, creating a decentralized VPN marketplace.
          </p>
          <a
            href="https://t.me/zerox_vpn_bot"
            target="_blank"
            class="max-w-[300px] rounded-[27px] mt-[0px] text-white flex text-xl leading-[16px] items-center justify-between border border-white px-[30px] py-[12px] hover:bg-white hover:text-[#121829] duration-[0.3s] transition-all"
          >
            Become a Node
            <ArrowRight />
          </a>
        </div>
        <div class="w-full lg:w-full xl:w-1/2 mt-5">
          <div
            class="lg:w-full w-full xl:max-w-[600px] h-[600px] bg-[#1B255C] flex justify-center items-center rounded-[15px]"
          >
            <img src="/P2P.png" alt="" class="w-full h-full object-cover rounded-[15px]" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
