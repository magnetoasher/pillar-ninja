<template>
  <div>
    <div
      class="fixed bg-cover bg-no-repeat bg-[center_top] w-screen h-screen -z-10 no-repeat bg-[url('https://athlane-file-management-prod.s3.amazonaws.com/8bdd754c-2d5a-4fce-8ddf-e65c3c9f2376?_reload=3c19dfa0-36e6-11ed-82bd-0f1ca39c8f90')]"
    ></div>
    <main class="flex flex-col w-full items-center mx-auto mb-20 pt-6 relative">
      <div
        class="fixed left-0 top-0 right-0 my-0 mx-auto py-3 px-4 flex justify-center max-w-[600px] py-3 ml-auto"
      >
        <div class="w-full flex justify-end">
          <button
            class="rounded-full w-10 h-10 bg-white text-[#4b5563] hover:text-black"
          >
            <i class="fa-solid fa-arrow-up-from-bracket text-inherit" />
          </button>
        </div>
      </div>
      <div class="flex flex-col">
        <ninja-avatar
          :image="'/ninja.png'"
          :name="'Ninja'"
          :title="'I love video games 👾'"
        />
        <social-entry
          v-for="(item, index) in socialsData"
          :info="item"
          :index="index"
          :key="index"
        />
      </div>
      <ul class="flex flex-wrap justify-between text-xl mt-4">
        <social-icon
          v-for="(icon, index) in socialIcons"
          :icon="icon"
          :key="index"
        />
      </ul>
    </main>
    <footer class="flex justify-center">
      <div
        class="py-8 text-white opacity-50 hover:opacity-100 flex ease-in-out duration-150"
      >
        <a class="flex" href="https://pillar.io/referral/ninja">
          <span class="text-sm mr-1">Powered by</span>
          <div class="w-[4.5rem]">
            <pillar-icon />
          </div>
        </a>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, ref } from 'vue';
import { socials } from './data';
import { icons } from './icons';

export default defineComponent({
  components: {
    NinjaAvatar: defineAsyncComponent(
      () => import('./components/NinjaAvatar.vue')
    ),
    SocialEntry: defineAsyncComponent(
      () => import('./components/SocialEntry.vue')
    ),
    SocialIcon: defineAsyncComponent(
      () => import('./components/SocialIcon.vue')
    ),
    PillarIcon: defineAsyncComponent(
      () => import('./components/PillarIcon.vue')
    ),
  },
  setup() {
    const socialsData = ref(socials);
    const socialIcons = ref(icons);

    return {
      socialsData,
      socialIcons,
    };
  },
});
</script>

<style scoped></style>
