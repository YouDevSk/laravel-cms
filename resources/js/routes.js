import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeComponent from './components/HomeComponent';
import GalleryComponent from './components/GalleryComponent';
import BlogComponent from './components/BlogComponent';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/admin',
      name: 'home',
      component: HomeComponent
    },
    {
      path: '/admin/gallery',
      name: 'gallery',
      component: GalleryComponent
    },
    {
      path: '/admin/blog',
      name: 'blog',
      component: BlogComponent
    }
  ]
})

export default router;