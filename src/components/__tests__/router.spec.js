import GalleryCard from "@/components/GalleryCard.vue";
import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import { createPinia } from "pinia";
import i18n from "@/plugins/i18n";
import { useCarData } from "@/stores/carData.js"

describe('Router', () => {
    useCarData(createPinia());
    const car = { id: 2533 };

    const wrapper = shallowMount(GalleryCard, {
        props: {
            car
        },
        global: {
            components: {
                'RouterLink': RouterLinkStub
            },
            plugins: [i18n]
        }
    });
    
    test('Renders router link with specific id', () => {
        expect(wrapper.findComponent(RouterLinkStub).props().to).toEqual(`/details/${car.id}`);
    })
})