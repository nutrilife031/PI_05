import Vue from 'vue';
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Registre from './views/Registre.vue'
import Videos from './views/Videos.vue'
import VideoDois from './views/VideoDois.vue'
import Receita from './views/Receitas.vue'
import HomeOffice from './views/receitas/HomeOffice.vue'
import Sopa from './views/receitas/Sopa.vue'
import Calendar from './views/Calendar.vue'
Vue.use(Router)

export default new Router({

  

    mode: "history",


    routes: [{
            path: '/',
            name: 'home',
            component: Home
        }, {
            path: '/login',
            name: 'login',
            component: Login
        }, {
            path: '/registre',
            name: 'registre',
            component: Registre
        }, {
            path: '/videos',
            name: 'videos',
            component: Videos
        }, {
            path: '/videosdois',
            name: 'videosdois',
            component: VideoDois
        }, {
            path: '/dietas',
            name: 'dieta',
            component: Receita
        },
        {
            path: '/dietas/homeoffice',
            name: 'homeoffice',
            component: HomeOffice
        },
        {
            path: '/dietas/sopa',
            name: 'sopa',
            component: Sopa
        },

        {
            path: '/agendar',
            name: 'agendar',
            component: Calendar
        },


    ]
})