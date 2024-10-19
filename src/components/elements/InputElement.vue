<script setup lang="ts">
interface Prop{
    label: string
    require?: boolean
    type: string
    inputId: string
    placeholder: string
    disable?: boolean
}

const props = defineProps<Prop>()

</script>

<template>

    <label :for="inputId"
        class=" text-sm leading-none font-medium text-gray-900 dark:text-gray-50 ">{{ label }}</label>
        <span v-show="require" class="text-red-500 dark:text-red-500">*</span>
    <input :type="type" :disabled="disable"
        class="relative block w-full mt-2 appearance-none rounded-md border px-2.5 py-2 shadow-sm outline-none transition sm:text-sm border-gray-300 dark:border-gray-800 text-gray-900 dark:text-gray-50 placeholder-gray-400 dark:placeholder-gray-500 bg-white dark:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:dark:ring-blue-700/30 focus:border-primary focus:dark:border-blue-700 disabled:border-gray-300 disabled:bg-gray-100 disabled:text-gray-400 disabled:dark:border-gray-700 disabled:dark:bg-gray-800 disabled:dark:text-gray-500 disabled:pointer-events-none"
        :id="inputId" :placeholder="placeholder" :name="inputId">

</template>