import Vue from 'vue';
import Router from 'vue-router';
const index = resolve => require(['@/components/index/index'], resolve);
const indexcont = resolve => require(['@/components/content/index/index'], resolve);
const cases = resolve => require(['@/components/content/cases/cases'], resolve);
const userhome = resolve => require(['@/components/content/userhome/userhome'], resolve);
const sitelive = resolve => require(['@/components/content/sitelive/sitelive'], resolve);
Vue.use(Router);

const routesRes = [
  {
    path: '/',
    component: index,
    children: [
      {
        path: '/',
        component: indexcont
      },
      {
        path: '/sitelive',
        component: sitelive
      },
      {
        path: '/cases',
        component: cases
      }
    ]
  },
  {
    path: '/userhome',
    component: userhome
  }
];

const routers = new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: routesRes
});

export default routers;
