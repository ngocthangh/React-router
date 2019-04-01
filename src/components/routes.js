import React from 'react';
import Home from "./Home";
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';
import Products from './Products';
import Login from './Login';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home/>
    },{
        path: '/about',
        exact: false,
        main: () => <About/>
    },{
        path: '/contact',
        exact: false,
        main: () => <Contact/>
    },{
        path: '/products',
        exact: false,
        main: ({match, location}) => <Products match={match} location={location}/>
    },{
        path: '/login',
        exact: false,
        main: ({location}) => <Login location={location}/>
    },{
        path: '',
        exact: false,
        main: () => <NotFound/>
    }
];

export default routes;