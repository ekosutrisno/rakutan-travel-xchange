<template>
 <div class="h-auto flex bg-white hover:shadow-md transition-shadow">
    <div class="w-[100px] flex-none flex-shrink-0">
        <div class="flex flex-col w-[100px] h-full overflow-hidden">
            <img :src="result.property.heroImage.url" alt="hero-image" class="object-cover h-full w-full">
        </div>
    </div>
    <div class="flex-1 flex flex-col justify-between h-full py-[8px] px-[10px]">
        <div class="flex flex-col">
            <h3 class="font-bold items-center text-[14]">
                <span>{{result.property.name}}</span>
            </h3>
            <p class="inline-flex items-center">
                <span v-for="star in Math.floor(result.property.starRating)" :key="star">
                    <svg width="12" height="12" aria-hidden="true" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z" fill="#E9BF2D"/>
                    </svg>  
                </span>
            </p>
            <p class="font-normal text-[10px] mt-[7px] text-placeholder max-w-md flex-wrap"> 
                {{`
                    ${result.property.location.address ? `${result.property.location.address}` : ''}
                    ${result.property.location.city ? `, ${result.property.location.city}` : ''}
                    ${result.property.location.stateProvince ? `, ${result.property.location.stateProvince}` : ''}
                    ${result.property.location.country ? `, ${result.property.location.country}` : ''}
                    ${result.property.location.postalCode ? `, ${result.property.location.postalCode}` : ''}
                `}} <a href="#">(view map)</a>
            </p>
            <div class="inline-flex items-center text-[10px] space-x-1">
                <span class="font-bold">{{`${result.property.starRating} Excellent`}}</span>
                <span class="font-normal">(12,345 reviews)</span>
            </div>
        </div>
        <div class="flex flex-col items-end">
            <div 
                v-if="isDiscount(result.packages[0].displayRate, result.packages[0].adjustedDisplayRate)"
                class="py-0.5 bg-blue-2 text-white text-[10px] font-bold px-[5px]"
            >
                {{`SAVE ${calculateDicountPercent(result.packages[0].displayRate.value,result.packages[0].adjustedDisplayRate.value).toFixed()}% TODAY!`}}
            </div>
            <p class="text-[10px] font-normal text-placeholder -mb-1 mt-1">Nightly avg.</p>
            <h2 class="space-y-2">
                <span 
                    v-if="isDiscount(result.packages[0].displayRate, result.packages[0].adjustedDisplayRate)" 
                    class="text-[10px] font-normal text-placeholder line-through"
                    
                >SGD {{ result.packages[0].displayRate.value }}</span>
                <span class="text-black-2 text-[14px] font-bold"> SGD {{ result.packages[0].adjustedDisplayRate.value }}</span>
            </h2>
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