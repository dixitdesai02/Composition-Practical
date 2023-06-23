import { setActivePinia, createPinia } from "pinia";
import { describe, beforeEach, test, expect } from "vitest";
import { useAuthStore } from "@/stores/auth.js";

describe("Stores", () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    test("Authenticates User", () => {
        const authStore = useAuthStore();

        expect(authStore.isLoggedIn).toBe(null);

        const user = {
            name: "Dixit",
            role: "admin"
        }

        authStore.login(user);

        expect(authStore.isLoggedIn).toBe(true);
        expect(authStore.loggedInUser).toBe(user.name);
        expect(authStore.isAdmin).toBe(true);
    })
})