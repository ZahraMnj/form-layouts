<script setup>
import { ref } from 'vue';
import MainHeader from '../elements/MainHeader.vue';
import InputElement from '../elements/InputElement.vue';
import CancelBottun from '../elements/CancelBottun.vue';
import DropdownDefault from '../elements/DropdownDefault.vue';
import RadioGroupButtons from '../elements/RadioGroupButtons.vue';


const employeesOptions = ref([
    { value: '1-9' },
    { value: '10-50' },
    { value: '50-250' },
    { value: '250+' },
]);

const workspaceOptions = ref([
    {
        value: 'Starter',
        label: 'Starter',
        description: 'Up to 10,000 requests per day.',
        price: 'Free'
    },
    {
        value: 'Premium',
        label: 'Premium',
        description: '500,000 requests per day',
        price: '$900/month'
    },
    {
        value: 'Enterprise',
        label: 'Enterprise',
        description: 'Based on your specific needs',
        price: 'Custom'
    }
])

</script>

<template>
    <MainHeader :formNumber="4" formId="form-layout-4" formHref="#form-layout-4" />

    <div class="rounded-lg p-4 sm:p-10 mt-4 border border-slate-200 bg-white transition-all dark:bg-gray-950 ">
        <div class="w-5/6 sm:max-w-2xl mx-auto">
            <h3 class="text-gray-900 font-semibold text-xl mt-6 dark:text-gray-50">Apply for early access</h3>
            <p class="text-gray-500 text-sm mt-1 dark:text-gray-500">Lorem ipsum dolor sit amet, consetetur sadipscing
                elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
            <form class="mt-8">
                <div class="grid grid-cols-1 sm:grid-cols-6 gap-4">
                    <div class="col-span-full sm:col-span-3">
                        <InputElement label="First name" type="text" inputId="fisrt-name" placeholder="Emma" require />
                    </div>

                    <div class="col-span-full sm:col-span-3">
                        <InputElement label="Last name" type="text" inputId="last-name" placeholder="Crown" />
                    </div>

                    <div class="col-span-full sm:col-start-1 sm:col-end-7 pt-2">
                        <InputElement label="Work email" type="text" input-id="email" placeholder="emma@compony.com"
                            require />
                    </div>

                    <div class="col-span-full sm:col-span-3">
                        <InputElement label="Company" type="text" input-id="company" placeholder="Company, Inc." />
                    </div>

                    <div class="col-span-full sm:col-span-3">
                        <DropdownDefault :options="employeesOptions" label="Company size (employees)" id="employees" />
                    </div>

                    <div
                        class="mx-auto my-6 flex w-full items-center justify-between gap-3 text-sm text-gray-500 dark:text-gray-500 col-span-6">
                        <div class="h-[1px] w-full bg-gray-200 dark:bg-gray-800"></div>
                    </div>



                    <div class="col-span-6">
                        <div role="radiogroup" class="grid gap-2 outline-none">
                            <p class="text-gray-900 font-semibold text-sm dark:text-gray-50">Select a workspace package
                            </p>

                            <RadioGroupButtons :options="workspaceOptions" />

                            <p class="mt-6 text-xs text-gray-500 dark:text-gray-500"><sup>1</sup> $0.5/10K requests
                                after limit reach.</p>
                            <p class="mt-1 text-xs text-gray-500 dark:text-gray-500"><sup>2</sup> No credit card
                                required for registration.</p>
                        </div>
                    </div>
                </div>

                <div
                    class="mx-auto my-14 flex w-full items-center justify-between gap-3 text-sm text-gray-500 dark:text-gray-500 ">
                    <div class="h-[1px] w-full bg-gray-200 dark:bg-gray-800">
                    </div>
                </div>

                <div class="flex justify-end items-center space-x-4">
                    <CancelBottun label="Go back" :cancel="true" :submit="false" />
                    <CancelBottun label="Apply" :cancel="false" :submit="true" />
                </div>
            </form>
        </div>
    </div>
</template>