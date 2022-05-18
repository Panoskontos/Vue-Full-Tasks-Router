import {createRouter, createWebHistory} from 'vue-router'

import HomeComponent from '../views/HomeComponent.vue'
import UsersComponent from '../views/UsersComponent.vue'
import SettingsComponent from '../views/SettingsComponent.vue'
import JobsComponent from '../views/jobs/JobsComponent'

const routes = [
    {
        path: '/',
        name:'HomeComponent',
        component: HomeComponent,
    },
    {
        path: '/users',
        name:'UsersComponent',
        component: UsersComponent,
    },
    {
        path: '/settings',
        name:'SettingsComponent',
        component: SettingsComponent,
    },
    {
        path: '/jobs',
        name:'JobsComponent',
        component: JobsComponent,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router

