import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import Home from "@/views/Home.vue";
import GalleryCard from "@/components/GalleryCard.vue";
import { createPinia } from "pinia";
import axios from "axios";
import { useCarData } from "@/stores/carData.js";
import i18n from '../../plugins/i18n';
import { ref } from "vue";

describe('Home.vue', () => {
    test('Renders list of cards', async () => {
        const store = useCarData(createPinia());
        const response = await axios.get(import.meta.env.VITE_CARS_API_BASEURL);
        const cars = store.cars = await response.data.data;
        const isLoading = ref(false);

        console.log(cars);
        console.log(isLoading);

        const wrapper = shallowMount(Home, {
            data() {
                return {
                    isLoading,
                    cars
                }
            },
            global: {
                plugins: [i18n]
            }
        })
        const cards = wrapper.findAllComponents(GalleryCard);
        expect(cards).toHaveLength(cars.length);
    });
});