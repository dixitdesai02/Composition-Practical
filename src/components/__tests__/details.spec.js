import { describe, expect, test } from "vitest";
import { useCarData } from "@/stores/carData.js";
import { createPinia } from "pinia";
import { shallowMount } from "@vue/test-utils";
import CarDetails from "@/views/CarDetails.vue";
import { ref } from "vue";

describe('CarDetails.vue', () => {
    test('Renders details for correct id', async () => {
        const carData = useCarData(createPinia());
        await carData.fetchCars();

        const carDetails = carData.carDetailsById(2533);
    
        console.log(carDetails);

        let isLoading = ref(false);

        const wrapper = shallowMount(CarDetails, {
            data() {
                return {
                    carDetails, 
                    isLoading
                }
            }
        });

        const detailsWrapper = wrapper.find('.details');
        
        console.log(detailsWrapper.attributes().id);

        expect(detailsWrapper.attributes().id).toBe("id-2533")
    });
})