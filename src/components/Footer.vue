<template>
    <div class="h-[70px] text-[14px] text-white bg-black-2 flex items-center justify-center space-x-10">
        <a href="#">FAQ</a>
        <a href="#">Terms of use</a>
        <a href="#">Privacy policy</a>
        <a href="#">Contact us</a>
    </div>
    <div class="h-[50px] text-[12px] text-white font-normal bg-black-1 flex items-center justify-center">
        Copyright CloudTravel {{new Date().getFullYear()}}.
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
        

        return {}
    }
})
</script>