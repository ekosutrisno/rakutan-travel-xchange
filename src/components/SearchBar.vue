<template>
    <!-- Md+ view -->
    <div class="w-full hidden md:block bg-blue-1 h-[70px] p-2 sticky top-0 z-10">
        <div class="flex items-center justify-center px-[40px] max-w-7xl mx-auto space-x-4">
            <div class="relative w-[470px]">
                <svg width="16" height="15" aria-hidden="true" class="absolute top-4 left-3" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.73185 12.8287C8.1551 12.8284 9.53733 12.352 10.6585 11.4753L14.1833 15L15.3171 13.8663L11.7923 10.3416C12.6695 9.22038 13.1462 7.83791 13.1466 6.41437C13.1466 2.87765 10.2688 0 6.73185 0C3.19494 0 0.317139 2.87765 0.317139 6.41437C0.317139 9.95109 3.19494 12.8287 6.73185 12.8287ZM6.73185 1.60359C9.38513 1.60359 11.5429 3.76123 11.5429 6.41437C11.5429 9.06751 9.38513 11.2251 6.73185 11.2251C4.07856 11.2251 1.92082 9.06751 1.92082 6.41437C1.92082 3.76123 4.07856 1.60359 6.73185 1.60359Z" fill="#757575"/>
                </svg>
                <input 
                    type="search"
                    v-model="cityQuery.label"
                    @input="showSuggestedToggle"
                    @keydown.enter="getAutoSuggest" 
                    class="h-[50px] py-[10px] w-[470px] pb-[15px] pl-[34.95px] pr-[18.08px] rounded-[3px] text-[14px] placeholder-placeholder"
                    placeholder="Singapore, Singapore"
                >
                <transition
                    leave-active-class="transition duration-100 ease-in"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                >
                <div ref="target" v-if="showSuggested && autoSuggest.length" class="h-auto w-full shadow-lg absolute rounded-[3px] text-[14px] text-black-2 bg-white mt-[2px] overflow-hidden">
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

            <div class="relative w-[250px]">
                <svg width="17" height="15" aria-hidden="true" class="absolute top-4 left-3" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 1.35H12.5V0.15C12.5 0.0675 12.425 0 12.3333 0H11.1667C11.075 0 11 0.0675 11 0.15V1.35H5.66667V0.15C5.66667 0.0675 5.59167 0 5.5 0H4.33333C4.24167 0 4.16667 0.0675 4.16667 0.15V1.35H0.666667C0.297917 1.35 0 1.61813 0 1.95V14.4C0 14.7319 0.297917 15 0.666667 15H16C16.3687 15 16.6667 14.7319 16.6667 14.4V1.95C16.6667 1.61813 16.3687 1.35 16 1.35ZM15.1667 13.65H1.5V6.525H15.1667V13.65ZM1.5 5.25V2.7H4.16667V3.6C4.16667 3.6825 4.24167 3.75 4.33333 3.75H5.5C5.59167 3.75 5.66667 3.6825 5.66667 3.6V2.7H11V3.6C11 3.6825 11.075 3.75 11.1667 3.75H12.3333C12.425 3.75 12.5 3.6825 12.5 3.6V2.7H15.1667V5.25H1.5Z" fill="#757575"/>
                </svg>

                <input
                    placeholder="" 
                    type="text"
                    v-model="dateRange" 
                    class="text-[14px] font-normal leading-5 h-[50px] lg:w-[250px] py-[10px] pb-[15px] pl-[34.95px] pr-[18.08px] rounded-[3px]"
                >

                <span 
                    aria-hidden="true" 
                    class="text-[14px] text-placeholder font-normal leading-5 absolute top-3.5 right-3"
                >1 night</span>                
            </div>
            <div class="relative w-[250px]">
                <input type="text" v-model="info" class="h-[50px] lg:w-[250px] py-[10px] pb-[15px] pl-[17px] pr-[18.08px] rounded-[3px] text-[14px]">
            </div>
            <div class="relative">
                <button type="button" @click="onSearchAction" class="w-[150px] h-[50px] rounded-[3px] p-[10px] bg-blue-2 text-white font-semibold">Search</button>
            </div>
        </div>
    </div>

    <!-- Sm / mobile view -->
    <div class="w-full md:hidden">
        <FilterMobileView v-if="onFilter" @close="onFilterToggle"/>
        <SearchMobileView v-if="onSearch" @close="onSearchToggle"/>

        <!-- Search Info -->
        <button type="button" @click="onSearchToggle" class="w-full p-4 space-x-[14px] bg-white hover:bg-light-grey h-[50px] border-t border-b border-line inline-flex items-center ">
            <div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.8564 14.5735L11.1375 10.6129C12.0937 9.449 12.6176 7.98455 12.6176 6.45999C12.6176 2.89801 9.78739 0 6.30878 0C2.83017 0 0 2.89801 0 6.45999C0 10.022 2.83017 12.92 6.30878 12.92C7.6147 12.92 8.85917 12.5167 9.92316 11.751L13.6703 15.7416C13.8269 15.9082 14.0376 16 14.2633 16C14.477 16 14.6797 15.9166 14.8336 15.7649C15.1606 15.4428 15.171 14.9085 14.8564 14.5735ZM6.30878 1.68522C8.88002 1.68522 10.9718 3.82712 10.9718 6.45999C10.9718 9.09286 8.88002 11.2348 6.30878 11.2348C3.73754 11.2348 1.64577 9.09286 1.64577 6.45999C1.64577 3.82712 3.73754 1.68522 6.30878 1.68522Z" fill="#757575"/>
                </svg>
            </div>
            <div class="text-left">
                <h4 class="text-[14px] font-bold">Singapore, Singapore</h4>
                <p class="text-[12px] text-black-2">
                    <span class="mr-[20px]">Aug 18 - Aug 19</span>
                    <span>2 adults, 1 room, 0 children</span>
                </p>
            </div>
        </button>

        <!-- Filter and Map view button -->
        <div class="bg-white h-[50px] grid grid-cols-2 divide-x divide-line">
            <button @click="onFilterToggle" type="button" class="inline-flex h-full items-center justify-center space-x-[10px] text-[14px] text-blue-1">
                <svg width="18" height="16" aria-hidden="true" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.66667 7.33333C4.13943 7.33333 5.33333 6.13943 5.33333 4.66667C5.33333 3.19391 4.13943 2 2.66667 2C1.19391 2 0 3.19391 0 4.66667C0 6.13943 1.19391 7.33333 2.66667 7.33333ZM2.66667 6C3.40305 6 4 5.40305 4 4.66667C4 3.93029 3.40305 3.33333 2.66667 3.33333C1.93029 3.33333 1.33333 3.93029 1.33333 4.66667C1.33333 5.40305 1.93029 6 2.66667 6Z" fill="#002D63"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.66667 0C2.29848 0 2 0.298477 2 0.666667V3.51171C2.19612 3.39826 2.42381 3.33333 2.66667 3.33333C2.90952 3.33333 3.13722 3.39826 3.33333 3.51171V0.666667C3.33333 0.298477 3.03486 0 2.66667 0ZM3.33333 5.82162C3.13722 5.93507 2.90952 6 2.66667 6C2.42381 6 2.19612 5.93507 2 5.82162V15.3333C2 15.7015 2.29848 16 2.66667 16C3.03486 16 3.33333 15.7015 3.33333 15.3333V5.82162Z" fill="#002D63"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.66665 8.66667C7.19389 8.66667 5.99998 9.86057 5.99998 11.3333C5.99998 12.8061 7.19389 14 8.66665 14C10.1394 14 11.3333 12.8061 11.3333 11.3333C11.3333 9.86057 10.1394 8.66667 8.66665 8.66667ZM8.66697 10C7.93059 10 7.33364 10.597 7.33364 11.3333C7.33364 12.0697 7.93059 12.6667 8.66697 12.6667C9.40335 12.6667 10.0003 12.0697 10.0003 11.3333C10.0003 10.597 9.40335 10 8.66697 10Z" fill="#002D63"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.66665 16C9.03484 16 9.33331 15.7015 9.33331 15.3333L9.33331 12.4885C9.13727 12.6018 8.9097 12.6667 8.66697 12.6667C8.42398 12.6667 8.19617 12.6017 7.99998 12.4881L7.99998 15.3333C7.99998 15.7015 8.29846 16 8.66665 16ZM7.99998 10.1786C8.19617 10.065 8.42398 10 8.66697 10C8.9097 10 9.13727 10.0649 9.33331 10.1782L9.33331 0.666667C9.33331 0.298477 9.03483 2.60937e-08 8.66664 5.82818e-08C8.29846 9.047e-08 7.99998 0.298477 7.99998 0.666667L7.99998 10.1786Z" fill="#002D63"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6667 7.33333C16.1394 7.33333 17.3333 6.13943 17.3333 4.66667C17.3333 3.19391 16.1394 2 14.6667 2C13.1939 2 12 3.19391 12 4.66667C12 6.13943 13.1939 7.33333 14.6667 7.33333ZM14.6667 6C15.403 6 16 5.40305 16 4.66667C16 3.93029 15.403 3.33333 14.6667 3.33333C13.9303 3.33333 13.3333 3.93029 13.3333 4.66667C13.3333 5.40305 13.9303 6 14.6667 6Z" fill="#002D63"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6667 0C14.2985 0 14 0.298477 14 0.666667V3.51171C14.1961 3.39826 14.4238 3.33333 14.6667 3.33333C14.9095 3.33333 15.1372 3.39826 15.3333 3.51171V0.666667C15.3333 0.298477 15.0349 0 14.6667 0ZM15.3333 5.82162C15.1372 5.93507 14.9095 6 14.6667 6C14.4238 6 14.1961 5.93507 14 5.82162V15.3333C14 15.7015 14.2985 16 14.6667 16C15.0349 16 15.3333 15.7015 15.3333 15.3333V5.82162Z" fill="#002D63"/>
                </svg>
                <span>Sort & Filter</span>
            </button>
            <button type="button" class="inline-flex h-full items-center justify-center space-x-[10px] text-[14px] text-blue-1">
                <svg width="14" height="16" aria-hidden="true" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 3.5C6.44374 3.5 5.89997 3.66495 5.43746 3.97399C4.97495 4.28303 4.61446 4.72229 4.40159 5.2362C4.18872 5.75012 4.13302 6.31562 4.24154 6.86119C4.35006 7.40676 4.61793 7.9079 5.01126 8.30124C5.4046 8.69457 5.90574 8.96244 6.45131 9.07096C6.99688 9.17948 7.56238 9.12378 8.0763 8.91091C8.59021 8.69804 9.02947 8.33755 9.33851 7.87504C9.64755 7.41253 9.8125 6.86876 9.8125 6.3125C9.81164 5.56684 9.51505 4.85197 8.98779 4.32471C8.46053 3.79745 7.74566 3.50086 7 3.5ZM7 8C6.66624 8 6.33998 7.90103 6.06248 7.7156C5.78497 7.53018 5.56868 7.26663 5.44095 6.95828C5.31323 6.64993 5.27981 6.31063 5.34492 5.98328C5.41004 5.65594 5.57076 5.35526 5.80676 5.11926C6.04276 4.88326 6.34344 4.72254 6.67078 4.65742C6.99813 4.59231 7.33743 4.62573 7.64578 4.75345C7.95413 4.88118 8.21768 5.09747 8.40311 5.37498C8.58853 5.65248 8.6875 5.97874 8.6875 6.3125C8.687 6.7599 8.50905 7.18883 8.19269 7.50519C7.87633 7.82155 7.4474 7.9995 7 8ZM7 0.125C5.35954 0.126861 3.78681 0.779354 2.62683 1.93933C1.46685 3.09931 0.814361 4.67204 0.8125 6.3125C0.8125 8.52003 1.83273 10.8602 3.76302 13.0801C4.63166 14.0831 5.60912 14.9864 6.67741 15.7733C6.77196 15.8395 6.88458 15.875 7 15.875C7.11542 15.875 7.22804 15.8395 7.32259 15.7733C8.39088 14.9864 9.36834 14.0831 10.237 13.0801C12.1672 10.8602 13.1875 8.5201 13.1875 6.3125C13.1856 4.67204 12.5331 3.09931 11.3732 1.93933C10.2132 0.779354 8.64046 0.126861 7 0.125ZM7 14.608C5.83752 13.6962 1.9375 10.3366 1.9375 6.3125C1.9375 4.96984 2.47087 3.68217 3.42027 2.73277C4.36967 1.78337 5.65734 1.25 7 1.25C8.34266 1.25 9.63032 1.78337 10.5797 2.73277C11.5291 3.68217 12.0625 4.96984 12.0625 6.3125C12.0625 10.3366 8.16227 13.6964 7 14.608Z" fill="#002D63"/>
                </svg>
                <span>Map View</span>
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, toRefs } from 'vue'
import { City } from '../@types/model.inteface';
import { useApiService } from '../services'
import { onClickOutside } from '@vueuse/core';
import FilterMobileView from './FilterMobileView.vue';
import SearchMobileView from './SearchMobileView.vue';

export default defineComponent({
  components: { FilterMobileView, SearchMobileView },
    setup () {
        const apiService = useApiService();
        const state = reactive({
            autoSuggest: computed(()=> apiService.autoSuggest),
            showSuggested: false,
            info: '2 adults, 0 children, 1 room',
            dateRange: 'Jul 19  –  Jul 20',
            cityQuery:{label: '',cityCode: ''} as City,
            onFilter: false,
            onSearch: false
        })

        const target = ref(null)

        onClickOutside(target, () => { state.showSuggested = false})

        const onSearchAction = ()=> {
            apiService.getProperty(state.cityQuery.cityCode);
        }

        const onFilterToggle = ()=>{
            state.onFilter = !state.onFilter;
        }
        const onSearchToggle = ()=>{
            state.onSearch = !state.onSearch;
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

        return {
            target,
            ...toRefs(state),
            onSearchAction,
            onSelectCity,
            onFilterToggle,
            onSearchToggle,
            getAutoSuggest,
            showSuggestedToggle
        }
    }
})
</script>