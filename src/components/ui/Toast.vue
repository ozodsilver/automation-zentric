<script setup lang="ts">
import { useToasts } from "@/utils/toast.ts";
const { toasts } = useToasts();
</script>

<template>
  <Teleport to="body">
    <div class="fixed top-5 right-5 space-y-4 z-50">
      <div
        v-for="(toast, index) in toasts"
        :key="toast.id"
        class="p-4 bg-blue-500 text-white rounded-lg shadow-lg transition-opacity duration-300"
        :class="{ 'opacity-0': toast.closing }"
      >
        {{ toast.message }}
      </div>
    </div>
  </Teleport>
</template>

<style scoped></style>
