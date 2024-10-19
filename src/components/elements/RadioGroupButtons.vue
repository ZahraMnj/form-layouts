<script setup lang="ts">
import { ref } from 'vue';

interface Prop{
  options: any
  list?: boolean
}

const props = defineProps<Prop>()

const selectedOption = ref('Starter');

const selectOption = (value) => {
    selectedOption.value = value;
};
</script>

<template>
    <div class="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <button v-for="option in options" :key="option.value" type="button" role="radio" :id="option.value"
            :data-state="selectedOption === option.value ? 'checked' : 'unchecked'" :value="option.value"
            @click="selectOption(option.value)"
            class="group relative w-full rounded-md border p-4 text-left shadow-sm flex justify-between items-start transition focus:outline-none bg-white dark:bg-gray-950 border-gray-300 dark:border-gray-800 focus:ring-2 focus:ring-blue-200 focus:dark:ring-blue-700/30 focus:border-primary focus:dark:border-blue-700">
            <div class="w-full flex justify-between flex-col">
                <div>
                    <label :for="option.value"
                        class="text-sm leading-none text-gray-900 dark:text-gray-50 font-medium">{{ option.label
                        }}</label>
                    <p  class="text-sm tracking-wider mt-1 text-gray-500 dark:text-gray-500">{{
                        option.description }}
                    </p>
                </div>
                <span class="text-gray-900 text-sm font-medium mt-6 dark:text-gray-50">{{ option.price }}</span>
            </div>
            <div class="relative flex size-4 shrink-0 appearance-none items-center justify-center rounded-full border shadow-sm border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-950"
                :class="{ 'group-data-[state=checked]:border-0 group-data-[state=checked]:border-transparent group-data-[state=checked]:bg-primary': selectedOption === option.value }">
                <span class="flex items-center justify-center invisible"
                    :class="{ 'group-data-[state=checked]:visible': selectedOption === option.value }">
                    <div class="size-1.5 shrink-0 rounded-full bg-white"></div>
                </span>
            </div>
        </button>
    </div>
    <div v-show="list">
        <p class="mt-6 text-sm font-medium text-gray-900 dark:text-gray-50">Includes:</p>
        <ul role="list" 
            class="text-description mt-2 space-y-2 divide-gray-200 text-sm dark:divide-gray-800">
            <li class="flex items-center space-x-2" v-for="opt in options.find(option => option.value === selectedOption).options" :key="opt.value">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                    aria-hidden="true" class="remixicon text-gray-500 size-5 dark:text-gray-500">
                    <path
                        d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z">
                    </path>
                </svg>
                <span class="text-sm text-gray-700 dark:text-gray-50">{{ opt.value }}</span>
            </li>
        </ul>
    </div>
</template>
