<template>
  <div
    :class="
      'flex items-center min-h-[62px] rounded-xl px-5 py-3 bg-white w-full md:w-[600px] cursor-pointer my-2 hover:border-solid hover:border-[#6ed0f8] hover:border-2 hover:text-[#6ed0f8]' +
      (index === 0 ? ' pulse-loop' : '')
    "
  >
    <a class="flex justify-between items-center w-full" :href="info.link">
      <i :class="info.icon" />
      <div class="grow text-center text-[0.9375rem] font-semibold">
        {{ info.title }}
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ISocial } from '../data';

export default defineComponent({
  props: {
    info: {
      type: Object as PropType<ISocial>,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
});
</script>

<style scoped>
.pulse-loop {
  -webkit-animation-name: pulse-loop-data;
  animation-name: pulse-loop-data;
  -webkit-transform-origin: center;
  transform-origin: center;
  -webkit-animation-duration: 4s;
  animation-duration: 4s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}
</style>
