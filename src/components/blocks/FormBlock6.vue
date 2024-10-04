<script setup>
import { ref } from 'vue';
import MainHeader from '../elements/MainHeader.vue';
import DropdownDefault from '../elements/DropdownDefault.vue';
import InputElement from '../elements/InputElement.vue';
import DropdownBox from '../elements/DropdownBox.vue';
import RadioGroup6 from '../elements/RadioGroup6.vue';
import CancelBottun from '../elements/CancelBottun.vue';

const isDark = ref(false);
const toggleDark = () => {
    isDark.value = !isDark.value;
};

const organizationOptions = ref([
    { value: 'Acme, Inc.' },
    { value: 'Hero Labs' },
    { value: 'Rose Holding' },
]);

const regionOptions = ref([
    { value: 'EU-West (Frankfurt)' },
    { value: 'EU-East (Boston)' },
    { value: 'EU-West (San Francisco)' },
]);

const planOptions = ref([
    {
        value: 'Hobby',
        price: '$40',
        options: [
            { value: '1,000 requests per day' },
            { value: '3 environments' },
            { value: 'Up to 10 user seats' },
            { value: 'Community support' },
        ],
        recomended: false
    },
    {
        value: 'Premium',
        price: '$80',
        options: [
            { value: '100,000 requests per day' },
            { value: '10 environments' },
            { value: 'Up to 50 user seats' },
            { value: 'Premium Slack support' },
        ],
        recomended: true
    },
    {
        value: 'Enterprise',
        price: '$160',
        options: [
            { value: 'Unlimited requests per day' },
            { value: 'Unlimited environments and user seats' },
            { value: 'SAML Single-Sign-On (SSO)' },
            { value: '99.99% SLA' },
            { value: 'Volume discount' },
        ],
        recomended: false
    },
])

</script>

<template>
    <MainHeader :formNumber="6" formId="form-layout-6" formHref="#form-layout-6" :isDark="isDark"
        :toggleDark="toggleDark" />
    <div :class="{ 'dark': isDark }">

        <div class="rounded-lg p-4 sm:p-10 mt-4 border border-slate-200 bg-white transition-all dark:bg-gray-950 ">
            <form class="mx-auto max-w-7xl">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-50">Create new workspace</h3>
                <div class="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
                    <div class="mt-6 col-span-7">
                        <div class="space-y-4 md:space-y-6">
                            <div class="md:flex md:items-center md:space-x-4">
                                <div class="md:w-48">
                                    <DropdownDefault label="Organization" :options="organizationOptions" />
                                </div>
                                <div class="w-full mt-4 md:mt-0">
                                    <InputElement label="Workspace name" type="text" inputId="workspace-name"
                                        placeholder="Type..." />
                                </div>
                            </div>

                            <div>

                                <DropdownBox :options="regionOptions" label="Region" id="region" />
                                <p class="text-xs mt-2 text-gray-500 dark:text-gray-500">For best performance, choose a
                                    region closest to your operations</p>
                            </div>
                        </div>

                        <h4 class="mt-14 text-sm font-medium text-gray-900 dark:text-gray-50">Plan type
                            <span class="text-red-500 dark:text-red-500">*</span>
                        </h4>

                        <div role="radiogroup" dir="ltr" class="grid gap-2 mt-4 outline-none">
                            <div class="space-y-4">
                                <RadioGroup6 :options="planOptions" />
                            </div>
                        </div>

                    </div>

                    <div class="col-span-5">
                        <div class="rounded-md bg-gray-50 p-6 ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800">
                            <h4 class="text-sm font-semibold text-gray-900 dark:text-gray-50">Which plan best fits your
                                needs?</h4>
                            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum, dolor sit amet
                                consectetur
                                adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                                blanditiis ratione.
                            </p>
                            <ul role="list" class="mt-4 text-sm text-gray-700 dark:text-gray-300">
                                <li class="flex items-center gap-2 py-2.5">
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        fill="currentColor" aria-hidden="true"
                                        class="remixicon size-5 text-blue-500 dark:text-blue-500">
                                        <path
                                            d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z">
                                        </path>
                                    </svg>
                                    <span class="text-ellipsis">Used by 50% of S&amp;P 500 companies</span>
                                </li>
                                <li class="flex items-center gap-2 py-2.5">
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        fill="currentColor" aria-hidden="true"
                                        class="remixicon size-5 text-blue-500 dark:text-blue-500">
                                        <path
                                            d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z">
                                        </path>
                                    </svg>
                                    <span class="text-ellipsis">Based on open-source tech</span>
                                </li>
                                <li class="flex items-center gap-2 py-2.5">
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        fill="currentColor" aria-hidden="true"
                                        class="remixicon size-5 text-blue-500 dark:text-blue-500">
                                        <path
                                            d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z">
                                        </path>
                                    </svg>
                                    <span class="text-ellipsis">Largest developer community</span>
                                </li>
                            </ul>

                            <a href="#"
                                class="inline-flex items-center gap-1 mt-4 text-sm text-blue-500 dark:text-blue-500">Learn
                                more about our workspace plans
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    fill="currentColor" aria-hidden="true" class="remixicon size-4">
                                    <path
                                        d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z">
                                    </path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    class="mx-auto my-14 flex w-full items-center justify-between gap-3 text-sm text-gray-500 dark:text-gray-500 ">
                    <div class="h-[1px] w-full bg-gray-200 dark:bg-gray-800">
                    </div>
                </div>

                <div class="flex justify-end items-center space-x-4">
                    <CancelBottun label="Cancel" :cancel="true" :submit="false" />
                    <CancelBottun label="Update" :cancel="false" :submit="true" />
                </div>
            </form>
        </div>
    </div>
</template>