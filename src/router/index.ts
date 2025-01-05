import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/Home.vue')
        },

        {
            path: '/services',
            name: 'services',
            component: () => import('@/views/Services.vue')
        },
        {
            path: '/products',
            name: 'products',
            component: () => import('@/views/Products.vue')
        },
        {
            path: '/about-us',
            name: 'about-us',
            component: () => import('@/views/AboutUs.vue')
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('@/views/Contact.vue')
        },
    ],
})

export default router
