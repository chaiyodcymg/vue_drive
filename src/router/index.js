import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


let path;

const routes = [
  {
    path: "/",
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



router.beforeEach(async (to, from, next) => {
  path = to.path;
  routes.push({ path: to.path, component: HomeView })
  console.log(routes);
  // await axios.get('http://localhost:3001' + to.path)
  //   .then((response) => {
  //     // this.data = response.data;
  //     console.log(response.data)
  //   })
  // console.log(to.path);
  // if (!to.params.auth) {
  // next('/login')
  // } else {

  // }
  next()
})
console.log(path)




export default router
