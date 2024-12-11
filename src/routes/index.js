import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/home/Home';
import BuyMaterial from '../pages/buymaterial/BuyMaterial';
import Bnpl from '../pages/bnpl/Bnpl';
import About from '../pages/about/About';
import Dashboard from '../pages/dashboard/Dashboard';
import Allproducts from '../components/buymaterial/allproducts/Allproducts';
import MyCart from '../pages/mycart/MyCart';
import Auth from '../pages/auth/Auth';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "/BNPL",
        element: <Bnpl />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "mycart", 
        element: <MyCart />
      },
      {
        path: "auth", 
        element: <Auth />
      }
    ]
  },
  {
    path: "/buymaterial",  
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <Allproducts /> 
      },
     
    ]
  }
]);

export default router;
