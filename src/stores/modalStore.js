import { defineStore } from "pinia";

export const useModalStore = defineStore("modalStore", {
    state: () => {
        return {
            showModal: false,
            typeOfModal: 'add',
            editData: {}
        }
    }
})