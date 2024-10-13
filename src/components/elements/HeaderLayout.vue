<script setup lang="ts">
import {Icon} from "@iconify/vue";

interface Prop{
  formNumber: number
  formId: string
  formHref: string
  isDark: boolean
}

const props = defineProps<Prop>()

</script>

<template> 
<div>
  <div class="mt-24" >
    <div class="sm:flex sm:items-center sm:justify-between">
      <div class="flex items-center gap-4">
        <h2 :id="formId" class="cursor-pointer font-medium text-slate-900 sm:text-lg">
          <a :href="formHref">Form Layout {{formNumber}}</a>
        </h2>
      </div>
      <div class="mt-4 flex items-center justify-between gap-2 sm:mt-0 sm:justify-start">
        <button type="button" @click="$emit('update:toggle' , !isDark)"
                class="rounded-lg bg-slate-100 p-1.5 text-slate-500 hover:text-slate-400 sm:bg-transparent">
          <Icon class="size-6" icon="tabler:moon" v-if="isDark"/>
          <Icon class="size-6" icon="tabler:sun" v-else/>
        </button>
        <div class="hidden h-6 w-px bg-slate-200 sm:block"></div>
        <a class="w-fit cursor-pointer items-center justify-center rounded-md px-3 py-2 sm:text-sm disabled:pointer-events-none disabled:opacity-60 transition-all duration-100 ease-in-out focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 bg-transparent group inline-flex gap-2 pl-2 pr-1 text-sm font-semibold text-blue-600"
           href="/get-access">
          <Icon icon="tabler:lock" />
          <span>   Get the code</span>

          <svg class="-mr-1 ml-1.5 stroke-[1.5px] mt-px stroke-blue-600" fill="none" stroke="currentColor"
               width="11" height="11" viewBox="0 0 10 10" aria-hidden="true">
            <path class="opacity-0 transition group-hover:opacity-100" d="M0 5h7"></path>
            <path class="transition group-hover:translate-x-[3px]" d="M1 1l4 4-4 4"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>

</div>
</template>
