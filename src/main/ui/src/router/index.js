import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home'
import SignaturesList from '@/views/SignaturesList'
import SignatureTransactions from '@/views/SignatureTransactions'
import OptionPage from '@/views/OptionPage'
import CreateDocument from '@/views/CreateDocument'

const routes = [
    {
        path: '/',
        name: "Home",
        component: Home
    }, 
    {
        path: '/medical-supplies',
        name: "MedicalSupplies",
        component: OptionPage
    },
    {
        path: '/surgical-supplies', 
        name: "SurgicalSupplies", 
        component: OptionPage
    },
    {
        path: '/create-doc',
        name: "CreateDocument",
        component: CreateDocument
    },
    {
        path: '/sigs-list',
        name: "SignaturesList",
        component: SignaturesList
    },
    {
        path: '/sig-txns',
        name: "SignatureTransactions", 
        component: SignatureTransactions
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router