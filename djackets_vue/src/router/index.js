import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import CategoryView from '../views/CategoryView.vue'
import SearchView from '../views/SearchView.vue'
import CartView from '../views/CartView.vue'
import SignUpView from '../views/SignUpView.vue'
import LogInView from '../views/LoginView.vue'
import MyAccountView from '../views/MyAccountView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import SuccessView from '../views/SuccessView.vue'

import store from '../store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/sign-up',
    name:'SignUp',
    component: SignUpView
  },
  {
    path:'/log-in',
    name:'LogIn',
    component: LogInView
  },
  {
    path:'/cart/success',
    name:'Success',
    component: SuccessView
  },
  {
    path:'/my-account',
    name:'MyAccount',
    component: MyAccountView,
    meta:{
      requireLogin: true
    }
  },
  {
    path:'/:category_slug/:product_slug/',
    name:'Product',
    component: ProductView
  },
  {
    path:'/:category_slug/',
    name:'Category',
    component: CategoryView
  },
  {
    path:'/search',
    name:'Search',
    component: SearchView
  },
  {
    path:'/cart',
    name:'Cart',
    component: CartView
  },
  {
    path:'/cart/checkout',
    name:'Checkout',
    component: CheckoutView,
    meta:{
      requireLogin: true
    }
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next) => {
  if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
    next({ name: 'LogIn', query: { to: to.path } });
  } else {
    next()
  }
})

export default router
