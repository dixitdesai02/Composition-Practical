import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import('../views/Home.vue'),
        meta: {
            title: "Home | CarZone",
            requiresAuth: true
        }
    },
    {
        path: "/login",
        name: "login",
        component: () => import('../views/Login.vue'),
        meta: {
            title: "Login | CarZone",
            guest: true
        }
    },
    {
        path: "/register",
        name: "register",
        component: () => import('../views/Register.vue'),
        meta: {
            title: "Register | CarZone",
            guest: true
        }
    },
    {
        path: "/details/:id",
        name: "details",
        component: () => import('../views/CarDetails.vue'),
        meta: {
            title: "Car | CarZone",
            requiresAuth: true
        }
    },
    {
        path: '/:catchAll(.*)',
        name: 'notFound',
        component: () => import('../views/NotFound.vue'),
        meta: {
            title: "404 | CarZone"
        }
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    linkExactActiveClass: 'activated-link'
})

router.beforeEach((to, from, next) => {
    const isAutheticated = JSON.parse(sessionStorage.getItem('isLoggedIn')) && sessionStorage.getItem('token');

    if (to.meta.requiresAuth && !isAutheticated) {
        alert("Please login to continue..");
        next("/login");
    }
    else if (to.meta.guest && isAutheticated) {
        next("/");
    } 
    else {
        next();
    }
})

router.afterEach((to, from) => {
    document.title = to.meta.title || "Not Found";
})

export default router;