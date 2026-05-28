import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from '@/views/Dashboard'
import ServicePageDetail from '@/views/pages/ServicePageDetail'
import PromoPageDetail from '@/views/pages/PromoPageDetail'
import LegalDocumentPage from '@/views/pages/LegalDocumentPage'


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
        path: '/promo/',
        name: 'Promo',
        component: PromoPageDetail
    },
    {
        path: '/privacy-policy',
        name: 'Privacy Policy',
        component: LegalDocumentPage,
        meta: {
            title: 'Privacy Policy',
            documentPath: '/legal/privacy-policy.md',
            robots: 'noindex, nofollow',
            standaloneLayout: true
        }
    },
    {
        path: '/admin-app-privacy-policy',
        name: 'Admin App Privacy Policy',
        component: LegalDocumentPage,
        meta: {
            title: 'Admin App Privacy Policy',
            documentPath: '/legal/admin-app-privacy-policy.md',
            robots: 'noindex, nofollow',
            standaloneLayout: true
        }
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

router.afterEach((to) => {
    document.title = to.meta && to.meta.title
        ? `${to.meta.title} | BeAesthetic`
        : 'BeAesthetic';

    const ensureMeta = (name) => {
        let tag = document.head.querySelector(`meta[name="${name}"]`);
        if (!tag) {
            tag = document.createElement('meta');
            tag.setAttribute('name', name);
            document.head.appendChild(tag);
        }
        return tag;
    };

    const robots = ensureMeta('robots');
    robots.setAttribute('content', to.meta && to.meta.robots ? to.meta.robots : 'index, follow');
});

export default router
