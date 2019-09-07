import { lazy } from 'react';
const Home = lazy(() => import('../pages/Home/Home.jsx'));
const List = lazy(() => import('../pages/List/List.jsx'));
const Login = lazy(() => import('../pages/Login/Login.jsx'));


const routes = [
  {
    path: '/Home',
    name: '首页',
    exact: false,
    strict: false,
    component: Home
  },
  {
    path: '/List',
    name: '列表',
    exact: false,
    strict: false,
    authorization: true,
    component: List
  },
  {
    path: '/Login',
    name: '登录',
    exact: false,
    strict: false,
    component: Login
  },
]


export default routes

