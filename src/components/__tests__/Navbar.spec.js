import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import Navbar from '@/components/Navbar.vue'
import i18n from '@/plugins/i18n';
import { createPinia } from "pinia";
import { useAuthStore } from '@/stores/auth';

describe('NavBar.vue', () => {
    useAuthStore(createPinia());
    
    const wrapper = shallowMount(Navbar, {
        global: {
            components: {
                'RouterLink': RouterLinkStub
            },
            plugins: [i18n]
        }
    });

    const select = wrapper.find('select');

    test("I18n Text Test", () => {

        expect(select.exists()).toBe(true);

        expect(select.text()).toContain('Gujarati');
    });


    test("Checks selected i18n locale", () => {
        const locales = {
            english: 'en',
            gujarati: 'gj'
        };

        select.setValue(locales.gujarati);

        expect(select.element.value).toBe(locales.gujarati);
    })
});