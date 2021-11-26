<template>
    <div class="w-full bg-white h-[60.93px] p-2">
        <div class="flex items-center justify-between max-w-7xl mx-auto">
            <img class="h-[35px]" src="/cloudtravel-logo.jpg" alt="cloudtravel-logo">
            <div class="inline-flex items-center space-x-4">
                <button type="button" class="hover:text-blue-2 text-[16px] transition-colors">English</button>
                <button type="button" class="hover:text-blue-2 text-[16px] transition-colors">USD</button>
                <button type="button" class="hover:text-blue-2 text-[16px] transition-colors">My Account</button>
                <button type="button" class="hover:text-blue-2 text-[16px] transition-colors">Logout</button>
            </div>
        </div>
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

<style scoped>

</style>