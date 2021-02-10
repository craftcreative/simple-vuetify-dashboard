import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
//

// import Login from '../views/LoginPage.vue'
import Home from '../views/HomeView.vue'
import PrivacyPolicy from '../views/PrivacyPolicyView.vue'
import TearmsOfService from '../views/TermsOfServiceView.vue'
import Faq from '../views/FaqView.vue'



Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", name: "home", component: Home, meta: { requiresAuth: false } },
    {
      path: "privacy-policy",
      name: "legal-privacy-policy",
      component:PrivacyPolicy,
      meta: { requiresAuth: false }
    },
    {
      path: "/terms-of-service",
      name: "legal-terms-of-service",
      component:TearmsOfService,
      meta: { requiresAuth: false }
    },
    {
      path: "/faq",
      name: "faq",
      component:Faq,
      meta: { requiresAuth: false }
    },
    {
      path: '*',
      name: 'route.notfound',
      component: Home
    }
  ]
})

// Watch route
router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(store.getters.isLoggedIn) {
      next();
      return;
    }
    next("/login")
  } else {
    next();
  }
})

export default router
