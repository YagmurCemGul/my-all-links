<template>
  <li>
    <nuxt-link :to="url" target="_blank" v-if="label && url">
      <dt
        class="flex items-center space-x-2 p-1 -m-1 rounded-xl hover:bg-slate-100 bg-slate-50"
      >
        <div
          class="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg"
        >
          <img
            v-if="iconSrc"
            :src="iconSrc"
            alt=""
            class="h-6 w-6 object-contain"
          />
          <icon
            v-else-if="icon"
            :name="icon"
            class="h-6 w-6 text-slate-500"
          />
          <icon v-else name="ph:link-simple" class="h-6 w-6 text-slate-500" />
        </div>
        <div class="w-full flex-grow min-w-0">
          <p class="font-medium text-sm leading-6 text-gray-900">
            {{ label }}
          </p>
        </div>
      </dt>
    </nuxt-link>
  </li>
</template>
<script setup>
import { computed } from "vue";

const iconMap = {
  "zondicons:portfolio": "/icons/portfolio.svg",
  "simple-icons:buymeacoffee": "/icons/buymeacoffee.svg",
  "pixel:kaggle": "/icons/kaggle.svg",
  "tabler:file-cv-filled": "/icons/file-cv.svg",
};

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: "ph:link-simple",
  },
});

const iconSrc = computed(() => iconMap[props.icon] ?? null);

</script>
