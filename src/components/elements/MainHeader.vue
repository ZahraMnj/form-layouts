<script setup>
import { useDark, useToggle} from '@vueuse/core'

const isDark = useDark()

const toggleDark = useToggle(isDark)

defineProps({
  formNumber: Number,
  formId: String,
  formHref: String,
})
</script>

<template>
    <div class="mt-24 first:mt-0">
        <div class="sm:flex sm:items-center sm:justify-between">
            <div class="flex items-center gap-4">
                <h2 id="formId" class="cursor-pointer font-medium text-slate-900 sm:text-lg">
                    <a href="formHref">Form Layout {{formNumber}}</a>
                </h2>
            </div>
            <div class="mt-4 flex items-center justify-between gap-2 sm:mt-0 sm:justify-start">
                <button type="button" @click="toggleDark()"
                    class="rounded-lg bg-slate-100 p-1.5 text-slate-500 hover:text-slate-400 sm:bg-transparent">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" v-show="!isDark"
                        fill="currentColor" class="remixicon size-5">
                        <path
                            d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z">
                        </path>
                    </svg>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" v-show="isDark"
                        fill="currentColor" class="remixicon size-5 ">
                        <path
                            d="M10 7C10 10.866 13.134 14 17 14C18.9584 14 20.729 13.1957 21.9995 11.8995C22 11.933 22 11.9665 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.0335 2 12.067 2 12.1005 2.00049C10.8043 3.27098 10 5.04157 10 7ZM4 12C4 16.4183 7.58172 20 12 20C15.0583 20 17.7158 18.2839 19.062 15.7621C18.3945 15.9187 17.7035 16 17 16C12.0294 16 8 11.9706 8 7C8 6.29648 8.08133 5.60547 8.2379 4.938C5.71611 6.28423 4 8.9417 4 12Z">
                        </path>
                    </svg>
                </button>
                <div class="hidden h-6 w-px bg-slate-200 sm:block"></div>
                <a class="w-fit cursor-pointer items-center justify-center rounded-md px-3 py-2 sm:text-sm disabled:pointer-events-none disabled:opacity-60 transition-all duration-100 ease-in-out focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 bg-transparent group inline-flex gap-2 pl-2 pr-1 text-sm font-semibold text-blue-600"
                    href="/get-access">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        fill="currentColor" aria-hidden="true" class="remixicon hidden size-5 shrink-0 sm:block">
                        <path
                            d="M6 8V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6ZM19 10H5V20H19V10ZM11 15.7324C10.4022 15.3866 10 14.7403 10 14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14C14 14.7403 13.5978 15.3866 13 15.7324V18H11V15.7324ZM8 8H16V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8Z">
                        </path>
                    </svg>Get the code
                    <svg class="-mr-1 ml-1.5 stroke-[1.5px] mt-px stroke-blue-600" fill="none" stroke="currentColor"
                        width="11" height="11" viewBox="0 0 10 10" aria-hidden="true">
                        <path class="opacity-0 transition group-hover:opacity-100" d="M0 5h7"></path>
                        <path class="transition group-hover:translate-x-[3px]" d="M1 1l4 4-4 4"></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</template>