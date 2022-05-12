import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from '@/views/Dashboard'
import ServicePageDetail from '@/views/pages/ServicePageDetail'
import PromoPageDetail from '@/views/pages/PromoPageDetail'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Dashboard
    },
    {
        path: '/services/:serviceName',
        name: 'Servizio',
        component: ServicePageDetail
    },
    {
        path: '/promos/',
        name: 'Promo',
        component: PromoPageDetail
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior (to) {
        return {
            selector: to.hash,
        };
      }
})

export default router