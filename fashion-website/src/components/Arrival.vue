<template>
    <div class="h-[76.5rem] pt-[4.25rem] pl-[6.5rem]">
        <p class="text-[3rem] leading-[3.125rem] font-black tracking-[6%] mb-[6.3rem]">NEW ARRIVALS</p>

        <div class="w-full flex gap-[5.625rem]">
            <ArrivalCard v-for="(data, index) in datas " :key="index" :data="data" />
        </div>
    </div>
</template>

<script setup>
import ArrivalCard from "@/components/ArrivalCard.vue"
import datas from '@/assets/arrival'
</script>