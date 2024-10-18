<script setup>

import ReportCard from "@/components/report/ReportCard.vue";
import AButton from "@/components/elements/AButton.vue";
import {Icon} from "@iconify/vue";

const cards = [
  {
    title:'کامپوننت DropdownBox  با DropDownDefault' ,
    description:' این دوتا کامپوننت تنها در placeholder داشتن تفاوت دارند و بقیه کدها تکرار شده است ، با یک تغییر می توانیم از این تکرار کدها جلوگیری کنیم. یک کامپوننت به نام ADropDown  اضافه کردم به جای استفاده از این دوتا کامپوننت.'
  } ,
  {
    title:'کامپوننت CancelButton' ,
    description:'این کامپوننت برای کل دکمه ها در نظر گرفته شده، به همبن خاطر اسم مناسبی برای آن در نظر گرفته نشده،ولی  کلا یه کامپوننت دیگه برای دکمه ها به نام AButton  اضافه کردم، معمولا این مدلی برای دکمه ها کامپوننت می نویسیم' } ,
  {
    title:' vue router' ,
    description:'نمیدونم به روتر آشنایی داری یانه، به پروژه اضافه کردم، یه نگاه به داکیومنت بنداز.'
  } ,
  {
    title:' Prop هایی که اضافه کردی' ,
    description:'به پروژه  warning  اضافه کرده، که تایپ های درستی انتخاب نشده و یا اینکه در پاس دادن  prop  ها مشکل وجود  داره، حتما اصلاحش کن ' ,
    image:'../assets/img/warning.png'

  } ,
  {
    title:'primary color' ,
    description:'  اصولا داخل پروژه ها یک رنگ اصلی وجود داره که طیف رنگی داره ، ببین میتونی آن را کانفیگ کنی. الان رنگ اصلی پروژه آبی است، اگه رنگ اصلی تغییر کنه مجبور میشی، همه ی کدها را عوض کنی، به خاطر همین primary color را تعریف می کنن.' } ,
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