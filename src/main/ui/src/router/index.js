import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home'
import MapView from '@/views/MapView'

const routes = [
    {
        path: '/',
        name: "Home",
        component: Home
    }, 
    {
        path: '/map-view',
        name: "MapView", 
        component: MapView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router