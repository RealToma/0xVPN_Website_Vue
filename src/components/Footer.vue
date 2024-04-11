<script setup lang="ts">
import TwitterIcon from './icons/Twitter.vue'
import FacebookIcon from './icons/Facebook.vue'
import InstagramIcon from './icons/Instagram.vue'
</script>
<template>
  <footer class="bg-[#1B255C] py-16">
    <div class="container px-2 lg:px-0">
      <div class="grid px-0 grid-cols-1 gap-y-8 lg:grid-cols-4">
        <div>
          <p class="text-[13px] font-light text-white opacity-60">Product</p>
          <div>
            <ul class="flex flex-col gap-4 font-normal text-[19px] leading-6 text-white mt-[15px]">
              <li>
                <a href="#" class="transition-all hover:text-[#FCBB14]">Features</a>
              </li>
              <li>
                <a href="#" class="transition-all hover:text-[#FCBB14]">Pricing</a>
              </li>
              <li>
                <a href="#" class="transition-all hover:text-[#FCBB14]">Book a demo</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p class="text-[13px] font-light text-white opacity-60">Product</p>
          <div>
            <ul class="flex flex-col gap-4 font-normal text-[19px] leading-6 text-white mt-[15px]">
              <li>
                <a href="#" class="transition-all hover:text-[#FCBB14]">Features</a>
              </li>
              <li>
                <a href="#" class="transition-all hover:text-[#FCBB14]">Pricing</a>
              </li>
              <li>
                <a href="#" class="transition-all hover:text-[#FCBB14]">Book a demo</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p class="text-[13px] font-light text-white opacity-60">Explore</p>
          <div>
            <ul class="flex flex-col gap-4 font-normal text-[19px] leading-6 text-white mt-[15px]">
              <li>
                <a href="#" class="transition-all hover:text-[#FCBB14]">Events</a>
              </li>
              <li>
                <a href="#" class="transition-all hover:text-[#FCBB14]">Blog</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col items-end">
          <p class="text-[13px] font-light text-white opacity-60">social Media</p>
          <ul class="flex gap-x-[44px] mt-[15px]">
            <li>
              <a href="https://facebook.com" target="_blank" class="transition-all hover:text-[#FCBB14] text-white">
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" class="transition-all hover:text-[#FCBB14] text-white">
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" class="transition-all hover:text-[#FCBB14] text-white">
                <InstagramIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr class="mt-[61px]" />
      <div>
        <ul class="flex flex-col gap-4 lg:flex-row mt-8 mb-9 text-white">
          <li>
            <a href="#">© 2023 StealthNET. All right reserved.</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Service</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
