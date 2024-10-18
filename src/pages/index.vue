<script setup>
import FormBlock4 from "../components/blocks/FormBlock4.vue";
import FormBlock1 from "../components/blocks/FormBlock1.vue";
import FormBlock2 from "../components/blocks/FormBlock2.vue";
import FormBlock3 from "../components/blocks/FormBlock3.vue";
import FormBlock5 from "../components/blocks/FormBlock5.vue";
import FormBlock6 from "../components/blocks/FormBlock6.vue";
import AButton from "@/components/elements/AButton.vue";

</script>

<template>
<AButton primary link="/report">click Me!</AButton>
  <div class="overflow-hidden px-px pb-px">
    <FormBlock1 />
    <FormBlock2 />
    <FormBlock3 />
    <FormBlock4 />
    <FormBlock5 />
    <FormBlock6 />
  </div>
</template>
