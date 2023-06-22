import NotFound from "@/views/NotFound.vue";
import { shallowMount } from "@vue/test-utils";
import { RouterLink } from "vue-router";

describe('Router', () => {
    test('Renders router link', () => {
        const wrapper = shallowMount(NotFound);

        expect(wrapper.findComponent(RouterLink).props().to).toEqual({name: 'home'});
    })
})