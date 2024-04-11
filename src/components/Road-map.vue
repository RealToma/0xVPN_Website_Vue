<script setup lang="ts">
import PriceCard from './Price-card.vue'
const prices1 = {
  buttonTitle: 'Stage 1',
  roads: [
    {
      title: 'Website',
      icon: 'check'
    },
    {
      title: 'Community',
      icon: 'check'
    },
    {
      title: 'Deploy Token',
      icon: 'check'
    },
    {
      title: 'PoC VPN Bot',
      icon: 'check'
    },
    {
      title: '5 VPN nodes',
      icon: 'check'
    },
    {
      title: 'Marketing & KOLs',
      icon: 'check'
    },
    {
      title: 'First Partnerships',
      icon: 'settings'
    }
  ]
}

const prices2 = {
  buttonTitle: 'Stage 2',
  roads: [
    {
      title: 'Dashboard',
      icon: 'check'
    },
    {
      title: 'VPN Desktop Client',
      icon: 'check'
    },
    {
      title: 'Deploy Token',
      icon: 'check'
    },
    {
      title: 'PoC VPN Bot',
      icon: 'check'
    },
    {
      title: '5 VPN nodes',
      icon: 'check'
    },
    {
      title: 'Marketing & KOLs',
      icon: 'check'
    },
    {
      title: 'First Partnerships',
      icon: 'settings'
    }
  ]
}
const prices3 = {
  buttonTitle: 'Stage 3',
  roads: [
    {
      title: 'Live Network',
      icon: 'idea'
    },
    {
      title: 'Node v1.0',
      icon: 'idea'
    },
    {
      title: 'P2P VPN Client',
      icon: 'idea'
    },
    {
      title: 'CEX Listing',
      icon: 'idea'
    },
    {
      title: 'T1 Partnerships',
      icon: 'idea'
    },
    {
      title: 'More TBD',
      icon: 'idea'
    }
  ]
}
</script>
<template>
  <section id="roadmap" className="w-full px-8 lg:px-0 pt-[155px] pb-[45px] bg-[#1D1C3E]">
    <div className="container px-2 lg:px-0">
      <h1 data-aos="fade-up" className="text-center font-bold text-5xl lg:text-[64px] leading-[87px] text-white">
        Roadmap
      </h1>
      <div className="grid gap-y-10 gap-x-0 lg:gap-x-[69px] grid-cols-1 lg:grid-cols-3">
        <div data-aos="fade-up" className="mt-10 lg:mt-[271px]">
          <PriceCard :prices="prices1" />
        </div>
        <div data-aos="fade-up" className="mt-0 lg:mt-[49px]">
          <PriceCard :prices="prices2" />
        </div>
        <div data-aos="fade-up" className="mt-0 lg:mt-[271px]">
          <PriceCard :prices="prices3" />
        </div>
      </div>
    </div>
  </section>
</template>
