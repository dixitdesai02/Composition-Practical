import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import Home from "@/views/Home.vue";
import GalleryCard from "@/components/GalleryCard.vue";
import { createPinia } from "pinia";
import { useCarData } from "@/stores/carData.js";
import i18n from '@/plugins/i18n';
import { ref } from "vue";

describe('Home.vue', () => {
    test('Renders list of cards', async () => {
        const store = useCarData(createPinia());
        await store.fetchCars();
        const isLoading = ref(false);

        const wrapper = shallowMount(Home, {
            global: {
                plugins: [i18n],
                mocks: {
                    isLoading,
                    cars: store.cars
                }
            }
        })
        const cards = wrapper.findAllComponents(GalleryCard);
        expect(cards).toHaveLength(store.cars.length);
    });
});