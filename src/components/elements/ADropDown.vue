<script setup lang="ts">
import {ref, onMounted, onBeforeUnmount } from 'vue';

interface Prop{ 
  options: any
  label: string
  id: string
  defaultOption?: boolean
  placeHolder?: string
}

const props = defineProps<Prop>()
const defaultVal = props.defaultOption ? props.options[0] : {value: props.placeHolder}
const selectedOption = ref( defaultVal)
const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (option) => {
  selectedOption.value = option;
  isOpen.value = false;
};

const handleClickOutside = (event) => {
  if (!event.target.closest('.relative')) {
    isOpen.value = false;
  }
};



onMounted(() => {
  document.addEventListener('click', handleClickOutside);

});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

 
<template>
  <div>
    <label class="text-sm leading-none text-gray-900 dark:text-gray-50 font-medium" :for="id">{{ label }}</label>
    <div class="relative">
      <button type="button" :id="id" :name="id" @click="toggleDropdown" class="group/trigger flex w-full select-none items-center justify-between gap-2 truncate rounded-md border mt-2 px-3 py-2 shadow-sm outline-none transition sm:text-sm border-gray-300 dark:border-gray-800 text-gray-900 dark:text-gray-50 bg-white dark:bg-gray-950 hover:bg-gray-50 hover:dark:bg-gray-950/50 focus:ring-2 focus:ring-blue-200 focus:dark:ring-blue-700/30 focus:border-primary focus:dark:border-blue-700">
                <span class="truncate">
                    <span style="pointer-events: none;" :class="{'text-gray-500 dark:text-gray-500' : placeHolder == selectedOption.value  }">{{ selectedOption.value }}</span>
                </span>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" id="dropdown-icon"
             class="absolute top-3 right-2 size-4 shrink-0 cursor-pointer text-gray-400 dark:text-gray-600 group-data-[disabled]/trigger:text-gray-300 group-data-[disabled]/trigger:dark:text-gray-600">
          <path
              d="M18.2072 9.0428 12.0001 2.83569 5.79297 9.0428 7.20718 10.457 12.0001 5.66412 16.793 10.457 18.2072 9.0428ZM5.79282 14.9572 11.9999 21.1643 18.207 14.9572 16.7928 13.543 11.9999 18.3359 7.20703 13.543 5.79282 14.9572Z">
          </path>
        </svg>
      </button>
      <ul id="dropdown-options" v-show="isOpen"
          class="absolute top-10 left-0 w-full bg-white border border-solid border-neutral-300 rounded mt-1 z-10">
        <li v-for="option in options" :key="option.value" :value="option.value"
            @click="selectOption(option)" :class="[
                        'px-4 py-2 m-1 rounded-sm text-sm hover:bg-gray-100 cursor-pointer',
                        { 'rounded-sm font-bold relative': option.value === selectedOption.value }
                    ]">
          {{ option.value }}
          <span v-if="option.value === selectedOption.value">
                        <svg class="absolute top-2 right-3 w-5 h-5" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M5 11.917 9.724 16.5 19 7.5" />
                        </svg>
                    </span>
        </li>
      </ul>
    </div>
  </div>
</template>

