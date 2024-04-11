<script setup lang="ts">
const props = defineProps(['prices'])
</script>
<template>
  <div
    data-aos="fade-up"
    className="pt-[39px] pb-[98px] relative bg-[#1B255C] flex justify-center leading-[70px] price_card_shadow rounded-[15px]"
  >
    <ul
      className="font-medium leading-10 lg:leading-[50px] pb-8 text-2xl lg:text-[30px] text-white"
    >
      <li
        v-for="(item, index) in props.prices.roads"
        :key="index"
        className="flex gap-[9px] items-center"
      >
        <img
          className="w-[31px] h-[31px]"
          :src="'/assets/' + item.icon + '.png'"
          :alt="item.icon"
        />
        {{ item.title }}
      </li>
    </ul>
    <button
      className="absolute w-full left-0 rounded-[53px] bottom-[-10px] py-[21px] bg-[#FCBB14] text-[30px] leading-10 hover:bg-white duration-[0.3s] transition-all"
    >
      {{ props.prices.buttonTitle }}
    </button>
  </div>
</template>

<style>
.price_card_shadow {
  box-shadow: 0px 0px 30px 0px #657fcb40;
}
</style>
