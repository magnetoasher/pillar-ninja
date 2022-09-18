<template>
  <div class="flex flex-col items-center mb-6">
    <img
      class="rounded-full"
      src="https://res.cloudinary.com/pillario/image/upload/c_thumb,g_custom,w_300,h_300/user-image/page/1a8afd21-5e4c-41e3-a84e-390a2f4fba69?_reload=3cc784c0-36e6-11ed-82bd-0f1ca39c8f90"
      :alt="title"
      :width="100"
      :height="100"
    />
    <span class="text-base leading-4 font-bold text-white mt-4">
      {{ name }}
      <i class="fa-solid fa-circle-check ml-2 text-[#4624d6]" />
    </span>
    <div class="text-sm leading-6 text-center font-light text-slate-100 mt-1">
      {{ title }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped></style>
