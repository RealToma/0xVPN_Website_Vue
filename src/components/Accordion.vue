<script setup lang="ts">
import { ref } from 'vue'
const isOpen = ref(false)
const setIsOpen = (value: boolean) => {
  isOpen.value = value
}
const { title, content } = defineProps(['title', 'content'])
</script>

<template>
  <div data-aos="fade-up" class="w-full pl-10 border-[#152329] border-[2px]">
    <div
      class="w-full relative flex items-center py-2 lg:py-[26px] overflow-hidden cursor-pointer select-none"
      @click="setIsOpen(!isOpen)"
    >
      <p class="text-6 leading-[28px] text-white">01</p>
      <p class="text-xs lg:text-2xl ml-10 leading-[28px] text-white pr-20">{{ title }}</p>
      <div
        class="w-[60px] h-[60px] absolute flex justify-center items-center text-4xl right-0 rounded-r-[8px] hover:bg-white duration-[0.3s] transition-all"
        :class="{ 'bg-[#657FCB]': isOpen, 'bg-[#FCBB14]': !isOpen }"
      >
        {{ !isOpen ? '+' : '-' }}
      </div>
    </div>
    <div
      class="pl-[60px] font-light leading-4 lg:leading-9 text-xs lg:text-xl text-white transation-all overflow-hidden duration-300"
      :class="{ 'max-h-40': isOpen, 'max-h-0': !isOpen, 'pt-5': isOpen, 'pb-[32px]': isOpen }"
    >
      {{ content }}
    </div>
  </div>
</template>
