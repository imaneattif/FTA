// routes.js
import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Dashboard from './components/Dashboard';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import NotFoundPage from './pages/NotFoundPage';

// You can define your routes as an array of objects
const routes = [
  {
    path: '/',
    exact: true,
    component: HomePage,
    name: 'Home'
  },
  {
    path: '/dashboard',
    component: Dashboard,
    name: 'Dashboard'
  },
  {
    path: '/login',
    component: Login,
    name: 'Login'
  },
  {
    path: '/register',
    component: Register,
    name: 'Register'
  },
  {
    // This is a catch-all route that will act as a 404 page
    component: NotFoundPage,
    name: 'NotFound'
  }
];

// A helper component to map routes to Route components
export const RenderRoutes = () => {
  return (
    routes.map((route, index) => {
      return <Route key={index} path={route.path} exact={route.exact} component={route.component} />;
    })
  );
};

export default routes;
