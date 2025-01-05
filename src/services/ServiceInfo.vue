<script setup lang="ts">
import {computed, onMounted, onUnmounted} from "vue";
import type {Service, Technologies} from "@/types/Service.ts";

const {service, reverse} = defineProps<{
  service: Service;
  reverse: boolean;
}>();

const technologies = computed<Technologies[]>(() => service.technologies)

const handleScroll = () => {
  const sections = document.querySelectorAll(".technologies");
  sections.forEach((section) => {
    if (section instanceof HTMLElement) {
      const scrollPosition = window.scrollY;
      section.style.backgroundPositionY = `${scrollPosition * 0.6}px`;
    }
  });
};



onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="service-card" :class="{'flex-row-reverse': !reverse}">

    <section
      class="technologies"
      :style="{ backgroundImage: `url(${service?.bg})`}">

      <div class="technologies__icon">
        <div class="technologies__icon-block">
          <a href="" class="technologies__icon-block-item" v-for="technology of technologies">
            <img :src="technology?.icon" class="technologies__icon-block-item-pic" :alt="technology?.name">
          </a>
        </div>
      </div>
    </section>

    <section class="info-block">
      <div class="center">
        <h1 class="title">{{ service.title }}</h1>
        <h3 class="text">{{ service.text }}</h3>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.service-card {
  @apply flex w-full  bg-white  h-[500px] ;

  .technologies {
    @apply col-span-6 w-2/4 flex flex-wrap  items-center justify-center relative;
    background-position: center 0;
    background-size: cover;
    background-attachment: scroll;

    &__icon {
      @apply max-w-[60%]   rounded p-2 flex justify-center m-1  shadow-2xl absolute;
      &-block {
        @apply grid grid-cols-12 max-w-[600px]   p-4 justify-center;
        &-item {
          @apply p-4 transition col-span-4 items-center place-items-center m-2 rounded bg-white hover:scale-110;
          &-pic {
            @apply gap-2  col-span-12 object-fill;
          }
        }
      }
    }

    &::before {
      content: '';
      @apply absolute inset-0;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 1;
    }

    > * {
      position: relative;
      z-index: 2;
    }
  }

  .info-block {
    @apply  mx-auto w-2/4   flex items-center justify-center;
    .center {
      @apply w-[80%] mx-auto;
      .title {
        @apply text-[40px] text-center relative ;
        &:before{
          content: "";
          @apply w-[50%] bg-black h-[1px] absolute -bottom-2 left-1/4;
        }
      }



      .text {
        @apply text-center text-lg mt-5 w-3/4 mx-auto;
      }
    }
  }
}
</style>
