<template>
    <div class="w-full mt-[2.875rem]  px-[6.25rem] h-[3.875rem] flex justify-between">
        <div class="flex gap-3 items-center hover:scale-105 cursor-pointer ">
            <div class="w-[1.975rem] h-[1.875rem] overflow-hidden ">
                <img :src="logo" alt="" class="object-contain w-full h-full">
            </div>
            <p class="text-[2.5rem] font-bold">FASHION</p>
        </div>
        <div class="flex gap-[3.375rem] h-[4rem]">
            <ul class="flex items-center justify-center gap-0 text-[1.375rem] font-medium">
                <li class="hover:bg-black hover:text-white h-full  flex items-center px-[2rem] rounded-md cursor-pointer">
                    <p>CATALOGUE</p>
                </li>
                <li class="hover:bg-black hover:text-white h-full  flex items-center px-[2rem] rounded-md cursor-pointer">
                    <p>FASHION</p>
                </li>
                <li class="hover:bg-black hover:text-white h-full  flex items-center px-[2rem] rounded-md cursor-pointer">
                    <p>FAVOURITE</p>
                </li>
                <li class="hover:bg-black hover:text-white h-full  flex items-center px-[2rem] rounded-md cursor-pointer">
                    <p>LIFESTYLE</p>
                </li>

            </ul>
            <button class="bg-black text-white rounded-lg text-[1.375rem] font-medium px-[1rem] hover:scale-105 hover:shadow-sm" >SIGN UP</button>
        </div>
    </div>
</template>

<script setup>
import logo from '@/assets/logo/logo.svg'
</script>