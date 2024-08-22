<template>
    <div class="h-[11.625rem] w-full bg-[#EBD96B] px-[10.75rem] overflow-hidden">
        <div class=" overflow-hidden flex h-full w-full flex-shrink-0">
            <div id="logo" class="flex  items-center h-full w-full logo " v-for="i in 2">
                <div class="h-[6rem] w-[19rem]  flex items-center justify-center" v-for="logo in brandsLogo">
                    <img :src="logo.name" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
 import brandsLogo from "@/assets/brands"

</script>



<style scoped>
.logo {
    animation: infinite-scroll 8s linear infinite;

}



@keyframes infinite-scroll {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-100%);
    }
}
</style>