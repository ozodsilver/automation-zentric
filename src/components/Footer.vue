<script setup lang="ts">

</script>

<template>
  <div class="footer ">
    <img src="@/assets/images/Logo_white_font.avif" alt="">
    <div class="flex gap-32">
      <section class="footer__content">

        <h1 class="footer__content-title montserrat-400">automation-Zentric GmbH
          Hansaallee 82
          60318 Frankfurt am Main</h1>

        <div class="footer__content-text">
          <div class="flex gap-6">
            <i class="fa fa-phone text-white text-base"></i>
            +49 (0)69 20732814
          </div>

          <a href="mailto:office@automation-zentric.de" class="flex gap-6 whitespace-nowrap">
            <i class="fa fa-envelope text-white text-base"></i>
            office@automation-zentric.de
          </a>
        </div>
      </section>

      <section class="information montserrat-400">
        <h1 class="text-[22px]">INFORMATION</h1>

        <div class="content ">
          <a href="#">Contact</a>
          <a href="#">Impressum</a>
          <a href="#">Privacy Policy</a>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  @apply bg-black mt-20  gap-44 px-[10%] py-10;
  &__content {
    @apply w-[200px];
    &-title {
      @apply text-white  mt-8;
    }

    &-text {
      @apply flex flex-col gap-3 mt-5 text-white;
    }
  }

  .information {
    @apply text-white mt-8 ;
    .content {
      @apply mt-5;
      a {
        @apply block underline text-[15px];
      }
    }
  }
}
</style>