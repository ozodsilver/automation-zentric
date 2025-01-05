<script setup lang="ts">
import Header from "@/components/header/Header.vue";
import Footer from "@/components/Footer.vue";
import Toast from "@/components/ui/Toast.vue";
</script>

<template>
  <div class="main">
    <Header/>
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <div :key="route.path">
          <component :is="Component"/>
        </div>
      </transition>
    </router-view>
    <Footer/>
  </div>

  <div id="app">
    <Toast/>
  </div>
</template>

<style lang="scss" scoped>

</style>
