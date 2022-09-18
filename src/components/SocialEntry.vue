<template>
  <div class="my-2 border border-white rounded-xl">
    <div
      :class="
        'flex items-center min-h-[62px] rounded-xl px-5 py-3 bg-white w-full md:w-[600px] cursor-pointer hover:text-[#6ed0f8]' +
        (index === 0 ? ' pulse-loop' : '') +
        (isOpen
          ? ' rounded-b-none'
          : ' hover:border-solid hover:border-2 hover:border-[#6ed0f8]')
      "
    >
      <div v-if="info.sublinks" class="flex flex-col w-full">
        <button
          @click="toggleAccordion()"
          class="flex justify-between items-center"
          :aria-expanded="isOpen"
          :aria-controls="`collapse${index}`"
        >
          <i :class="info.icon" />
          <div class="grow text-center text-[0.9375rem] font-semibold">
            {{ info.title }}
          </div>
          <svg
            class="w-3 transition-all duration-200 transform"
            :class="{ 'rotate-180': isOpen, 'rotate-0': !isOpen }"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 10"
            aria-hidden="true"
          >
            <path
              d="M15 1.2l-7 7-7-7"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <a
        v-else
        class="flex justify-between items-center w-full"
        :href="info.link"
      >
        <i :class="info.icon" />
        <div class="grow text-center text-[0.9375rem] font-semibold">
          {{ info.title }}
        </div>
      </a>
    </div>
    <div v-show="isOpen && info.sublinks?.length" class="p-2">
      <div :id="`collapse${index}`">
        <iframe
          class="w-full h-[350px]"
          v-for="item in info.sublinks"
          :key="item"
          :src="item"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ISocial } from '../data';

export default defineComponent({
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    },
  },
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
