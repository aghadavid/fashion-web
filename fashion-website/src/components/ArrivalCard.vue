<template>
    <div class="w-[32rem] transition ease-in-out delay-150  hover:scale-95 duration-300 hover:shadow-lg p-4 rounded-[2.4rem] cursor-pointer   ">
        <div class="h-[44rem] w-[30.25rem] rounded-[1.25rem] bg-slate-100">
            <img :src="data.imgUrl" alt="" class="object-fill w-full h-full">
        </div>
        <div class="w-full flex justify-between ">
            <div class="flex flex-col">
                <p class="text-[2rem] leading-[3.125rem] font-medium">{{ data.title }}</p>
                <p class="text-[1.5rem] leading-[3.125rem] font-medium text-[#7F7F7F]">Explore Now!</p>
            </div>
            <img :src="arrow" alt="" class="cursor-pointer hover:scale-105">
        </div>
    </div>
</template>

<script setup>
import arrow from "@/assets/rightArrow.svg"

defineProps({
    data: Object
})
</script>