<template>
  <li
    class="w-[45px] h-[45px] flex justify-center items-center mx-2 mt-2 rounded-full bg-white"
  >
    <a
      class="cursor-pointer inline-flex justify-center items-center w-full h-full inline-block"
      :href="icon.link"
    >
      <i :class="icon.name + ' text-black'" />
    </a>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IIcon } from '../icons';

export default defineComponent({
  props: {
    icon: {
      type: Object as PropType<IIcon>,
      required: true,
    },
  },
});
</script>

<style scoped></style>
