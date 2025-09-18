<template>
  <div class="min-h-screen bg-slate-100 flex items-center justify-center py-12">
    <templates-simple :acc="data" />
  </div>
</template>

<script setup>
import { cloneDefaultData } from "../utils/defaultData";

const data = cloneDefaultData();
</script>
