import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutMe from '../views/AboutMe.vue'
import CategoriesPage from '../views/CategoriesPage.vue'
import PhotosPage from '../views/PhotosPage.vue'
import PostPage from '../views/PostPage.vue'
import BlogDetails from '../views/BlogDetails.vue'
import ManagePage from '../views/ManagePage.vue'
import UploadPage from '../views/UploadPage.vue'
import LoginPage from '../views/LoginPage.vue'
import SelectOption from '../views/SelectOption.vue'
import UploadPhoto from '../views/UploadPhoto.vue'
import SearchPage from '../views/SearchPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: { name: 'zhuye' },
  },
  {
    path: '/home',
    name: 'zhuye',
    component: HomePage
  },
  {
    path: '/about',
    name: 'guanyuwo',
    component: AboutMe
  },
  {
    path: '/categories',
    name: 'fenlei',
    component: CategoriesPage
  },
  {
    path: '/photos',
    name: 'zhaopian',
    component: PhotosPage
  },
  {
    path: '/post',
    name: 'fabu',
    component: PostPage
  },
  {
    path: '/blog',
    name: 'boke',
    component: BlogDetails
  },
  {
    path: '/manage',
    name: 'guanli',
    component: ManagePage
  },
  {
    path: '/upload',
    name: 'shangchuan',
    component: UploadPage
  },
  {
    path: '/login',
    name: 'denglu',
    component: LoginPage
  },
  {
    path:'/select',
    name:'xuanze',
    component:SelectOption,
  },
  {
    path:'/uphotos',
    name:'shangchuanzhaopian',
    component:UploadPhoto,
  },
  {
    path:'/result',
    name:'jieguo',
    component:SearchPage,
  },
]

const router = new VueRouter({
  routes,
  mode:'history',
})

// 挂载路由导航守卫
// to 将要访问的路径
// from 代表从哪个路径跳转而来
// next 是个函数，表示放行 next() 放行  next('/login') 强制跳转

router.beforeEach((to, from, next) => {
  let token = window.sessionStorage.getItem('token');
  if (token != null) {
    if (to.path == '/login') {
      return next({ path: '/select' })
    }
    else {
      next()
    }
  }
  else {
    if (to.path == '/select') {
      return next({ path: '/login' })
    }
    else {
      next()
    }
  }

});


export default router
