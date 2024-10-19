<script setup>
import { ref } from 'vue';
import HeaderLayout from '../elements/HeaderLayout.vue';
import InputElement from '../elements/InputElement.vue';
import AButton from '../elements/AButton.vue';
import ADropDown from '../elements/ADropDown.vue';
import RadioGroupButtons from '../elements/RadioGroupButtons.vue';

const isDark = ref(false);

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
        price: 'Free',
        options: [
            { value: 'Community support' },
            { value: '50 GB storage' },
            { value: 'Integrated application builder' },]
    },
    {
        value: 'Premium',
        label: 'Premium',
        description: '500,000 requests per day',
        price: '$900/month',
        options: [
            { value: 'Slack Connect support' },
            { value: '100 GB storage' },
            { value: 'Managed workspace' },
            { value: 'Integrated application builder' },
        ]
    },
    {
        value: 'Enterprise',
        label: 'Enterprise',
        description: 'Based on your specific needs',
        price: 'Custom',
        options: [
            { value: 'Priority Support with Slack Connect' },
            { value: 'Unlimited storage' },
            { value: 'Integrated application builder' },
            { value: 'Volume discount' },
        ]
    }
])

</script>

<template>
    <HeaderLayout form-id="form-layout-5" :is-dark="isDark" form-number="5" form-href="#form-layout-5"
        @update:toggle="isDark = $event" />
    <div :class="{ 'dark': isDark }">

        <div class="rounded-lg p-4 sm:p-10 mt-4 border border-slate-200 bg-white transition-all dark:bg-gray-950 ">
            <div class="w-5/6 sm:max-w-2xl mx-auto">
                <h3 class="text-gray-900 font-semibold text-xl mt-6 dark:text-gray-50">Apply for early access</h3>
                <p class="text-gray-500 text-sm mt-1 dark:text-gray-500">Lorem ipsum dolor sit amet, consetetur
                    sadipscing
                    elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                <form class="mt-8">
                    <div class="grid grid-cols-1 sm:grid-cols-6 gap-4">
                        <div class="col-span-full sm:col-span-3">
                            <InputElement label="First name" type="text" input-id="fisrt-name" placeholder="Emma"
                                require />
                        </div>

                        <div class="col-span-full sm:col-span-3">
                            <InputElement label="Last name" type="text" input-id="last-name" placeholder="Crown" />
                        </div>

                        <div class="col-span-full sm:col-start-1 sm:col-end-7 pt-2">
                            <InputElement label="Work email" type="email" input-id="email" placeholder="emma@compony.com"
                                require />
                        </div>

                        <div class="col-span-full sm:col-span-3">
                            <InputElement label="Company" type="text" input-id="company" placeholder="Company, Inc." />
                        </div>

                        <div class="col-span-full sm:col-span-3">
                            <ADropDown id="employees" :options="employeesOptions" label="Company size (employees)"
                                place-holder="Select..." />
                        </div>

                        <div
                            class="mx-auto my-6 flex w-full items-center justify-between gap-3 text-sm text-gray-500 dark:text-gray-500 col-span-6">
                            <div class="h-[1px] w-full bg-gray-200 dark:bg-gray-800"></div>
                        </div>



                        <div class="col-span-6">
                            <div role="radiogroup" class="grid gap-2 outline-none">
                                <p class="text-gray-900 font-semibold text-sm dark:text-gray-50">Select a workspace
                                    package
                                </p>

                                <RadioGroupButtons :options="workspaceOptions" :list="true" />

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
                        <AButton outline>Go back</AButton>
                        <AButton primary>Apply</AButton>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>