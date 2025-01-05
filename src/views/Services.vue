<script setup lang="ts">

import ServiceInfo from "@/services/ServiceInfo.vue";
import { serviceList } from "@/constants/ServiceList.ts";
import {isEven} from "@/utils/defineNumberOfType.ts";

</script>

<template>
   <div class="services montserrat-400">

      <section class="services__head">
        <h1 class="services__head-title">Our services</h1>
        <div class="services__head-line"/>
        <h1 class="services__head-text">Individualized consultation, as each use case is unique.</h1>
      </section>

      <div v-for="(service, idx) of serviceList" :key="service.title">
        <ServiceInfo :reverse="isEven(idx)" :service/>
      </div>

  </div>
</template>

<style scoped lang="scss">
.services {
  background: rgba(250,250,250,1);
  &__head {
    @apply p-10 pb-20;
    &-title {
      @apply text-[50px] text-center;
    }

    &-line {
      @apply w-20 h-[1px] mt-8 bg-black mx-auto;
    }

    &-text {
      @apply text-center text-xl mt-6;
    }
  }
}
</style>