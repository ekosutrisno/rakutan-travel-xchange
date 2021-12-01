<template>
    <div class="absolute inset-0 h-full bg-white z-50">
         <!-- Title -->
        <div class="w-full p-[18px] inline-flex items-center bg-white h-[55px] border-b border-line">
            <button @click="onClose" type="button" class="mr-[21px]">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.657 7.071L0 1.414L1.414 0L7.071 5.657L12.728 0L14.142 1.414L8.485 7.071L14.142 12.728L12.728 14.142L7.071 8.485L1.414 14.142L0 12.728L5.657 7.071Z" fill="#002D63"/>
                </svg>
            </button>
            <h3 class="font-bold">Where</h3>
        </div>

        <div class="flex flex-col p-4 space-y-[20px]">
            <div class="relative w-full">
                <svg width="16" height="15" aria-hidden="true" class="absolute top-3 left-3" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.73185 12.8287C8.1551 12.8284 9.53733 12.352 10.6585 11.4753L14.1833 15L15.3171 13.8663L11.7923 10.3416C12.6695 9.22038 13.1462 7.83791 13.1466 6.41437C13.1466 2.87765 10.2688 0 6.73185 0C3.19494 0 0.317139 2.87765 0.317139 6.41437C0.317139 9.95109 3.19494 12.8287 6.73185 12.8287ZM6.73185 1.60359C9.38513 1.60359 11.5429 3.76123 11.5429 6.41437C11.5429 9.06751 9.38513 11.2251 6.73185 11.2251C4.07856 11.2251 1.92082 9.06751 1.92082 6.41437C1.92082 3.76123 4.07856 1.60359 6.73185 1.60359Z" fill="#757575"/>
                </svg>
                <input 
                    type="search"
                    v-model="cityQuery.label"
                    @input="showSuggestedToggle"
                    @keydown.enter="getAutoSuggest" 
                    class="border-line h-[40px] py-[10px] w-full pb-[15px] pl-[34.95px] pr-[18.08px] rounded-[3px] text-[14px] placeholder-placeholder"
                    placeholder="Singapore, Singapore"
                >
                <transition
                    leave-active-class="transition duration-100 ease-in"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                >
                <div ref="target" v-if="showSuggested && autoSuggest.length" class="h-auto w-full shadow-lg absolute rounded-[3px] text-[14px] text-black-2 bg-white mt-[2px] overflow-hidden z-50">
                    <ul>
                        <li v-for="city in autoSuggest" :key="city.cityCode">
                            <button 
                                @click="onSelectCity(city)" 
                                class="inline-flex h-full w-full py-2 px-3 items-center space-x-[10px] hover:bg-light-grey focus:outline-none focus:bg-light-grey"
                            >
                                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 3.5C6.44374 3.5 5.89997 3.66495 5.43746 3.97399C4.97495 4.28303 4.61446 4.72229 4.40159 5.2362C4.18872 5.75012 4.13302 6.31562 4.24154 6.86119C4.35006 7.40676 4.61793 7.9079 5.01126 8.30124C5.4046 8.69457 5.90574 8.96244 6.45131 9.07096C6.99688 9.17948 7.56238 9.12378 8.0763 8.91091C8.59021 8.69804 9.02947 8.33755 9.33851 7.87504C9.64755 7.41253 9.8125 6.86876 9.8125 6.3125C9.81164 5.56684 9.51505 4.85197 8.98779 4.32471C8.46053 3.79745 7.74566 3.50086 7 3.5ZM7 8C6.66624 8 6.33998 7.90103 6.06248 7.7156C5.78497 7.53018 5.56868 7.26663 5.44095 6.95828C5.31323 6.64993 5.27981 6.31063 5.34492 5.98328C5.41004 5.65594 5.57076 5.35526 5.80676 5.11926C6.04276 4.88326 6.34344 4.72254 6.67078 4.65742C6.99813 4.59231 7.33743 4.62573 7.64578 4.75345C7.95413 4.88118 8.21768 5.09747 8.40311 5.37498C8.58853 5.65248 8.6875 5.97874 8.6875 6.3125C8.687 6.7599 8.50905 7.18883 8.19269 7.50519C7.87633 7.82155 7.4474 7.9995 7 8ZM7 0.125C5.35954 0.126861 3.78681 0.779354 2.62683 1.93933C1.46685 3.09931 0.814361 4.67204 0.8125 6.3125C0.8125 8.52003 1.83273 10.8602 3.76302 13.0801C4.63166 14.0831 5.60912 14.9864 6.67741 15.7733C6.77196 15.8395 6.88458 15.875 7 15.875C7.11542 15.875 7.22804 15.8395 7.32259 15.7733C8.39088 14.9864 9.36834 14.0831 10.237 13.0801C12.1672 10.8602 13.1875 8.5201 13.1875 6.3125C13.1856 4.67204 12.5331 3.09931 11.3732 1.93933C10.2132 0.779354 8.64046 0.126861 7 0.125ZM7 14.608C5.83752 13.6962 1.9375 10.3366 1.9375 6.3125C1.9375 4.96984 2.47087 3.68217 3.42027 2.73277C4.36967 1.78337 5.65734 1.25 7 1.25C8.34266 1.25 9.63032 1.78337 10.5797 2.73277C11.5291 3.68217 12.0625 4.96984 12.0625 6.3125C12.0625 10.3366 8.16227 13.6964 7 14.608Z" fill="#757575"/>
                                </svg>
                                <span> {{ city.label }} </span>
                            </button>
                        </li>
                    </ul>
                </div>
                </transition>
            </div>

            <div class="relative w-full">
                <svg width="17" height="15" aria-hidden="true" class="absolute top-3 left-3" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 1.35H12.5V0.15C12.5 0.0675 12.425 0 12.3333 0H11.1667C11.075 0 11 0.0675 11 0.15V1.35H5.66667V0.15C5.66667 0.0675 5.59167 0 5.5 0H4.33333C4.24167 0 4.16667 0.0675 4.16667 0.15V1.35H0.666667C0.297917 1.35 0 1.61813 0 1.95V14.4C0 14.7319 0.297917 15 0.666667 15H16C16.3687 15 16.6667 14.7319 16.6667 14.4V1.95C16.6667 1.61813 16.3687 1.35 16 1.35ZM15.1667 13.65H1.5V6.525H15.1667V13.65ZM1.5 5.25V2.7H4.16667V3.6C4.16667 3.6825 4.24167 3.75 4.33333 3.75H5.5C5.59167 3.75 5.66667 3.6825 5.66667 3.6V2.7H11V3.6C11 3.6825 11.075 3.75 11.1667 3.75H12.3333C12.425 3.75 12.5 3.6825 12.5 3.6V2.7H15.1667V5.25H1.5Z" fill="#757575"/>
                </svg>

                <input
                    placeholder="" 
                    type="text"
                    v-model="dateRange" 
                    class="border-line text-[14px] font-normal leading-5 h-[40px] w-full py-[10px] pb-[15px] pl-[34.95px] pr-[18.08px] rounded-[3px]"
                >

                <span 
                    aria-hidden="true" 
                    class="text-[14px] text-placeholder font-normal leading-5 absolute top-2 right-3"
                >1 night</span>                
            </div>
            <div class="relative w-full">
                <input type="text" v-model="info" class="border-line h-[40px] w-full py-[10px] pb-[15px] pl-[17px] pr-[18.08px] rounded-[3px] text-[14px]">
            </div>
            <div class="relative">
                <button type="button" @click="onSearchAction" class="w-[180px] h-[40px] rounded-[3px] p-[10px] bg-blue-2 text-white font-semibold">Search</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, toRefs } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { City } from '../@types/model.inteface';
import { useApiService } from '../services';

export default defineComponent({
    emits:['close'],
    setup (_, { emit }) {
        const apiService = useApiService();
        const state = reactive({
            autoSuggest: computed(()=> apiService.autoSuggest),
            showSuggested: false,
            info: '2 adults, 0 children, 1 room',
            dateRange: 'Jul 19  –  Jul 20',
            cityQuery:{label: '',cityCode: ''} as City
        })

        const target = ref(null)
        onClickOutside(target, () => { state.showSuggested = false})

        const onSearchAction = ()=> {
            apiService.getProperty(state.cityQuery.cityCode);
            onClose();
        }

        const onSelectCity = (city: City) => {
            state.cityQuery.label = city.label;
            state.cityQuery.cityCode = city.cityCode;
            state.showSuggested = false;
        }

        const getAutoSuggest = ()=>{
            apiService.getAutoSuggest();
        }

        const showSuggestedToggle = ()=> {
            state.showSuggested = true;
        }

        const onClose = ()=>{
            emit('close')
        }

        return {
            target,
            ...toRefs(state),
            onClose,
            onSearchAction,
            onSelectCity,
            getAutoSuggest,
            showSuggestedToggle
        }
    }
})
</script>