<template>
    <div>
      <div
        id="cr-widget-marquee"
        data-coins="bitcoin,ethereum,tether,ripple,cardano"
        data-theme="light"
        data-show-symbol="true"
        data-show-icon="true"
        data-show-period-change="true"
        data-period-change="24H"
        data-api-url="https://api.cryptorank.io/v0"
      >
       
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from "vue";
  
  onMounted(() => {
    const script = document.createElement("script");
    script.src = "https://cryptorank.io/widget/marquee.js";
    script.async = true;
    document.body.appendChild(script);
  });
  </script>
  