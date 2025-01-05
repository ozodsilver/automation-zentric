<script setup lang="ts">
import {onMounted, onUnmounted} from 'vue';

const handleScroll = () => {
  const content = document.querySelector('.our-product__content');
  if (content) {
    const scrollPosition = window.scrollY;
    content.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="our-product">
    <div class="our-product__title montserrat-400">
      <h1>Our product</h1>
    </div>

    <div class="our-product__content montserrat-400">
      <div class="block">
        <div class="center">
          <div class="flex border-b border-b-black">
            <h1 class="title ">Up</h1>
            <h1 class="letter">Dog</h1>
          </div>
          <h1 class="text mt-4">
            Central management of In-Place Upgrades for Linux systems
          </h1>
        </div>

        <button class="learn-more"> Learn more</button>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.our-product {
  &__title {
    @apply p-10 bg-white text-[50px] text-center;
  }

  &__content {
    @apply h-[400px] flex items-center justify-center;
    background-image: url("@/assets/images/wave.avif");
    background-size: cover;
    background-position: center center ;
    position: relative;

    &:before {
      content: "";
      @apply w-full absolute h-full ;
      background-color: rgba(0, 0, 0, 0.6);
    }

    .block {
      @apply w-[50%] p-3 flex flex-col  items-center justify-center h-[300px] relative rounded-lg z-[40];
      background: rgba(255, 255, 255, 0.9);

      .center {
        @apply flex w-3/4 flex-col items-center;
        .title, .letter {
          @apply text-[50px];
        }

        .letter:first-letter {
          color: red;
        }

        .text {
          @apply text-center text-lg;
        }
      }

      .learn-more {
        @apply w-3/4 bg-black absolute -bottom-5 p-4 text-white shadow text-2xl underline;
      }
    }
  }

}
</style>