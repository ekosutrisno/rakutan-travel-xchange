<template>
 <div class="ph-item placholder-wrapper-custom">
     <div class="ph-col-2">
         <div class="ph-picture" style="height: 130px; width: 100px"></div>
     </div>
     <div class="ph-col-9">
        <div class="ph-row">
            <div class="ph-col-6"></div>
            <div class="ph-col-6 empty"></div>
            <div class="ph-col-12"></div>
            <div class="ph-col-2 big"></div>
        </div>
        <div class="ph-row">
            <div class="ph-col-12 empty big"></div>
            <div class="ph-col-8 empty"></div>
            <div class="ph-col-4 big"></div>
        </div>
     </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
        return{}
    }
})
</script>
<style scoped>
    .placholder-wrapper-custom{
        background: transparent; 
        border: none; 
        margin: 0; 
        padding: 0; 
        margin-top: 0;
    }
</style>