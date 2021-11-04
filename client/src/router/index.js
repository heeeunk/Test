import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CreateArticle from '../views/CreateArticle.vue'
import UpdateArticle from '../views/UpdateArticle.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    props: true,
  },
  {
    path: '/article',
    name: 'article',
    component: CreateArticle,
  },
  {
    path: '/article/edit',
    name: 'article-edit',
    component: UpdateArticle,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
