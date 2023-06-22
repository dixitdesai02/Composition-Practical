import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import Navbar from '@/components/Navbar.vue'
import { expect } from 'vitest';
import i18n from '../../plugins/i18n';
import { createPinia } from "pinia";
import { useAuthStore } from '../../stores/auth';

describe('NavBar.vue', () => {
    test("I18n Text Test", async () => {
        
        const authStore = useAuthStore(createPinia());

        const NavBar = shallowMount(Navbar, {
            global: {
                components: {
                    'RouterLink': RouterLinkStub
                },
                plugins: [i18n]
            }
        });

        const titleWrapper = NavBar.find('select');

        expect(titleWrapper.exists()).toBe(true);

        expect(titleWrapper.text()).toContain('Gujarati');
    })
});