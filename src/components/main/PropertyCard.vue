<template>
 <div class="p-[10px] h-[230px] rounded-[5px] flex gap-2 bg-white hover:shadow-md transition-shadow">
    <div class="w-[200px] flex-none flex-shrink-0">
        <div class="flex flex-col w-[200px] h-[160px] overflow-hidden">
            <img :src="result.property.heroImage.url" alt="hero-image" class="object-cover h-full w-full">
        </div>
        <div class="grid grid-cols-4 gap-0.5 pt-0.5">
            <div 
                v-for="(img, idx) in result.property.gallery != undefined ? result.property.gallery.slice(0,4) : [] " 
                :key="idx"
                class="h-[48px] w-full overflow-hidden"
            >
                <img 
                    v-if="img.s != undefined" 
                    :src="img.s.url" 
                    :alt="`${img.s.caption}-${idx}`"
                    class="h-full w-full object-cover hover:scale-150 transition-transform"
                >
            </div>
        </div>
    </div>
    <div class="flex-1 p-[8px]">
        <div class="flex items-start justify-between h-full">
            <div>
                <h3 class="font-bold inline-flex items-center">
                    <span class="mr-[5px]">{{result.property.name}}</span>
                    <span v-for="star in Math.floor(result.property.starRating)" :key="star">
                         <svg width="12" height="12" aria-hidden="true" class="hover:scale-125 transition-transform" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z" fill="#E9BF2D"/>
                        </svg>  
                    </span>
                </h3>
                <p class="font-normal text-[12px] mt-[5px]"> {{result.property.location.address}} </p>
                <p class="font-normal text-[12px] mt-[7px] text-placeholder max-w-md truncate"> 
                    {{
                        `"${
                            result.property.reviews != undefined
                            ? result.property.reviews.summary.text
                            : 'Summary not available.'
                        }"`
                    }} 
                </p>
                <div class="inline-flex items-center w-full space-x-[5px] mt-[11px] mb-[13px]">
                    <p class="w-auto py-0 px-[5px] h-[20px] text-[12px] border border-blue-2 text-blue-2">
                        Breakfast
                    </p>
                    <p v-if="result.packages[0].nonRefundable" class="w-auto py-0 px-[5px] h-[20px] text-[12px] border border-blue-2 text-blue-2">
                        Free cancellation
                    </p>
                    <p v-if="result.packages[0].payAtHotel" class="w-auto py-0 px-[5px] h-[20px] text-[12px] border border-blue-2 text-blue-2">
                        Pay at hotel
                    </p>
                    <p v-if="result.packages[0].payLater" class="w-auto py-0 px-[5px] h-[20px] text-[12px] border border-blue-2 text-blue-2">
                        Pay later
                    </p>
                </div>
                <div class="inline-flex items-center space-x-[11px] text-[12px]">
                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.50012 11H4.00012V8H6.50012V5.5H9.50012V8H12.0001V11H9.50012V13.5H6.50012V11ZM8.00012 0L0.00012207 3V9.09C0.00012207 14.14 3.41012 18.85 8.00012 20C12.5901 18.85 16.0001 14.14 16.0001 9.09V3L8.00012 0Z" fill="#002D63"/>
                    </svg>
                    <span>Singapore - SG Clean</span>
                </div>
            </div>
            <div class="flex flex-col justify-between items-end h-full">
                <div class="w-[146px] h-[50.5px] object-cover">
                    <img src="/TY-score-widget-transparent.png" alt="TY-Score">
                </div>
                <div class="flex flex-col items-end">
                    <div 
                            v-if="isDiscount(result.packages[0].displayRate, result.packages[0].adjustedDisplayRate)"
                            class="py-0.5 bg-blue-2 text-white text-[12px] font-bold px-[5px]"
                        >
                        {{`SAVE ${calculateDicountPercent(result.packages[0].displayRate.value,result.packages[0].adjustedDisplayRate.value).toFixed()}% TODAY!`}}
                    </div>
                    <p class="text-[12px] font-normal text-placeholder -mb-1 mt-1">Nightly avg.</p>
                    <h2 class="space-y-2">
                        <span 
                            v-if="isDiscount(result.packages[0].displayRate, result.packages[0].adjustedDisplayRate)" 
                            class="text-[12px] font-normal text-placeholder line-through lin"
                            
                        >SGD {{ result.packages[0].displayRate.value }}</span>
                        <span class="text-black-2 text-[24px] font-bold"> SGD {{ result.packages[0].adjustedDisplayRate.value }}</span>
                    </h2>
                </div>
            </div>
        </div>
    </div> 
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Package, Result } from '../../@types/model.inteface'

export default defineComponent({
    props:{
        result:{
            type: Object as ()=> Result,
            required: true
        }
    },
    setup () {

        const isDiscount = (displayRate: Package['displayRate'], adjustedDisplayRate: Package['adjustedDisplayRate']) => {
            return displayRate.value > adjustedDisplayRate.value
        }
        const calculateDicountPercent = (displayRate: number, adjustedDisplayRate: number)=>{
            return ((displayRate - adjustedDisplayRate)/displayRate) * 100;
        }

        return {
            isDiscount,
            calculateDicountPercent
        }
    }
})
</script>

<style scoped>

</style>