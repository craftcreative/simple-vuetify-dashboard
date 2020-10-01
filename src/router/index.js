import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

import Login from '../views/LoginPage.vue'
import Home from '../views/HomePage.vue'
import Artists from '../views/ArtistsPage.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/login", name: "login", component: Login },
    { path: "/", name: "home", component: Home, meta: { requiresAuth: true } },
    { path: "/artists", name: "artists", component: Artists, meta: { requiresAuth: true } }
    // { path: "/tools", name: "tools", component: /*ToolsPage */ }
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
