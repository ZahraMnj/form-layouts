<script setup>

import ReportCard from "@/components/report/ReportCard.vue";
import AButton from "@/components/elements/AButton.vue";
import {Icon} from "@iconify/vue";

const cards = [
  {
    title:'کامپوننت DropdownBox  با DropDownDefault' ,
    description:' حل شد متوجه مشکلش شدم'
  } ,
  {
    title:'کامپوننت CancelButton' ,
    description:'حل شد متوجه مشکل شدم' 
  } ,
  {
    title:' vue router' ,
    description:'بله با روتر کار کردم ولی پروژه نیازی نداشت برای همین استفاده نکردم'
  } ,
  {
    title:' Prop هایی که اضافه کردی' ,
    description:'prop هایی که ایراد داشتن رو درست کردم' ,
  } ,
  {
    title:'primary color' ,
    description:' primary color رو تعریف کردم و جایگزین کردم' } ,
  {title:'' , description:'' } ,
]
</script>

<template>
<div dir="rtl" class="flex flex-col gap-y-4">
  <div class="flex justify-between items-center">
    <h1 class="text-2xl text-blue-600 py-4"> چند نکته  وجود دارد که بهتره بهش توجه کنی:</h1>
    <AButton outline link="/" ><Icon icon="tabler:arrow-left" /> </AButton>
  </div>

<ReportCard
    v-for="(card , index) in cards"
    :key="index"
    :order="index+1"
    :title="card.title"
    :description="card.description"
    :image="card?.image"/>
</div>
</template>

<style scoped>

</style>