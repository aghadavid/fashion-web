<template>
    <div id="hero" class="w-full pt-[3.5rem] px-[6.25rem] mb-[4rem]">
        <div class="px-[5.125rem] pt-[4.25rem] flex bg-[#f4f5f6] rounded-[3rem] h-[53.25rem] gap-[1rem] b">
            <div class="flex flex-col ">
                <p class="text-[5rem] leading-[7.5rem] font-black pl-[2.25rem] bg-white -rotate-2 w-[31rem] hover:rotate-2">Let's</p>
                <p class="text-[5rem] leading-[7.5rem] font-black pl-[1.5rem]">Explore</p>
                <p class="text-[5rem] leading-[7.5rem] font-black pl-[1.5rem] bg-[#EBD96B] -rotate-2 w-[31rem] hover:rotate-2">Unique
                </p>
                <p class="text-[5rem] leading-[7.5rem] font-black pl-[1.5rem] mb-[2.5rem]">Clothes.</p>

                <p class="text-[2rem] mb-[2rem] ml-[1.5rem] tracking-[-5% w-full ">Live for Influential and Innovative
                    fashion!</p>
                <button class="bg-black text-white w-[13.75rem] h-[5.125rem] rounded-lg hover:scale-105 ml-[1.5rem] ">
                    <p class="mx-auto my-auto text-[1.875rem] ">Shop Now</p>
                </button>
            </div>
            <div     class="w-[54.5rem] h-[49rem] ml-[20rem] overflow-hidden animate-fadeInRight">
                <img :src="heroBg" alt="" class="object-fill w-full h-full">
            </div>
        </div>

    </div>
</template>
<script setup>
import heroBg from "@/assets/hero-bg.png"
</script>

