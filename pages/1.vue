<template>
  <div>
    <templates-simple v-if="decodedData" :acc="decodedData" />
    <div
      v-else
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <base-loading class="h-5 w-5" />
    </div>
  </div>
</template>
<script setup>
import { decodeData } from "../utils/transformer";
import { cloneDefaultData } from "../utils/defaultData";

const route = useRoute();
const acc = route.query.data;
const decodedData = ref(cloneDefaultData());

if (typeof acc === "string" && acc.length) {
  try {
    decodedData.value = decodeData(acc);
  } catch (error) {
    console.warn("Failed to decode data from query, falling back to defaults.", error);
  }
}
</script>
<style scoped></style>
