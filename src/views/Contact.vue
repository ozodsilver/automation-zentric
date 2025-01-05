<script setup lang="ts">
import {useVuelidate} from '@vuelidate/core'
import {required, email} from '@vuelidate/validators'
import {ref} from "vue";
import {useToasts} from "@/utils/toast.ts";

const {addToast} = useToasts();

const formData = ref({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const rules = {
  name: {required},
  email: {required, email},
};

const v$ = useVuelidate(rules, formData);

const sendFormData = () => {
  v$.value.$touch();
  if (!v$.value.$invalid) {
    addToast("Form submitted successfully!", 3000);
    console.log("Form Data:", formData.value);
  } else {
    addToast("Please fill in all required fields correctly.", 5000);
  }
};
</script>

<template>
  <div class="contact">
    <section class="contact__section-info">
      <div class="contact__section-info-content">
        <h1 class="text-[30px]">Get in touch</h1>
        <span class="block mt-10">Hansaallee 82 <br/>60318 Frankfurt am Main<br/>Germany</span>

        <div class="mt-8 flex gap-4">
          <i class="text-lg fa fa-phone"/>
          <span>+49 (0)69 20732814</span>
        </div>

        <div class="mt-2 flex gap-4">
          <i class="text-lg fa fa-envelope"/>
          <a href="mailto:office@automation-zentric.de">+office@automation-zentric.de</a>
        </div>
      </div>
    </section>

    <section class="contact__form">
      <form @submit.prevent="sendFormData" class="contact__form-block">
        <label for="name">Name *</label>
        <input
          id="name"
          v-model="formData.name"
          type="text"
          placeholder="name"
          class="input-form w-full mt-2"
        />
        <p v-if="v$.name.$error" class="text-red-500 text-sm mt-1">
          Name is required.
        </p>

        <label for="email" class="block mt-4">Email *</label>
        <input
          id="email"
          v-model="formData.email"
          type="text"
          placeholder="Email"
          class="input-form w-full mt-2"
        />

        <p v-if="v$.email.$error" class="text-red-500 text-sm mt-1">
          <span v-if="v$.email.required">Email is required.</span>
          <span v-if="!v$.email.email">Invalid email address.</span>
        </p>

        <label for="phone" class="block mt-4">Phone</label>
        <input
          id="phone"
          v-model="formData.phone"
          type="text"
          placeholder="Phone"
          class="input-form w-full mt-2"
        />

        <label for="message" class="block mt-4">Message</label>
        <textarea
          id="message"
          v-model="formData.message"
          placeholder="Message"
          class="input-form h-[120px] w-full mt-2"
        ></textarea>

        <button type="submit" class="confirm-btn w-full mt-3 text-lg">
          Submit
        </button>
      </form>
    </section>
  </div>
</template>

<style scoped lang="scss">
.contact {
  @apply grid grid-cols-12 mt-10;
  &__section-info {
    background: url("@/assets/images/city.webp");
    @apply flex col-span-4 p-5 items-center justify-center relative bg-cover h-[800px];
    &:before {
      content: "";
      @apply w-full h-full absolute;
      background: rgba(0, 0, 0, 0.6);
    }

    &-content {
      @apply w-[80%] border-white text-lg relative text-white z-[50];
    }
  }

  &__form {
    @apply flex col-span-8 justify-center p-32 pt-20;
    &-block {
      @apply w-full;
    }
  }
}
</style>
