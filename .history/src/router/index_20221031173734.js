import Vue from 'vue'
import VueRouter from 'vue-router'
import User from '../views/User.vue'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import Mall from '../views/Mall.vue'
import PageOne from '../views/PageOne.vue'
import PageTwo from '../views/PageTwo.vue'

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        component:Main,
        children:[
            {
                path:'/',
                component: Home
            },
            {
                path:'/user',
                component: User
            },
            {
                path:'/mall',
                component: Mall
            },
            {
                path:'/page1',
                component: PageOne
            },
            {
                path:'/page2',
                component: PageTwo
            }
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router