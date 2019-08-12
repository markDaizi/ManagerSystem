import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Manager from './views/Manager.vue'
import Login from './views/Login.vue'
import OrderManager from './components/OrderManager'
import NewOrder from './components/NewOrder'
import PayMoney from './components/PayMoney'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Manager',
            redirect: '/Manager'
        },
        {
            path: '/',
            name: 'Manager',
            component: Manager,
            children:[
                {
                    path: '/Manager/',
                    redirect: '/Manager/Home'
                },
                {
                    path: '/Manager/Home',
                    name: 'Home',
                    component: Home
                },
                {
                    path: '/Manager/OrderManager',
                    name: 'OrderManager',
                    component: OrderManager
                },
                {
                    path: '/Manager/NewOrder',
                    name: 'NewOrder',
                    component: NewOrder
                },
                {
                    path: '/Manager/PayMoney',
                    name: 'PayMoney',
                    component: PayMoney
                }
            ]
        },
        {
            path: '/Login',
            name: 'Login',
            component: Login
        }
    ]
})
