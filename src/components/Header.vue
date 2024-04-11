<script setup lang="ts">
import TwitterIcon from './icons/Twitter.vue'
import FacebookIcon from './icons/Facebook.vue'
import InstagramIcon from './icons/Instagram.vue'
import { ref } from 'vue'
const open = ref(false)
const setOpen = (value: boolean) => {
  open.value = value
}
</script>
<template>
  <header class="w-full h-[155px] z-30 bg-[#1B255C] fixed top-0 border-b border-[#657fcb]">
    <div class="container pr-6 lg:pr-0 flex justify-between items-center">
      <a href="#" class="z-10">
        <img src="/logo.svg" alt="" />
      </a>
      <ul
        class="hidden lg:static transition-all bg-[#1B255C] lg:flex justify-center items-center gap-[30px] text-white font-normal text-xl"
      >
        <li>
          <a href="#P2P" class="transition-all hover:text-[#FCBB14]">P2P</a>
        </li>
        <li>
          <a href="#token" class="transition-all hover:text-[#FCBB14]">Token</a>
        </li>
        <li>
          <a href="#docs" class="transition-all hover:text-[#FCBB14]">Partner</a>
        </li>
        <li>
          <a href="#roadmap" class="transition-all hover:text-[#FCBB14]">Roadmap</a>
        </li>
        <li>
          <a href="#VPN" class="transition-all hover:text-[#FCBB14]">FAQ</a>
        </li>
        <li>
          <a
            href="https://app.uniswap.org/swap?chain=ethereum&outputCurrency=0xf898bae008cd85046431ab0a75f00689d6aa1b1c&inputCurrency=eth"
            target="_blank"
            class="transition-all hover:text-[#FCBB14]"
            >Docs</a
          >
        </li>

        <li>
          <button
            class="px-[50px] py-[11px] bg-[#FCBB14] rounded-[14px] font-bold text-lg text-[#121829] hover:bg-white duration-[0.3s] transition-all"
          >
            dApp
          </button>
        </li>
      </ul>
      <div
        class="lg:hidden w-[40px] h-[35px] flex flex-col gap-2 cursor-pointer z-20"
        @click="setOpen(!open)"
      >
        <div class="w-full h-[5px] bg-white rounded-md"></div>
        <div class="w-full h-[5px] bg-white rounded-md"></div>
        <div class="w-full h-[5px] bg-white rounded-md"></div>
      </div>
      <div
        class="fixed w-full lg:hidden top-0 h-screen bg-[#1B255C] flex justify-start px-14 transition-all"
        :class="{ 'left-0': open, '-left-full': !open }"
      >
        <ul
          class="container flex flex-col h-full items-start justify-start pt-[155px] gap-[30px] text-white font-normal text-2xl relative"
        >
          <li>
            <a href="#P2P" @click="setOpen(!open)" class="transition-all hover:text-[#FCBB14]"
              >P2P</a
            >
          </li>
          <li>
            <a href="#token" @click="setOpen(!open)" class="transition-all hover:text-[#FCBB14]"
              >Token</a
            >
          </li>
          <li>
            <a href="#docs" @click="setOpen(!open)" class="transition-all hover:text-[#FCBB14]"
              >Partner</a
            >
          </li>
          <li>
            <a href="#roadmap" @click="setOpen(!open)" class="transition-all hover:text-[#FCBB14]"
              >Roadmap</a
            >
          </li>
          <li>
            <a href="#VPN" @click="setOpen(!open)" class="transition-all hover:text-[#FCBB14]"
              >FAQ</a
            >
          </li>
          <li>
            <a
              href="https://app.uniswap.org/swap?chain=ethereum&outputCurrency=0xf898bae008cd85046431ab0a75f00689d6aa1b1c&inputCurrency=eth"
              target="_blank"
              @click="setOpen(!open)"
              class="transition-all hover:text-[#FCBB14]"
              >Docs</a
            >
          </li>
          <li class="w-full absolute bottom-10">
            <div class="flex flex-col items-center justify-end w-full">
              <ul class="flex gap-x-[44px] mt-[15px]">
                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    class="transition-all hover:text-[#FCBB14] text-white"
                  >
                    <FacebookIcon />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    class="transition-all hover:text-[#FCBB14] text-white"
                  >
                    <TwitterIcon />
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    class="transition-all hover:text-[#FCBB14] text-white"
                  >
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
