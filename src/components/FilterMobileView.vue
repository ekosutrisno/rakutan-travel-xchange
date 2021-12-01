<template>
    <div class="absolute inset-0 h-full bg-light-grey">
        <!-- Title -->
        <div class="w-full p-[18px] inline-flex items-center bg-white h-[55px] border-b border-line">
            <button @click="onClose" type="button" class="mr-[21px]">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.657 7.071L0 1.414L1.414 0L7.071 5.657L12.728 0L14.142 1.414L8.485 7.071L14.142 12.728L12.728 14.142L7.071 8.485L1.414 14.142L0 12.728L5.657 7.071Z" fill="#002D63"/>
                </svg>
            </button>
            <h3 class="font-bold">Sort & Filter</h3>
        </div>

        <!-- Sub Title -->
        <div class="h-[40px] font-bold inline-flex items-center w-full p-[18px] text-[14px]">
            <h4>Sort by</h4>
        </div>

        <!-- Sort by select options -->
        <div class="w-full p-[18px] inline-flex items-center bg-white h-[44px]">
            <button type="button" class="mr-[21px] w-full inline-flex items-center justify-between text-[14px]">
               <span>Price (lowest first)</span>
               <span>
                    <svg width="8" height="5" aria-hidden="true" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0L4 5L8 0H0Z" fill="#333333"/>
                    </svg>
               </span>
            </button>
        </div>

        <!-- Sub Title -->
        <div class="h-[40px] font-bold inline-flex items-center w-full p-[18px] text-[14px]">
            <h4>Filter by</h4>
        </div>

        <!-- Filter By -->
        <div class="w-full bg-white shadow-lg pb-[60px]">
            <!-- Price Per Night Section -->
            <PricePerNight/>

            <!-- Reviews Section -->
            <Review :reviews="reviews"/>

            <!-- Star Rating Section -->
            <StarRating :stars="stars"/>

            <!-- Hotel Name Search Section -->
            <HotelSearchBar/>

            <!-- Reservation Policy Section -->
            <ReservationPolicy :reservationPolicies="reservationPolicies"/>

            <!-- Meal Plan Section -->
            <MealPlan :mealPlan="mealPlan"/>

            <!-- Property Type Section -->
            <PropertyType :propertyType="propertyTypes"/>

            <!-- Facility Section -->
            <Facility :facilities="facilities"/>

        </div>

    </div>
    <div class="h-[60px] z-50 p-[18px] fixed bottom-0 w-full bg-white grid grid-cols-2 content-center gap-[20px] border-t border-line">
        <button type="button" @click="onClose" class="py-2 text-center rounded-[3px] text-[14px] font-bold border-2 border-blue-1">Clear</button>
        <button type="button" @click="onFilter" class="py-2 text-center rounded-[3px] text-[14px] font-bold  text-white bg-blue-1">Filter</button>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from 'vue'
import Facility from './sidebar/Facility.vue'
import HotelSearchBar from './sidebar/HotelSearchBar.vue'
import MealPlan from './sidebar/MealPlan.vue'
import PricePerNight from './sidebar/PricePerNight.vue'
import PropertyType from './sidebar/PropertyType.vue'
import ReservationPolicy from './sidebar/ReservationPolicy.vue'
import Review from './sidebar/Review.vue'
import StarRating from './sidebar/StarRating.vue'
import { 
    dataReviews, 
    dataStars, 
    dataReservationPolicy,
    dataMealPlan, 
    dataPropertyType, 
    dataFaclities 
} from '../services/useFilterDataOptions';

export default defineComponent({
    components: { PricePerNight, Review, StarRating, HotelSearchBar, ReservationPolicy, MealPlan, PropertyType, Facility },
    emits:['close'],
    setup (_, { emit }) {
        const state = reactive({
            reviews: computed(()=> dataReviews),
            stars: computed(()=> dataStars),
            reservationPolicies: computed(()=> dataReservationPolicy),
            mealPlan: computed(()=> dataMealPlan),
            propertyTypes: computed(()=> dataPropertyType),
            facilities: computed(()=> dataFaclities)
        })

        const onClose = ()=>{
            emit('close');
        }

        const onFilter = ()=>{
            onClose();
            console.log("On Filter Action Fire");
        }

        return {
            ...toRefs(state),
            onClose,
            onFilter
        }
    }
})
</script>