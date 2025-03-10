<template>
    <div class="max-w-3xl mx-auto bg-black text-white p-8 rounded-lg shadow-lg">
      <swiper
        :modules="[SwiperAutoplay, SwiperPagination]"
        :slides-per-view="1"
        :loop="true"
        :autoplay="{ delay: 4000 }"
        :pagination="{ clickable: true }"
        class="rounded-lg"
      >
        <swiper-slide v-for="(testimonial, index) in testimonials" :key="index">
          <div class="flex flex-col items-center text-center p-6">
            <p class="text-lg italic text-gray-300 leading-relaxed">
              "{{ testimonial.quote }}"
            </p>
            <h3 class="mt-4 font-semibold text-xl text-white">
              — {{ testimonial.name }}
            </h3>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </template>
  
  <script setup>
  import { Swiper, SwiperSlide } from "swiper/vue";
  import { Autoplay as SwiperAutoplay, Pagination as SwiperPagination } from "swiper/modules";
  import "swiper/css";
  import "swiper/css/pagination";
  
  const testimonials = [
    {
      name: "McCanon",
      quote: "Thanks to the blueprint Brian gave me I just completed a $1.6 million dollar launch for my digital product...and plan on making double that before year end.",
    },
    {
      name: "Jane Robert",
      quote: "I’m so glad I did this. If you have a dream that you can work from anywhere in the world, I’m telling you I’m proof that this is possible, so beg, borrow, steal!",
    },
    {
      name: "Michael Lee",
      quote: "From start to finish, my experience was nothing short of amazing. The attention to detail and craftsmanship is top-notch. I'm beyond satisfied with my decision.",
    },
  ];
  </script>
  
  <style scoped>
  /* Swiper Pagination Styling */
  :deep(.swiper-pagination-bullet) {
    background-color: white !important;
    opacity: 0.5;
  }
  
  :deep(.swiper-pagination-bullet-active) {
    background-color: #facc15 !important; /* Yellow active indicator */
    opacity: 1;
  }
  </style>
  