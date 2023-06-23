<template>
    <header class="bg-slate-600 text-center pt-4 pb-3 sticky top-0 w-full z-40">
        <div class="w-5/6 sm:w-2/3 flex justify-between items-center m-auto">
            <RouterLink :to="{name: 'home'}" exact-active-class>
                <h1 class="text-2xl sm:text-3xl text-slate-200 font-bold">Car Zone</h1>
                <h3 class="text-md mt-1 text-sky-300 font-semibold" :class="{'text-xl tracking-wide': $i18n.locale === 'gj'}">-{{ $t("header.tagline") }}</h3>
            </RouterLink>

            <div class="nav-list bg-slate-600" ref="navList">
                <div class="hamburger-menu" @click="showMenu">
                    <div class="line line-1"></div>
                    <div class="line line-2"></div>
                    <div class="line line-3"></div>
                </div>

                <div class="flex flex-col items-center lg:flex-row lg:gap-6 font-semibold text-slate-200 gap-1" :class="{'text-xl tracking-wide': $i18n.locale === 'gj'}">
                    <div class="flex text-base">
                        <img src="/internationalization.svg" alt="Language-switching" class="w-5">
                        <select v-model="$i18n.locale" class="bg-slate-600 rounded p-1 outline-none cursor-pointer">
                            <option value="en" selected>English</option>
                            <option value="gj">Gujarati</option>
                        </select>
                    </div>   
                    <h3 v-if="isLoggedIn" class="flex items-center gap-2 cursor-pointer text-base bg-slate-500 px-4 py-1 rounded-full"><img class="w-5 object-contain" src="/user.png"/>{{ loggedInUser }}</h3>
                    <RouterLink :to="{name: 'home'}" v-if="isLoggedIn" class="hover:text-white hover:underline" @click="handleBtnclick">{{ $t("header.home") }}</RouterLink>
                    <RouterLink :to="{name: 'users'}" v-if="isAdmin" class="hover:text-white hover:underline" @click="handleBtnclick">{{ $t("header.users") }}</RouterLink>
                    <RouterLink :to="{name: 'login'}" v-if="!isLoggedIn" class="hover:text-white hover:underline" @click="handleBtnclick">{{ $t("header.login") }}</RouterLink>
                    <RouterLink :to="{name: 'register'}" v-if="!isLoggedIn" class="hover:text-white hover:underline" @click="handleBtnclick">{{ $t("header.register") }}</RouterLink>
                    <RouterLink :to="{name: 'login'}" v-if="isLoggedIn" @click="handleLogout()" class="hover:text-white hover:underline">{{ $t("header.logout") }}</RouterLink>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth';
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia';

const testing = ref("test123");

const authStore = useAuthStore();
const { isLoggedIn, loggedInUser, isAdmin } = storeToRefs(authStore);

const navList = ref(null);
function showMenu() {
    navList.value.classList.toggle('change');
}

function handleBtnclick() {
    navList.value.classList.toggle('change');
}

function handleLogout() {
    authStore.logout();
    handleBtnclick();
}
</script>

<style scoped>
    .activated-link {
        color: #7DD3FC;
        text-decoration: underline;
    }

    @media screen and (max-width: 1024px) {
        .nav-list {
            width: 260px;
            height: 275px;
            position: fixed;
            top: 0;
            right: -275px;
            display: flex;
            flex-direction: column;
            padding-top: 85px;
            padding-left: 25px;
            align-items: center;
            text-align: left;
            border-radius: 0 0 0 75%;
            font-size: 1rem;
            transition: right 0.4s cubic-bezier(1, 0, 0, 1);
        }   
    
        .change {
            right: 0;
        }
        .hamburger-menu {
            display: flex;
            flex-direction: column;
            position: fixed;
            top: 25px;
            right: 50px;
            width: 35px;
            height: 35px;
            justify-content: space-around;
            cursor: pointer;
        }
    
        .line {
            width: 100%;
            height: 3px;
            border-radius: 2px;
            background-color: rgb(199, 199, 199);
            transition: all 0.4s;
        }
    
        .change .line-1 {
            transform: rotateZ(315deg) translate(-8px, 8px);   
        }
    
        .change .line-2 {
            opacity: 0;
        }
    
        .change .line-3 {
            transform: rotateZ(-315deg) translate(-8px, -9px);
        }
    }
</style>