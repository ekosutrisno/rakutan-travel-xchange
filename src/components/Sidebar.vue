<template>
<div class="col-span-3 flex flex-col space-y-[7px]">
    <!-- Map Section -->
    <div class="h-[100px] w-[290px] rounded-[5px] overflow-auto relative flex items-center justify-center">
        <button type="button" class="w-[170px] h-[40px] absolute rounded-[3px] bg-blue-1 text-white text-[14px]">Show on map</button>
        <img src="/map-bg.jpeg" alt="map-bg">
    </div>

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
</template>

<script lang="ts">
import {computed, defineComponent, reactive, toRefs } from 'vue'
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
  components: { 
      PricePerNight, 
      Review, 
      StarRating, 
      HotelSearchBar, 
      ReservationPolicy, 
      MealPlan, 
      PropertyType, 
      Facility 
    },
    setup () {
        const state = reactive({
            reviews: computed(()=> dataReviews),
            stars: computed(()=> dataStars),
            reservationPolicies: computed(()=> dataReservationPolicy),
            mealPlan: computed(()=> dataMealPlan),
            propertyTypes: computed(()=> dataPropertyType),
            facilities: computed(()=> dataFaclities)
        })

        return {
            ...toRefs(state)
        }
    }
})
</script>