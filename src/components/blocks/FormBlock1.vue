<script setup>
import { ref } from 'vue';
import InputElement from '../elements/InputElement.vue';
import CancelBottun from '../elements/CancelBottun.vue';
import HeaderLayout from "../elements/HeaderLayout.vue";

const isDark = ref(false);

</script>

<template>
  <HeaderLayout form-id="form-layout-1" :is-dark="isDark" form-number="1" form-href="#form-layout-1" @update:toggle="isDark = $event"/>
    <div :class="{ 'dark': isDark }">

        <div class="rounded-lg p-4 sm:p-10 mt-4 border border-slate-200 bg-white transition-all dark:bg-gray-950 ">

            <div class="w-5/6 mx-auto sm:max-w-2xl">
                <h1 class="text-lg font-semibold text-gray-900 dark:text-gray-50">Register to workspace</h1>
                <p class="text-sm mt-1 text-gray-500 dark:text-gray-500">Take a few moments to register for your
                    company's
                    workspace</p>

                <form action="#" class="mt-8">

                    <div class="grid grid-cols-1 sm:grid-cols-6 gap-x-4 gap-y-6">

                        <div class="col-span-full sm:col-span-3">
                            <InputElement label="First name" type="text" input-id="fisrt-name" placeholder="First name"  require />
                        </div>

                        <div class="col-span-full sm:col-span-3">
                            <InputElement label="Last name" type="text" input-id="last-name" placeholder="Last name"
                                require />
                        </div>

                        <div class="col-span-full sm:col-start-1 sm:col-end-7 pt-2">
                            <InputElement label="Email" type="text" input-id="email" placeholder="Email" require />
                        </div>

                        <div class="col-span-full sm:col-start-1 sm:col-end-7 pt-2">
                            <InputElement label="Address" type="text" input-id="address" placeholder="Address" />
                        </div>

                        <div class="col-span-full sm:col-span-2 pt-2">
                            <InputElement label="City" type="text" input-id="city" placeholder="city" />
                        </div>

                        <div class="col-span-full sm:col-span-2 pt-2">
                            <InputElement label="State" type="text" input-id="state" placeholder="State" />
                        </div>

                        <div class="col-span-full sm:col-span-2 pt-2">
                            <InputElement label="Postal code" type="text" input-id="postal-code"
                                placeholder="Postal code" />
                        </div>
                    </div>

                    <div
                        class="mx-auto my-14 flex w-full items-center justify-between gap-3 text-sm text-gray-500 dark:text-gray-500 ">
                        <div class="h-[1px] w-full bg-gray-200 dark:bg-gray-800">
                        </div>
                    </div>

                    <div class="flex items-center justify-end space-x-4">
                        <CancelBottun label="Cancel" :cancel="true" :submit="false" />
                        <CancelBottun label="Submit" :cancel="false" :submit="true" />
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>