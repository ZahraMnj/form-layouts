<script setup>
const props = defineProps({
  options: Array,
  });

</script>

<template>
    <div class="flex gap-3 items-center" v-for="option in options" :key="option.value" :value="option.value">
        <input :id="option.value" name="Newsletter" type="radio" class="absolute opacity-0 peer/option cursor-pointer" checked="checked">
        <p
            class="w-4 h-4 border items-center justify-center border-gray-300 rounded-full peer-checked/option:shadow-[inset_0_0_0_4.3px_rgba(59,130,246,1)] peer-checked/option:border-primary peer-checked/option:bg-white">
        </p>
        <label :for="option.value" class="text-sm font-medium text-gray-900 leading-none dark:text-gray-50">{{ option.value }}</label>
    </div>
</template>