<script setup lang="ts">
import { ref } from 'vue'
const open = ref(false)
const setOpen = (value: boolean) => {
  open.value = value
}
</script>
<template>
  <header class="w-full h-[155px] z-30 bg-[#1B255C] fixed top-0">
    <div class="container pr-6 lg:pr-0 flex justify-between items-center">
      <a href="#" class="z-10">
        <img src="../assets/logo.png" alt="" />
      </a>
      <ul
        class="fixed lg:static transition-all top-0 w-full lg:w-auto bg-[#1B255C] h-screen lg:h-auto flex justify-center items-center flex-col lg:flex-row gap-[30px] lg:gap-[57px] text-white font-normal text-xl"
        :class="{ 'left-0': open, '-left-full': !open }"
      >
        <li>
          <a href="#P2P" class="transition-all hover:text-[#FCBB14]">P2P</a>
        </li>
        <li>
          <a href="#token" class="transition-all hover:text-[#FCBB14]">Token</a>
        </li>

        <li>
          <a href="#roadmap" class="transition-all hover:text-[#FCBB14]">Roadmap</a>
        </li>
        <li>
          <a href="#docs" class="transition-all hover:text-[#FCBB14]">Docs</a>
        </li>
        <li>
          <a href="#VPN" class="transition-all hover:text-[#FCBB14]">$VPN</a>
        </li>
        <li>
          <button
            class="px-[50px] py-[11px] bg-[#FCBB14] rounded-[14px] font-bold text-lg text-[#121829]"
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
    </div>
  </header>
</template>
