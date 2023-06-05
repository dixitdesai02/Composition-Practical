import axios from "axios";
import { defineStore } from "pinia";

export const useAuthStore = defineStore('authStore', {
    state: () => {
        return {
            baseURL: import.meta.env.VITE_AUTH_API_BASEURL,
            users: [],
            isLoggedIn: JSON.parse(sessionStorage.getItem('isLoggedIn')),
            loggedInUser: sessionStorage.getItem("loggedInUser")
        }
    },

    actions: {
        async register(data) {
            try {
                await axios.post(`${this.baseURL}/resource/users`, data);
            }
            catch (error) {
                throw new Error(error);
            }
        },

        async getAllUsers() {
            try {
                const response = await axios.get(`${this.baseURL}/resource/users`);
                this.users = response.data.data;
            }
            catch (error) {
                throw new Error("Could not get users data!");
            }
        },

        login(matchedUser) {
            this.isLoggedIn = true;
            sessionStorage.setItem('isLoggedIn', true);
            sessionStorage.setItem('token', 'thisisyoursecrettoken');
            sessionStorage.setItem('loggedInUser', matchedUser.name)
            this.loggedInUser = matchedUser.name;
        },

        logout() {
            this.isLoggedIn = false;
            sessionStorage.setItem('isLoggedIn', false);
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('loggedInUser');
            this.loggedInUser = null;
        },
    }
})