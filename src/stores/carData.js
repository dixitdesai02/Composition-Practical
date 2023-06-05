import axios from "axios";
import { defineStore } from "pinia";

export const useCarData = defineStore('carData', {
    state: () => {
        return {
            cars: [],
            baseURL: import.meta.env.VITE_CARS_API_BASEURL
        }
    },

    getters: {
        carDetailsById: (state) => (id) => {
            return state.cars.find((car) => car.id == id)
        } 
    },

    actions: {
        async fetchCars() {
            try {
                const response = await axios.get(`${this.baseURL}`);
                this.cars = response.data.data;
            }
            catch(error) {
                alert("Error! Could not fetch Cars Data!");
            }
        },

        async addCar(carData) {
            try {
                await axios.post(`${this.baseURL}`, carData);
                await this.fetchCars();
            }
            catch (error) {
                alert("Error! Car could not be Added!");
            }
        },

        async editCar(id, carData) {
            try {
                await axios.put(`${this.baseURL}/${id}`, carData);
                await this.fetchCars();
            }
            catch(error) {
                alert("Error! Car Could not be Updated!");
            }
        },

        async deleteCar(id) {
            try {
                await axios.delete(`${this.baseURL}/${id}`);
                await this.fetchCars();
            }
            catch(error) {
                throw new Error('Error! Car could not be Deleted!'); 
            }
        }
    }
})