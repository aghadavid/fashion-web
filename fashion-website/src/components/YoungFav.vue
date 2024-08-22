<template>
    <div class="w-full h-[78.5rem] pt-[11.875rem] pl-[6.5rem] pb-[4rem]">
        <p class="text-[3rem] leading-[3.125rem] font-black tracking-[6%] mb-[6.3rem]">Young’s Favourite</p>

        <div class="w-full flex gap-[3rem]">
            <YoungCard v-for="(data,index) in datas" :key="index" :data="data"/>
        </div>
    </div>
</template>


<script setup>
import YoungCard from "@/components/YoungCard.vue"
import trendingImg from "@/assets/trending-ig.png";
import under40Img from "@/assets/under-40.png";

const datas = [
    {imgUrl: trendingImg, title:"Trending on Instagram"},
    {imgUrl: under40Img, title:"All Under $40"},
]

</script>