<template>
  <div class="max-w-full bg-light-grey min-h-screen font-mulish">
    <Header/>
    <SearchBar/>
    <div class="grid grid-cols-12 max-w-7xl mx-auto p-[15px]">
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
        <div class="col-span-9 bg-blue-2"> RIght</div>
    </div>
  </div>
 
</template>

<script lang="ts">
import { computed, defineComponent,reactive, toRefs } from "vue";
import Header from "./components/Header.vue";
import HotelSearchBar from "./components/left-sidebar/HotelSearchBar.vue";
import PricePerNight from "./components/left-sidebar/PricePerNight.vue";
import ReservationPolicy from "./components/left-sidebar/ReservationPolicy.vue";
import Review from "./components/left-sidebar/Review.vue";
import SearchBar from "./components/SearchBar.vue";
import StarRating from "./components/left-sidebar/StarRating.vue";
import { useApiService } from "./services";
import { dataReviews, dataStars, dataReservationPolicy,dataMealPlan, dataPropertyType, dataFaclities } from './services/useFakeData';
import MealPlan from "./components/left-sidebar/MealPlan.vue";
import PropertyType from "./components/left-sidebar/PropertyType.vue";
import Facility from "./components/left-sidebar/Facility.vue";

export default defineComponent({
  components: { Header, SearchBar, PricePerNight, Review, StarRating, HotelSearchBar, ReservationPolicy, MealPlan, PropertyType, Facility },
  setup() {
    const apiService = useApiService();

    const state = reactive({
      results: computed(()=> apiService.getResult),
      reviews: computed(()=> dataReviews),
      stars: computed(()=> dataStars),
      reservationPolicies: computed(()=> dataReservationPolicy),
      mealPlan: computed(()=> dataMealPlan),
      propertyTypes: computed(()=> dataPropertyType),
      facilities: computed(()=> dataFaclities)
    })

    // onMounted(()=> apiService.getData('sgsg'));

    return{
      ...toRefs(state)
    }
  },
});
</script>

