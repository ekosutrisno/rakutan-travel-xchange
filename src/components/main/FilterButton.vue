<template>
<div class="mb-4">
    <h3 class="text-base font-bold">Singapore: 9999 properties found</h3>
    <div class="grid grid-cols-4 h-[44px] mt-[15px] rounded-[5px] bg-white overflow-hidden">
        <button class="btn-filter col-span-1 bg-blue-1 font-bold text-white">
            Popularity
        </button>
        <button class="btn-filter col-span-1 inline-flex items-center justify-center space-x-2">
            <span>Price (lowest first)</span>
            <span>
                <svg width="7" height="4" aria-hidden="true" viewBox="0 0 7 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0L3.2 4L6.4 0H0Z" fill="#002D63"/>
                </svg>
            </span>
        </button>
        <button class="btn-filter col-span-1 border-l-[1px] border-r-[1px] border-line">
            Reviews
        </button>
        <button class="btn-filter col-span-1">
            Discount
        </button>
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