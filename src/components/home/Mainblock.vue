<script setup lang="ts">
import {onMounted, onUnmounted, ref} from 'vue';

const scrollY = ref(0);

const updateScroll = () => {
  scrollY.value = window.scrollY;
};

onMounted(() => {
  window.addEventListener('scroll', updateScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll);
});
</script>

<template>
  <div
    class="main"
    :style="{ backgroundPositionY: `calc(50% + ${-scrollY * 0.1}px)` }">
    <div class="main__content">
      <div class="main__content_block montserrat-400">
        <div class="title">automation- <p class="different-letter">Zentric</p></div>
        <div class="second__title">IT consulting from the <br> heart of Europe</div>
        <p class="text montserrat-400">Founded in 2023, we have over 30 years of experience in various industries and areas of information technology. Our Services include tailored IT solutions and consulting aimed at increasing efficiency and performance for our customers and seamlessly connecting with the company's business objectives.</p>
        <router-link to="" class="more-content">Learn more</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main {
  @apply w-full h-[750px] overflow-hidden;
  background-image: url("@/assets/images/city.webp");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100%;
  overflow: hidden;
  position: relative;

  &__content {
    content: "";
    @apply w-full   h-full bg-black bg-opacity-30 absolute  top-[100px];
    &_block {
      @apply h-full bg-black bg-opacity-60 pt-16 px-4 pr-20 text-white  absolute right-[10%];
      .title{
        @apply text-[50px] relative  flex;
        &:before{
          content: "";
          width: 70%;
          height: 1px;
          background: white;
          position: absolute;
          bottom: 0;
          margin-bottom: -20px;
        }
        .different-letter:first-letter{
          color: red;
        }
      }
      .second__title{
        @apply text-[40px] leading-[60px] mt-10;
      }
      .text{
        @apply text-base mt-10 relative max-w-[550px];
        &:before{
          content: "";
          width: 15%;
          height: 1px;
          background: white;
          position: absolute;
          bottom: 0;
          margin-bottom: -20px;
        }
      }
      .more-content{
        @apply transition mt-10 text-sm block hover:translate-x-2 ;
      }
    }
  }
}

.content {
  @apply text-white text-center py-40;
}

</style>
