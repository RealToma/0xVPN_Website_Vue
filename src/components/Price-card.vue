<script setup lang="ts">
const props = defineProps(['prices'])
</script>
<template>
  <div data-aos="fade-up"
    className="pt-[39px] pb-[98px] relative bg-[#1B255C] flex justify-center leading-[70px] price_card_shadow rounded-[15px] cursor-pointer ">
    <ul className="font-medium leading-10 lg:leading-[50px] pb-8 text-2xl lg:text-[30px] text-white">
      <li v-for="(item, index) in props.prices.roads" :key="index"
        className="flex gap-[9px] items-center hover:-translate-x-3 transation-all duration-300 ease-in-out cursor-pointer hover:text-[#FCBB14]">
        <img className="w-[31px] h-[31px]" :src="'/' + item.icon + '.png'" :alt="item.icon" />
        {{ item.title }}
      </li>
    </ul>
    <button
      className="absolute w-full left-0 rounded-[23px] bottom-[-10px] py-[21px] bg-[#FCBB14] text-[30px] leading-10  duration-[0.3s] transition-all">
      {{ props.prices.buttonTitle }}
    </button>
  </div>
</template>

<style>
.price_card_shadow {
  box-shadow: 0px 0px 30px 0px #657fcb40;
  transition: all 0.3s ease-in-out;
}

.price_card_shadow:hover {
  box-shadow: 0px 0px 20px 5px #b6c3eb80;
  transition: all 0.3s ease-in-out;
}
</style>
