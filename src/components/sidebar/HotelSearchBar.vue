<template>
    <div class="h-[105px] w-[290px] rounded-[5px] p-[20px] bg-white flex flex-col justify-between">
        <div class="flex items-center justify-between">
            <p class="font-semibold text-[14px]">Hotel name</p>
        </div>
  
        <div class="flex items-center justify-between w-full relative">
            <input 
                type="text" 
                v-model="query" 
                class="w-[250px] text-[14px] h-[40px] rounded-[3px] border-line"
                placeholder="e.g Hilton, Ibis ..."
            >
            <span class="absolute right-3">
                <svg width="15" height="15" aria-hidden="true" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.41471 12.8287C7.83796 12.8284 9.22019 12.352 10.3413 11.4753L13.8662 15L15 13.8663L11.4751 10.3416C12.3523 9.22038 12.8291 7.83791 12.8294 6.41437C12.8294 2.87765 9.95162 0 6.41471 0C2.8778 0 0 2.87765 0 6.41437C0 9.95109 2.8778 12.8287 6.41471 12.8287ZM6.41471 1.60359C9.068 1.60359 11.2257 3.76123 11.2257 6.41437C11.2257 9.06751 9.068 11.2251 6.41471 11.2251C3.76143 11.2251 1.60368 9.06751 1.60368 6.41437C1.60368 3.76123 3.76143 1.60359 6.41471 1.60359Z" fill="#757575"/>
                </svg>
            </span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
    setup () {
        const state = reactive({
            query: ''
        })

        return {
            ...toRefs(state)
        }
    }
})
</script>

<style scoped>

</style>