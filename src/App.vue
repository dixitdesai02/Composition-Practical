<template>
    <Navbar />

    <RouterView v-slot="{ Component }">
        <transition name="route" appear>
            <Component :is="Component"  />
        </transition>
    </RouterView>   

</template>

<script>
import { RouterView } from "vue-router";

    export default {
        name: "App",
        computed: {
            shouldApplyTransition() {
                return this.$route.name === 'login' || this.$route.name === 'register';
            }
        }
    }
</script>

<style scoped>
    .route-enter-from {
        opacity: 0;
        transform: scale(0.8);
    }

    .route-enter-to {
        opacity: 1;
        transform: scale(1);
    }

    .route-enter-active {
        transition: all 0.4s ease-in-out;
    }
</style>