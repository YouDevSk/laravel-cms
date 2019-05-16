import './bootstrap'
import Vue from 'vue'
import Routes from './routes'


// Vue Components
import HomeComponent from './components/HomeComponent'
import GalleryComponent from './components/GalleryComponent'
import BlogComponent from './components/BlogComponent'
import SidebarComponent from './components/SidebarComponent'
import NavbarComponent from './components/NavbarComponent'

window.Vue = require('vue');

const app = new Vue({
    el: '#app',
    router: Routes,
    components: {
        NavbarComponent,
        SidebarComponent,
        HomeComponent,
        GalleryComponent,
        BlogComponent
    }
});
