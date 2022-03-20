import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Shop from "../views/Shop.vue";
import Login from "../views/Login.vue";
import detail from "../components/detail.vue";
import signin from "../components/signin.vue";
import showShop from "../components/showShop.vue";
Vue.use(VueRouter);
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Shop",
    name: "Shop",
    component: Shop,
    children: [
      {
        path: "detail:id",
        name: "detail",
        component: detail,
      },
    ],
  },
  {
    path: '/showShop',
    name: 'showShop',
    component: showShop,
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signin',
    name: 'signin',
    component: signin,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
