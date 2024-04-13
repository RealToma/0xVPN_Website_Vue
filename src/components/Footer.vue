<script setup lang="ts">
import TwitterIcon from './icons/Twitter.vue'
import DextoolsIcon from './icons/Dextools.vue'
import TelegramIcon from './icons/Telegram.vue'
</script>
<template>
  <footer class="bg-[#1B255C] hidden xl:block py-16">
    <div class="container gap-40 flex">
      <div class="w-[40%]">
        <a href="#">
          <img src="/logo.png" class="w-auto" />
        </a>
        <a
          href="#desktop-client"
          class="px-5 ml-12 mt-10 inline-block rounded-lg py-2 bg-[#FCBB14] font-medium"
          >Get VPN</a
        >
      </div>
      <div class="">
        <h2 class="text-2xl font-semibold text-[#657fcb]">Quick Links</h2>
        <ul class="flex flex-col mt-6 font-light text-white gap-2">
          <li>
            <a href="#P2P" class="transition-all hover:text-[#FCBB14]">P2P</a>
          </li>
          <li>
            <a href="#token" class="transition-all hover:text-[#FCBB14]">Token</a>
          </li>
          <li>
            <a href="#docs" class="transition-all hover:text-[#FCBB14]">Ecosystem</a>
          </li>
          <li>
            <a href="#roadmap" class="transition-all hover:text-[#FCBB14]">Roadmap</a>
          </li>
          <li>
            <a href="#VPN" class="transition-all hover:text-[#FCBB14]">FAQ</a>
          </li>
        </ul>
      </div>
      <div class="">
        <h2 class="text-2xl font-semibold text-[#657fcb]">Documentation</h2>
        <ul class="flex flex-col mt-6 font-light text-white gap-2">
          <li>
            <a
              href="https://docs.0xvpn.org"
              target="_blank"
              class="transition-all hover:text-[#FCBB14]"
              >Docs</a
            >
          </li>
        </ul>
      </div>
      <div class="">
        <h2 class="text-2xl font-semibold text-[#657fcb]">Socials</h2>
        <ul class="flex gap-x-[0px] mt-[15px]">
          <a
            href="https://t.me/zerox_vpn_portal"
            target="_blank"
            class="p-2 m-2 ml-0 border-2 border-white rounded-full"
            ><svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              class="transition-all duration-200 text-white group-hover:text-[#07091A]"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"
              ></path></svg></a
          ><a
            href="https://x.com/0xVPN_org"
            target="_blank"
            class="p-2 m-2 border-2 border-white rounded-full"
            ><svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="transition-all duration-200 text-white group-hover:text-[#07091A]"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
              ></path></svg></a
          ><a
            href="https://www.dextools.io/app/en/ether/pair-explorer/0xa4e1e7187e8cff09a3a113b9d3438f06264b1803"
            target="_blank"
            class="p-2 m-2 border-2 border-white rounded-full"
            ><svg
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:svg="http://www.w3.org/2000/svg"
              clip-rule="evenodd"
              fill-rule="evenodd"
              version="1.1"
            >
              <g class="layer">
                <g id="svg_11">
                  <g id="svg_1">
                    <path
                      d="m9.37,0.88c0.09,0 0.17,0 0.26,0c1.15,0.58 2.31,1.15 3.47,1.73c-0.86,0.46 -1.74,0.89 -2.62,1.31c-0.05,0.02 -0.1,0.02 -0.15,0c-0.27,-0.14 -0.55,-0.27 -0.83,-0.39c-0.3,0.14 -0.6,0.29 -0.89,0.44c-0.89,-0.45 -1.79,-0.9 -2.67,-1.36c1.14,-0.59 2.29,-1.16 3.43,-1.73z"
                      fill="#ffffff"
                      id="svg_2"
                      opacity="0.97"
                    ></path>
                  </g>
                  <g id="svg_3">
                    <path
                      d="m4.1,3.49c2.13,1 4.24,2.02 6.34,3.08c-0.9,0.45 -1.8,0.9 -2.71,1.35c-1.17,-0.58 -2.35,-1.16 -3.52,-1.73c-0.02,1.17 -0.05,2.34 -0.07,3.5c-0.87,0.44 -1.74,0.87 -2.62,1.29c-0.05,-2.07 -0.05,-4.13 0,-6.2c0.86,-0.43 1.72,-0.86 2.58,-1.29z"
                      fill="#ffffff"
                      id="svg_4"
                      opacity="0.98"
                    ></path>
                  </g>
                  <g id="svg_5">
                    <path
                      d="m14.87,3.49c0.9,0.41 1.79,0.85 2.67,1.29c0.02,0.91 0.02,1.82 0.02,2.73c-4.43,2.14 -8.86,4.31 -13.28,6.49c-0.05,0.02 -0.05,0.05 0,0.07c0.87,0.41 1.73,0.84 2.58,1.27c-0.9,0.45 -1.79,0.9 -2.69,1.35c-0.9,-0.43 -1.79,-0.87 -2.67,-1.33c-0.03,-0.89 -0.02,-1.79 0.02,-2.67c4.43,-2.18 8.85,-4.35 13.28,-6.53c-0.87,-0.45 -1.74,-0.9 -2.62,-1.33c0.9,-0.45 1.8,-0.9 2.69,-1.35z"
                      fill="#ffffff"
                      id="svg_6"
                      opacity="0.98"
                    ></path>
                  </g>
                  <g id="svg_7">
                    <path
                      d="m17.45,9.21c0.04,0 0.07,0 0.11,0c0.01,2.05 0,4.11 -0.02,6.16c-0.88,0.46 -1.78,0.9 -2.67,1.33c-2.09,-1.02 -4.18,-2.04 -6.27,-3.08c0.9,-0.45 1.8,-0.9 2.71,-1.35c1.19,0.57 2.37,1.15 3.54,1.73c0.01,-1.17 0.02,-2.34 0.06,-3.5c0.86,-0.42 1.7,-0.85 2.54,-1.29z"
                      fill="#ffffff"
                      id="svg_8"
                      opacity="0.98"
                    ></path>
                  </g>
                  <g id="svg_9">
                    <path
                      d="m9.6,19.31c-0.05,0 -0.1,0 -0.15,0c-1.17,-0.58 -2.33,-1.17 -3.5,-1.75c0.88,-0.46 1.77,-0.91 2.67,-1.35c0.3,0.14 0.6,0.29 0.9,0.44c0.3,-0.15 0.59,-0.3 0.89,-0.44c0.91,0.43 1.8,0.88 2.69,1.35c-1.17,0.58 -2.34,1.17 -3.5,1.75z"
                      fill="#ffffff"
                      id="svg_10"
                      opacity="0.97"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </a>
        </ul>
      </div>
    </div>
    <div class="container">
      <hr class="mt-[61px]" />
      <div>
        <ul class="flex flex-col gap-4 lg:flex-row mt-8 mb-9 text-white">
          <li>
            <a href="#">© 2024 0xVPN.org – All right reserved.</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
  <footer class="bg-[#1B255C] py-16 block xl:hidden">
    <div class="container px-2 lg:px-0">
      <div class="grid px-0 grid-cols-1 gap-y-8 text-center">
        <div class="flex flex-col items-start">
          <p class="text-[15px] font-light text-white opacity-60">0xVPN Social Channels</p>
          <ul class="flex gap-x-[0px] mt-[15px]">
            <a
              href="https://t.me/zerox_vpn_portal"
              target="_blank"
              class="p-2 m-2 ml-0 border-2 border-white rounded-full"
              ><svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 448 512"
                class="transition-all duration-200 text-white group-hover:text-[#07091A]"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"
                ></path></svg></a
            ><a
              href="https://x.com/0xVPN_org"
              target="_blank"
              class="p-2 m-2 border-2 border-white rounded-full"
              ><svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                class="transition-all duration-200 text-white group-hover:text-[#07091A]"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                ></path></svg></a
            ><a
              href="https://www.dextools.io/app/en/ether/pair-explorer/0xa4e1e7187e8cff09a3a113b9d3438f06264b1803"
              target="_blank"
              class="p-2 m-2 border-2 border-white rounded-full"
              ><svg
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:svg="http://www.w3.org/2000/svg"
                clip-rule="evenodd"
                fill-rule="evenodd"
                version="1.1"
              >
                <g class="layer">
                  <g id="svg_11">
                    <g id="svg_1">
                      <path
                        d="m9.37,0.88c0.09,0 0.17,0 0.26,0c1.15,0.58 2.31,1.15 3.47,1.73c-0.86,0.46 -1.74,0.89 -2.62,1.31c-0.05,0.02 -0.1,0.02 -0.15,0c-0.27,-0.14 -0.55,-0.27 -0.83,-0.39c-0.3,0.14 -0.6,0.29 -0.89,0.44c-0.89,-0.45 -1.79,-0.9 -2.67,-1.36c1.14,-0.59 2.29,-1.16 3.43,-1.73z"
                        fill="#ffffff"
                        id="svg_2"
                        opacity="0.97"
                      ></path>
                    </g>
                    <g id="svg_3">
                      <path
                        d="m4.1,3.49c2.13,1 4.24,2.02 6.34,3.08c-0.9,0.45 -1.8,0.9 -2.71,1.35c-1.17,-0.58 -2.35,-1.16 -3.52,-1.73c-0.02,1.17 -0.05,2.34 -0.07,3.5c-0.87,0.44 -1.74,0.87 -2.62,1.29c-0.05,-2.07 -0.05,-4.13 0,-6.2c0.86,-0.43 1.72,-0.86 2.58,-1.29z"
                        fill="#ffffff"
                        id="svg_4"
                        opacity="0.98"
                      ></path>
                    </g>
                    <g id="svg_5">
                      <path
                        d="m14.87,3.49c0.9,0.41 1.79,0.85 2.67,1.29c0.02,0.91 0.02,1.82 0.02,2.73c-4.43,2.14 -8.86,4.31 -13.28,6.49c-0.05,0.02 -0.05,0.05 0,0.07c0.87,0.41 1.73,0.84 2.58,1.27c-0.9,0.45 -1.79,0.9 -2.69,1.35c-0.9,-0.43 -1.79,-0.87 -2.67,-1.33c-0.03,-0.89 -0.02,-1.79 0.02,-2.67c4.43,-2.18 8.85,-4.35 13.28,-6.53c-0.87,-0.45 -1.74,-0.9 -2.62,-1.33c0.9,-0.45 1.8,-0.9 2.69,-1.35z"
                        fill="#ffffff"
                        id="svg_6"
                        opacity="0.98"
                      ></path>
                    </g>
                    <g id="svg_7">
                      <path
                        d="m17.45,9.21c0.04,0 0.07,0 0.11,0c0.01,2.05 0,4.11 -0.02,6.16c-0.88,0.46 -1.78,0.9 -2.67,1.33c-2.09,-1.02 -4.18,-2.04 -6.27,-3.08c0.9,-0.45 1.8,-0.9 2.71,-1.35c1.19,0.57 2.37,1.15 3.54,1.73c0.01,-1.17 0.02,-2.34 0.06,-3.5c0.86,-0.42 1.7,-0.85 2.54,-1.29z"
                        fill="#ffffff"
                        id="svg_8"
                        opacity="0.98"
                      ></path>
                    </g>
                    <g id="svg_9">
                      <path
                        d="m9.6,19.31c-0.05,0 -0.1,0 -0.15,0c-1.17,-0.58 -2.33,-1.17 -3.5,-1.75c0.88,-0.46 1.77,-0.91 2.67,-1.35c0.3,0.14 0.6,0.29 0.9,0.44c0.3,-0.15 0.59,-0.3 0.89,-0.44c0.91,0.43 1.8,0.88 2.69,1.35c-1.17,0.58 -2.34,1.17 -3.5,1.75z"
                        fill="#ffffff"
                        id="svg_10"
                        opacity="0.97"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </ul>
        </div>
      </div>
    </div>
    <div class="container">
      <hr class="mt-[61px]" />
      <div>
        <ul class="flex flex-col gap-4 lg:flex-row mt-8 mb-9 text-white">
          <li>
            <a href="#">© 2024 0xVPN.org – All right reserved.</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
