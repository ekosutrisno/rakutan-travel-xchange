<template>
<div class="mb-4">
    <h3 class="text-base font-bold">Singapore: {{ resultLength }} properties found</h3>
    <div class="grid grid-cols-4 h-[44px] mt-[15px] rounded-[5px] bg-white">
        <button class="btn-filter col-span-1 rounded-l-[5px] bg-blue-1 font-bold text-white">
            Popularity
        </button>
        <div class="h-full w-full col-span-1 relative">
            <button @click="showOptionToggle" class="btn-filter w-full inline-flex items-center justify-center space-x-2">
                <span>{{ current }}</span>
                <span>
                    <svg width="7" height="4" aria-hidden="true" viewBox="0 0 7 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0L3.2 4L6.4 0H0Z" fill="#002D63"/>
                    </svg>
                </span>
            </button>
            <div v-if="option" @click="onSelect" ref="target" class="w-full text-[14px] h-[44px] absolute left-0 -bottom-12 rounded-[5px] bg-white shadow inline-flex items-center justify-center">
                    <span>{{ selected }}</span>
            </div>
        </div>
        <button class="btn-filter col-span-1 border-l-[1px] border-r-[1px] border-line">
            Reviews
        </button>
        <button class="btn-filter col-span-1 rounded-r-[5px]">
            Discount
        </button>
    </div>
</div>
</template>

<script lang="ts">
import { onClickOutside } from '@vueuse/core';
import { computed, defineComponent, reactive, ref, toRefs } from 'vue'
import { useApiService } from '../../services'

export default defineComponent({
    setup () {
        const apiService = useApiService();
        const state = reactive({
            resultLength: computed(()=> apiService.getResult.length),
            current: 'Price (lowest first)',
            selected: 'Price (highest first)',
            option: false
        })

        const target = ref(null)
        onClickOutside(target, () => { showOptionToggle()})
 
        const showOptionToggle = ()=>{
            state.option = !state.option;
        }

        const onSelect = ()=>{
            if(state.current == `Price (lowest first)`){
                state.current = `Price (highest first)`;
                state.selected = `Price (lowest first)`;
                showOptionToggle();
            }else {
                state.selected = `Price (highest first)`;
                state.current = `Price (lowest first)`
                showOptionToggle();
            }
        }

        return {
            ...toRefs(state),
            target,
            onSelect,
            showOptionToggle
        }
    }
})
</script>