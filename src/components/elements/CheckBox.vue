<script setup lang="ts">
interface Prop{
    options: any
}

const props = defineProps<Prop>()
</script>

<template>
    <li class="py-3 gap-3 flex items-center" v-for="option in options" :key="option.value" :value="option.value">
        <input type="checkbox" :checked="option.checked" class="absolute opacity-0 cursor-pointer peer">
        <p
            class="size-4  items-center justify-center ring-1 ring-inset ring-gray-300 dark:ring-gray-800 rounded shadow-sm bg-white dark:bg-gray-950 peer-checked:bg-blue-500 peer-checked:ring-blue-500">
            <svg class="m-auto mt-[2px] flex justify-center items-center cursor-pointer w-3 h-3 text-white dark:text-black"
                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"
                    d="M5 11.917 9.724 16.5 19 7.5" />
            </svg>
        </p>
        <label for="team-request" class="text-sm font-medium text-gray-900 leading-none dark:text-gray-50">{{ option.value }}</label>
    </li>
</template>