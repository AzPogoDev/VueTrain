import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Data from '@/views/Data.vue';

const routes = [

    {
        name: 'Home',
        path: '/',
        component: Home,
    },
    {
        name: 'Data',
        path: '/data',
        component: Data,
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;