<template>
    <div class="w-full bg-blue-1 h-[70px] p-2 sticky top-0 z-10">
        <div class="flex items-center justify-center px-[40px] max-w-7xl mx-auto space-x-4">
            <div class="relative w-[470px] ">
                <svg width="16" height="15" aria-hidden="true" class="absolute top-4 left-3" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.73185 12.8287C8.1551 12.8284 9.53733 12.352 10.6585 11.4753L14.1833 15L15.3171 13.8663L11.7923 10.3416C12.6695 9.22038 13.1462 7.83791 13.1466 6.41437C13.1466 2.87765 10.2688 0 6.73185 0C3.19494 0 0.317139 2.87765 0.317139 6.41437C0.317139 9.95109 3.19494 12.8287 6.73185 12.8287ZM6.73185 1.60359C9.38513 1.60359 11.5429 3.76123 11.5429 6.41437C11.5429 9.06751 9.38513 11.2251 6.73185 11.2251C4.07856 11.2251 1.92082 9.06751 1.92082 6.41437C1.92082 3.76123 4.07856 1.60359 6.73185 1.60359Z" fill="#757575"/>
                </svg>
                <input 
                    type="search"
                    v-model="searhQuery"
                    @keydown.enter="onSearch" 
                    class="h-[50px] py-[10px] w-[470px] pb-[15px] pl-[34.95px] pr-[18.08px] rounded-[3px] text-[14px] placeholder-placeholder"
                    placeholder="Singapore, Singapore"
                >
            </div>
            <div class="relative w-[250px]">
                <svg width="16" height="15" aria-hidden="true" class="absolute top-4 left-3" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.73185 12.8287C8.1551 12.8284 9.53733 12.352 10.6585 11.4753L14.1833 15L15.3171 13.8663L11.7923 10.3416C12.6695 9.22038 13.1462 7.83791 13.1466 6.41437C13.1466 2.87765 10.2688 0 6.73185 0C3.19494 0 0.317139 2.87765 0.317139 6.41437C0.317139 9.95109 3.19494 12.8287 6.73185 12.8287ZM6.73185 1.60359C9.38513 1.60359 11.5429 3.76123 11.5429 6.41437C11.5429 9.06751 9.38513 11.2251 6.73185 11.2251C4.07856 11.2251 1.92082 9.06751 1.92082 6.41437C1.92082 3.76123 4.07856 1.60359 6.73185 1.60359Z" fill="#757575"/>
                </svg>
                <input type="text" class="h-[50px] lg:w-[250px] py-[10px] pb-[15px] pl-[34.95px] pr-[18.08px] rounded-[3px]">
            </div>
            <div class="relative w-[250px]">
                <svg width="16" height="15" aria-hidden="true" class="absolute top-4 left-3" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.73185 12.8287C8.1551 12.8284 9.53733 12.352 10.6585 11.4753L14.1833 15L15.3171 13.8663L11.7923 10.3416C12.6695 9.22038 13.1462 7.83791 13.1466 6.41437C13.1466 2.87765 10.2688 0 6.73185 0C3.19494 0 0.317139 2.87765 0.317139 6.41437C0.317139 9.95109 3.19494 12.8287 6.73185 12.8287ZM6.73185 1.60359C9.38513 1.60359 11.5429 3.76123 11.5429 6.41437C11.5429 9.06751 9.38513 11.2251 6.73185 11.2251C4.07856 11.2251 1.92082 9.06751 1.92082 6.41437C1.92082 3.76123 4.07856 1.60359 6.73185 1.60359Z" fill="#757575"/>
                </svg>
                <input type="text" v-model="info" class="h-[50px] lg:w-[250px] py-[10px] pb-[15px] pl-[34.95px] pr-[18.08px] rounded-[3px] text-[14px]">
            </div>
            <div class="relative">
                <button type="button" @click="onSearch" class="w-[150px] h-[50px] rounded-[3px] p-[10px] bg-blue-2 text-white font-semibold">Search</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { useApiService } from '../services'

export default defineComponent({
    setup () {
        const apiService = useApiService();
        const state = reactive({
            searhQuery: '',
            info: '2 adults, 0 children, 1 room'
        })

        const onSearch = ()=>{
            apiService
                .getData(state.searhQuery)
        }
        

        return {
            ...toRefs(state),
            onSearch
        }
    }
})
</script>

<style scoped>

</style>