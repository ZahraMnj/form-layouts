<script setup lang="ts">

interface Prop{
order: number
  title : string
  description ?: string
  image ?: string
}
const props = defineProps<Prop>()
</script>

<template>
<div class="card" v-if="title">
  <div class="flex gap-x-2 text-xl text-blue-500  ">
    <div> {{order}}.</div>
    <div> {{title}}
    </div>
  </div>
  <div>{{description}}</div>

  <img v-if="image" src="@/assets/img/warning.png" alt="" />
</div>
</template>

<style >
.card{
  @apply bg-gray-50 rounded-md p-4 flex flex-col  gap-y-2;
}
</style>