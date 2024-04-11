<script setup lang="ts">
import ArrowRight from './icons/Arrow-right.vue'
</script>
<template>
  <section id="P2P" class="px-5 w-full pt-[155px] pb-[70px] bg-[#1D1C3E]">
    <div class="container lg:px-0">
      <h1 class="text-center font-semibold leading-[87px] text-4xl lg:text-[64px] text-white" data-aos="fade-up">
        How does it work?
      </h1>
      <p class="text-center font-medium text-xl lg:text-[26px] text-white mt-[28px] mb-[52px]" data-aos="fade-up">
        0xVPN P2P Network is composed of two main components: the client and the node.
      </p>

      <div data-aos="fade-up" class="flex flex-col md:flex-col lg:flex-col xl:flex-row items-center gap-10">
        <div class="w-full lg:w-full xl:w-1/2">
          <p class="font text-xl lg:text-[30px] leading-7 lg:leading-[41px] mt-[53px] mb-[70px] text-white">
            The client is the software that you install on your device to connect to the VPN network
            and browse the web securely. <br />
            <br />
            <br />
            <br />
            The node is the software that you install on your server to lend your bandwidth to the
            network, and in return, you earn rewards. <br />
            <br />
            <br />
            Our goal: to become the first VPN P2P decentralized network, accessible worldwide,
            without censorship and respecting your privacy, where clients bid for node
            usage, creating a decentralized VPN marketplace.
          </p>
          <button
            class="rounded-[27px] mt-[76px] text-white flex text-xl leading-[26px] items-center justify-between border border-white px-[30px] py-[12px] hover:bg-white hover:text-[#121829] duration-[0.3s] transition-all">
            Become a Node

            <ArrowRight />
          </button>
        </div>
        <div class="w-full lg:w-full xl:w-1/2">
          <div
            class="lg:w-full w-full xl:max-w-[748px] h-[532px] bg-[#1B255C] flex justify-center items-center rounded-[15px]">
            <img src="/demo-img.png" alt="" class="w-full" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
