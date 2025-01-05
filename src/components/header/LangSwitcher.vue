<script setup lang="ts">
import {ref, shallowRef} from 'vue';
import {langContents} from "@/constants/HeaderSection.ts";
const openSwitcher = shallowRef<boolean>(false);



const selectedItem = shallowRef<{
  title: string;
  img: string;
}>(langContents.value[0]);

const toggleSwitcher = () => {
  openSwitcher.value = !openSwitcher.value;
};

const selectValue = (item: { title: string; img: string }) => {
  selectedItem.value = item;
  openSwitcher.value = false;
};
</script>

<template>
  <div class="relative montserrat-400">
    <button class="btn-outlined flex items-center  gap-2" @click="toggleSwitcher">
      <img :src="selectedItem?.img" alt="flag" class="flag"/>
      <span class="text-sm">{{ selectedItem?.title.toUpperCase() }}</span>
      <i class="fas text-sm text-slate-900  fa-angle-down transition-all" :class="{'rotate-180' : openSwitcher}"></i>
    </button>

    <div class="lang" v-if="openSwitcher">
      <div
        v-for="(item, idx) in langContents"
        :key="idx"
        class="lang__item"
        @click="selectValue(item)"
      >
        <img :src="item.img" alt="flag" class="flag"/>
        {{ item.title.toUpperCase() }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.lang {
  @apply w-[150px] p-4 rounded-xl border absolute top-[50px] right-2 bg-slate-100 h-fit z-10 shadow-lg;

  &__item {
    @apply flex items-center cursor-pointer gap-4 p-2;
    &:hover {
      @apply text-cyan-500 bg-gray-100 rounded-md;
    }
  }
}

.flag {
  @apply w-[20px] h-[20px] object-cover rounded-full;
}

.icon-chevron-down {
  @apply w-4 h-4;
}

</style>
