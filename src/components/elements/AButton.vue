<script setup lang="ts">
import {computed} from "vue";
import {useRouter} from "vue-router";

interface Prop{
  primary?: boolean
  outline?: boolean
  link?: string
}
const props = defineProps<Prop>()

const getClasses= computed(()=>{
  return {
    'btn-primary' :props.primary ,
    'btn-outline' :props.outline ,
  }
})

const router = useRouter()
</script>

<template>
    <button class="btn" :class="getClasses" @click="router.push({ path : link })">
      <slot />
    </button>

</template>

<style >
.btn{
  @apply relative inline-flex items-center justify-center whitespace-nowrap rounded-md border px-3 py-2 text-center text-sm font-medium shadow-sm transition-all duration-100 ease-in-out disabled:pointer-events-none disabled:shadow-none outline outline-offset-2 outline-0 focus-visible:outline-2 outline-blue-500 dark:outline-blue-500 border-gray-300 h-fit;
}
.btn.btn-primary{
  @apply border-transparent text-white dark:text-gray-50 bg-blue-500 dark:bg-blue-500 hover:bg-blue-600 dark:hover:bg-blue-600 disabled:bg-blue-300 disabled:text-white disabled:dark:bg-blue-800 disabled:dark:text-blue-400;
}

.btn.btn-outline{
  @apply dark:border-gray-800 text-gray-900 dark:text-gray-50 bg-white dark:bg-gray-950 hover:bg-gray-50 dark:hover:bg-gray-900/60 disabled:text-gray-400 disabled:dark:text-gray-600;
}
</style>