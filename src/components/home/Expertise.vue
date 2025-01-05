<script setup lang="ts">
import {ref} from "vue";
import type {CardInfo} from "@/types/CardTypes.ts";
import {cardInfos} from "@/constants/CardInfos.ts";

</script>

<template>
  <div class="expertise">
    <h1 class="title montserrat-400">Our expertise</h1>
    <div class="cards">
      <div class="card md:col-span-3 items-center justify-center " v-for="info of cardInfos" :key="info.title">
        <img :src="info?.img" alt="" class="w-[300px] rounded  object-fill">
        <div class="description montserrat-400">
          <router-link :to="info?.path">{{ info.title }}</router-link>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
.expertise {
  @apply w-full  border border-slate-300;
  .title {
    @apply p-10 bg-white text-[50px] text-center;
  }

  .cards {
    @apply grid   grid-cols-12 gap-8 bg-slate-300 py-20 justify-around px-10;
    .card {
      @apply relative  justify-center  ;
      .description {
        @apply p-4 text-xl underline py-7 2xl:w-3/4 lg:w-[90%] absolute shadow-2xl rounded -bottom-8  lg:-right-6 2xl:right-6 bg-white flex items-center;
      }
    }
  }
}
</style>