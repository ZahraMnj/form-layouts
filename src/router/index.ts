import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    { path: '/', name: 'homePage', component: () => import('@/pages/index.vue')},
    { path: '/report',name: 'report', component: () => import('@/pages/report.vue') },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router