import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import LoginForm from './components/LoginForm.vue'
import UserSignUp from './components/UserSignup.vue'
import EventForm from './components/EventForm.vue'
import EventDetails from './components/EventDetails.vue'
import EditEvent from './components/EditEvent.vue'
import Dashboard from './components/Dashboard.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/loginpage',
      name: 'loginpage',
      component: LoginForm
    },
    {
      path: '/mainpage',
      name: 'mainpage',
      component: EventForm
    },
    {
      path: '/editpage',
      name: 'editpage',
      component: EditEvent
    },
    {
      path: '/signuppage',
      name: 'usersignup',
      component: UserSignUp
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/eventpage',
      name: 'eventpage',
      component: EventDetails
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import( /* webpackChunkName: "about" */ './views/About.vue')
    },
  ]
})
