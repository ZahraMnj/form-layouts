<script setup>
import { ref } from 'vue';

const props = defineProps({
    options: Array,
});
const selectedOption = ref('Hobby');

const selectOption = (value) => {
    selectedOption.value = value;
};
</script>

<template>
    <button v-for="option in options" :key="option.value" type="button" role="radio"
        :data-state="selectedOption === option.value ? 'checked' : 'unchecked'" :value="option.value"
        @click="selectOption(option.value)"
        class="group relative w-full rounded-md border text-left shadow-sm transition focus:outline-none bg-white dark:bg-gray-950 border-gray-300 dark:border-gray-800 focus:ring-2 focus:ring-blue-200 focus:dark:ring-blue-700/30 focus:border-blue-500 focus:dark:border-blue-700">
        <div class="flex items-start space-x-4 p-6">
            <div
                class="relative flex size-4 shrink-0 appearance-none items-center justify-center rounded-full border shadow-sm border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-950 group-data-[state=checked]:border-0 group-data-[state=checked]:border-transparent group-data-[state=checked]:bg-blue-500 outline outline-offset-2 outline-0 focus-visible:outline-2 outline-blue-500 dark:outline-blue-500 mt-1">
                <span :data-state="selectedOption === option.value ? 'checked' : 'unchecked'"
                    class="flex items-center justify-center invisible group-data-[state=checked]:visible">
                    <div class="size size-1.5 shrink-0 rounded-full bg-white">
                    </div>
                </span>
            </div>
            <div class="w-full">
                <p class="leading-0">
                    <label :for="option.value"
                        class="text-sm font-semibold leading-none text-gray-900 dark:text-gray-50 ">{{ option.value
                        }}</label>
                </p>
                <ul role="list"
                    class="text-sm divide-y divide-gray-200 mt-3 text-gray-600 dark:divide-gray-800 dark:text-gray-400">
                    <li class="flex py-2 gap-2 items-center" v-for="opt in option.options" :key="opt.value">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            fill="currentColor" aria-hidden="true"
                            class="remixicon size-4 text-gray-400 dark:text-gray-600">
                            <path
                                d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z">
                            </path>
                        </svg> {{ opt.value }}
                    </li>
                </ul>
            </div>
        </div>
        <div
            class="flex justify-between items-center rounded-b-lg border-t border-gray-200 bg-gray-50 px-6 py-3 dark:border-gray-900 dark:bg-gray-900">
            <a href="#"
                class="inline-flex items-center gap-1 text-sm hover:underline hover:underline-offset-4 text-blue-500 dark:text-blue-500">Learn
                more
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                    aria-hidden="true" class="remixicon size-4">
                    <path
                        d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z">
                    </path>
                </svg>
            </a>
            <div>
                <span class="font-semibold text-lg text-gray-900 dark:text-gray-50">{{ option.price }}</span>
                <span class="text-sm text-gray-500 dark:text-gray-500">/mo</span>
            </div>
        </div>
    </button>
</template>
