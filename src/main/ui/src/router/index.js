import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: "Home",
        //component: [COMPONENT_NAME_HERE]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router