import { mount } from "@vue/test-utils";
import ModalForm from "@/components/ModalForm.vue";
import { createPinia } from "pinia";
import { useCarData } from "@/stores/carData.js";
import { useModalStore } from "@/stores/modalStore.js";
import i18n from '@/plugins/i18n';
import validation from '@/plugins/validation';


describe('ModalForm.vue', () => {

    useCarData(createPinia());
    useModalStore(createPinia());

    const wrapper = mount(ModalForm, {
        global: {
            plugins: [i18n, validation],
            mocks: {
                typeOfModal: 'edit',
                showModal: true
            }
        }
    });

    test('Renders modal title', () => {
        const modalTitle = wrapper.find('.modal-title');

        expect(modalTitle.text()).toEqual('EDIT CAR');
    });

    test('Renders modal submit button', () => {
        const modalSubmitBtn = wrapper.find('.btns-wrapper button');

        expect(modalSubmitBtn.text()).toEqual('Update');
    });
})