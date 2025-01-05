<script setup lang="ts">
import {computed, onMounted, ref} from 'vue';
import {gsap} from 'gsap';
import LangDropdown from "@/components/header/LangSwitcher.vue";
import {links} from "@/constants/HeaderSection.ts";
import {useRoute} from "vue-router";

const route = useRoute()
const headerRef = ref<HTMLElement | null>(null);

const position = computed(() => route.name === 'home' ? 'fixed' : "static")

onMounted(() => {
  const header = headerRef.value;

  if (header) {
    let previousScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 150) {
        if (currentScrollY > previousScrollY) {
          gsap.to(header, {opacity: 0, duration: 0.5, ease: 'power3.inOut'});
        } else {
          gsap.to(header, {opacity: 1, duration: 0.5, ease: 'power3.inOut'});
        }
      } else {
        gsap.to(header, {y: 0, duration: 0.5, ease: 'power3.inOut'});
      }

      previousScrollY = currentScrollY;
    });
  }
});
</script>

<template>
  <header ref="headerRef" class="header">
    <div class="container content">
      <router-link to="/">
        <img src="@/assets/images/logo_black_font.avif" alt="Logo"/>
      </router-link>
      <ul class="header__box">
        <li class="header__box_item  montserrat-400" v-for="(item, idx) in links" :key="idx">
          <router-link :to="item.path" class="header__box_item-link">{{ item?.label }}</router-link>
        </li>
      </ul>
      <LangDropdown/>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  @apply py-4 items-center justify-between   top-0 left-0 w-full z-50 bg-white shadow-md;
  transition: transform 0.3s ease-in-out;
  position: v-bind(position);

  .content {
    @apply flex justify-between items-center;
  }
}

.header__box {
  @apply px-4 py-2 flex;

  &_item {
    @apply relative text-slate-700 py-4 capitalize text-lg border border-transparent transition;
    &-link {
      @apply p-4 border border-transparent;
      &:hover {
        @apply text-black border border-slate-300 rounded-lg;
      }
    }

  }
}
</style>
