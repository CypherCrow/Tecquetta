import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home'
import SignatureTransactions from '@/views/SignatureTransactions'
import MedicalSupplies from '@/views/MedicalSupplies'
import SurgicalSupplies from '@/views/SurgicalSupplies'
import CreateDocument from '@/views/CreateDocument'
import CreateSite from '@/views/CreateSite'

const routes = [
    {
        path: '/',
        name: "Home",
        component: Home
    }, 
    {
        path: '/med-supplies',
        name: "MedicalSupplies",
        component: MedicalSupplies
    },
    {
        path: '/surg-supplies', 
        name: "SurgicalSupplies", 
        component: SurgicalSupplies
    },
    {
        path: '/create-doc',
        name: "CreateDocument",
        component: CreateDocument
    },
    {
        path: '/sig-txns',
        name: "SignatureTransactions", 
        component: SignatureTransactions
    },
    {
        path: '/create-site',
        name: "CreateSite",
        component: CreateSite
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router