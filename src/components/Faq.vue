<script setup lang="ts">
import Accordion from './Accordion.vue'
</script>
<template>
  <section id="VPN" class="bg-[#1D1C3E] pb-[147px] pt-[155px] px-2 lg:px-0">
    <div class="container">
      <h1 data-aos="fade-up" class="text-center font-bold leading-[87px] text-3xl lg:text-[64px] text-white">
        F.A.Q
      </h1>
      <div class="flex flex-col lg:flex-col xl:flex-row gap-[79px] mt-[38px]">
        <div class="lg:w-full xl:w-[60%] flex flex-col">
          <Accordion leading="01" title="What is a VPN?" content="VPN stands for Virtual Private Network. It allows you to connect to a remote computer on a different physical location. VPNs are used to protect privacy, secure your identity and overcome censorship." />
          <Accordion leading="02" title="How can I participate as a node operator?" content="Clients can bid in $VPN tokens to access the best nodes within the network." />
          <Accordion leading="03" title="What are the rewards for node operators?" content="Node operators are rewarded by the network with $VPN tokens for operating and lending a VPN server." />
          <Accordion leading="04" title="What is the purpose of the PoS in the network?" content="The Proof of Stake (PoS) mechanism ensures network security and performance by requiring participants to stake $VPN tokens, which penalizes bad actors and minimizes downtimes." />
          <Accordion leading="05" title="What is the difference between the client v1 and v2?" content="Version 1.0 (and below) uses centralized servers and Version 2.0 will utilize the decentralized P2P Network, allowing clients to connect directly to nodes offered by other users in the network." />
          <Accordion leading="06" title="How is node performance and behavior monitored?" content="The network checks bids, manages negotiations, and tracks usage while ensuring encryption and security." />
          <Accordion leading="07" title="Can a node see my private data or hack my computer?" content="Node operators will need to install OpenVPN, which is the golden standard for Virtual Private Networks (VPN). OpenVPN is the most secure protocol for VPN connections and utilizes state of the art encryption techniques. Encrypted traffic on HTTPS (using SSL certificates) can't be breached." />
        </div>
        <div data-aos="fade-up">
          <div class="flex justify-center items-center lg:w-full xl:w-[400px] h-[400px]">
            <img src="/final-icon-transparent.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
