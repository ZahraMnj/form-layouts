<script setup>
import { ref } from 'vue';
import HeaderLayout from '../elements/HeaderLayout.vue';
import InputElement from '../elements/InputElement.vue';
import RadioBottuns from '../elements/RadioBottuns.vue';
import AButton from '../elements/AButton.vue';
import ADropDown from "../elements/ADropDown.vue";

const isDark = ref(false);

const visibilityOptions = ref([
    { value: 'Public' },
    { value: 'Private' },
]);

const newsletterOptions = ref([
    { value: 'Every week', },
    { value: 'Every month', },
    { value: 'Never', checked: true },
])

</script>

<template>
    <HeaderLayout form-id="form-layout-2" :is-dark="isDark" form-number="2" form-href="#form-layout-2"
        @update:toggle="isDark = $event" />
    <div :class="{ 'dark': isDark }">

        <div class="rounded-lg p-4 sm:p-10 mt-4 border border-slate-200 bg-white transition-all dark:bg-gray-950 ">
            <form action="">
                <div class="grid grid-cols-1 gap-10 md:grid-cols-3 ">
                    <div>
                        <h2 class="text-lg text-slate-900 font-semibold dark:text-slate-50">Personal information</h2>
                        <p class="text-sm leading-6 mt-1 text-slate-500">Lorem ipsum dolor sit amet, consetetur
                            sadipscing elitr.</p>
                    </div>

                    <div class="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="">
                            <InputElement label="First name" type="text" input-id="fisrt-name" placeholder="Emma" />
                        </div>

                        <div class="">
                            <InputElement label="Last name" type="text" input-id="last-name" placeholder="Crown" />
                        </div>

                        <div class="sm:col-span-2">
                            <InputElement label="Email" type="email" input-id="email" placeholder="emma@compony.com" />
                        </div>

                        <div class="">
                            <InputElement label="Birth year" type="number" input-id="birth-year" placeholder="1990" />
                        </div>

                        <div class="">
                            <InputElement label="role" type="text" input-id="role" placeholder="Senior Manager"
                                disable />
                            <p class="text-gray-500 text-xs leading-4 mt-2 dark:text-gray-500">Roles can only be changed
                                by
                                system admin.
                            </p>
                        </div>
                    </div>
                </div>
            </form>

            <div
                class="mx-auto my-14 flex w-full items-center justify-between gap-3 text-sm text-gray-500 dark:text-gray-500 ">
                <div class="h-[1px] w-full bg-gray-200 dark:bg-gray-800">
                </div>
            </div>

            <form action="">
                <div class="grid grid-cols-1 gap-10 md:grid-cols-3 ">
                    <div>
                        <h2 class="text-lg text-slate-900 font-semibold dark:text-slate-50">Workspace settings</h2>
                        <p class="text-sm leading-6 mt-1 text-slate-500">Lorem ipsum dolor sit amet, consetetur
                            sadipscing elitr.</p>
                    </div>

                    <div class="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="">
                            <InputElement label="Workspace Name" type="text" input-id="workspace-name"
                                placeholder="Test workspace" />
                        </div>


                        <div>
                            <ADropDown id="exam-dropDown" :options="visibilityOptions" label="Visibility"
                                default-option />
                        </div>


                        <div class="sm:col-span-3 row-span-2">
                            <label class="text-sm leading-none text-gray-900 dark:text-gray-50 font-medium"
                                for="workspace-description">Workspace description</label>
                            <textarea
                                class="flex min-h-[4rem] w-full rounded-md border px-3 py-1.5 mt-2 shadow-sm outline-none transition-all sm:text-sm text-gray-900 dark:text-gray-50 border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-950 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-200 focus:dark:ring-blue-700/30 focus:border-primary focus:dark:border-blue-700 fv8bj"
                                id="workspace-description" name="workspace-description" placeholder="Type..." rows="4">
                        </textarea>
                            <p class="text-gray-500 text-xs leading-4 mt-2 dark:text-gray-500">Note: description
                                provided
                                will not be displayed externally.</p>
                        </div>
                    </div>
                </div>
            </form>

            <div
                class="mx-auto my-14 flex w-full items-center justify-between gap-3 text-sm text-gray-500 dark:text-gray-500 ">
                <div class="h-[1px] w-full bg-gray-200 dark:bg-gray-800">
                </div>
            </div>

            <form action="">
                <div class="grid grid-cols-1 gap-10 md:grid-cols-3 ">
                    <div>
                        <h2 class="text-lg text-slate-900 font-semibold dark:text-slate-50">Notification settings</h2>
                        <p class="text-sm leading-6 mt-1 text-slate-500">Lorem ipsum dolor sit amet, consetetur
                            sadipscing elitr.</p>
                    </div>

                    <div class="col-span-2 max-w-3xl grid gap-2">
                        <fieldset>
                            <legend class="font-medium text-sm leading-5 text-gray-900 dark:text-gray-50">Newsletter
                            </legend>
                            <p class="text-gray-500 text-sm leading-6 mt-1 dark:text-gray-500">Change how often you want
                                to
                                receive updates from our newsletter.</p>

                            <div class="mt-6 space-y-4">
                                <RadioBottuns :options="newsletterOptions" />
                            </div>
                        </fieldset>
                    </div>
                </div>
            </form>

            <div
                class="mx-auto my-14 flex w-full items-center justify-between gap-3 text-sm text-gray-500 dark:text-gray-500 ">
                <div class="h-[1px] w-full bg-gray-200 dark:bg-gray-800">
                </div>
            </div>

            <div class="flex justify-end items-center space-x-4">
                <AButton outline>Go Back</AButton>
                <AButton primary>Save settings</AButton>
            </div>
        </div>
    </div>
</template>