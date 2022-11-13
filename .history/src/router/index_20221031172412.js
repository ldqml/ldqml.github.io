import Vue from 'vue'
import VueRouter from 'vue-router'
import User from '../views/User.vue'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import Mail from '../views/Mail.vue'

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        component:Main,
        children:[
            {
                path:'/home',
                component: Home
            },
            {
                path:'/user',
                component: User
            },
            {
                path:'/mall',
                component: Mail
            }
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router