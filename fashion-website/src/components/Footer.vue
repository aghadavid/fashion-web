<template>
    <div class="w-full h-[34rem] px-[6.25rem] pt-[7.5rem] bg-black flex justify-between">
        <div class="flex flex-col">
            <a href="#hero" class="mb-[2rem] text-[2.5rem] tracking-[3%]  font-black text-white ">FASHION</a>
            <p class="text-[1.5rem] leading-[2.5rem] tracking-[2%] font-roboto text-[#8E8E8E]">Complete your style with awesome</p>
            <p class="text-[1.5rem] leading-[2.5rem] tracking-[2%] font-roboto text-[#8E8E8E] mb-[2rem]">clothes from us.</p>
            <div class="flex gap-[0.875rem] ">
                <div class="w-[3.25rem] h-[3.25rem] rounded-lg bg-[#EBD96B] hover:scale-105 cursor-pointer p-3" v-for="i in logo">
                    <img :src="i" alt="" class="object-contain w-full h-full">
                </div>
            </div>
        </div>
        <div class="flex gap-[11.75rem]">
            <ul class="flex flex-col gap-[2rem]">
                <li class="text-[1.5rem] hover:scale-105 cursor-pointer leadin-[2.5rem] tracking-[2%] text-[#D9D9D9] ">Company</li>
                <li class="text-[1.5rem] hover:scale-105 cursor-pointer text-[#8E8E8E] ">About</li>
                <li class="text-[1.5rem] hover:scale-105 cursor-pointer text-[#8E8E8E] ">Contact Us</li>
                <li class="text-[1.5rem] hover:scale-105 cursor-pointer text-[#8E8E8E] ">Support</li>
                <li class="text-[1.5rem] hover:scale-105 cursor-pointer text-[#8E8E8E] ">Careers</li>  
            </ul>
            <ul class="flex flex-col gap-[2rem]">
                <li class="text-[1.5rem] hover:scale-105 cursor-pointer leadin-[2.5rem] tracking-[2%] text-[#D9D9D9] ">Quick Link</li>
                <li class="text-[1.5rem] hover:scale-105 cursor-pointer text-[#8E8E8E] ">Share Location</li>
                <li class="text-[1.5rem] hover:scale-105 cursor-pointer text-[#8E8E8E] ">Orders Tracking</li>
                <li class="text-[1.5rem] hover:scale-105 cursor-pointer text-[#8E8E8E] ">Size Guide</li>
                <li class="text-[1.5rem] hover:scale-105 cursor-pointer text-[#8E8E8E] ">FAQs</li>  
            </ul>
            <ul class="flex flex-col gap-[2rem]">
                <li class="text-[1.5rem] hover:scale-105 cursor-pointer leadin-[2.5rem] tracking-[2%] text-[#D9D9D9] ">Legal</li>
                <li class="text-[1.5rem] hover:scale-105 cursor-pointer text-[#8E8E8E] ">Terms & conditions</li>
                <li class="text-[1.5rem] hover:scale-105 cursor-pointer text-[#8E8E8E] ">Privacy Policy</li>
            </ul>
        </div>
    </div>
</template>


<script setup>
import logo from '@/assets/footer-logo';
</script>