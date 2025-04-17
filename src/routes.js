import React from 'react'
import { useRoutes } from "react-router-dom";
import LANDINGPAGE from './pages/landing';
import CONTACT from './pages/contact'
import PRODUCTS from './pages/products'
import FARMING from './pages/farming';
import ABOUTUS from './pages/aboutus'
import OURSERVICES from './pages/ourservices';

export default function Router() {
    const routes = useRoutes([
        {
            path: "/",
            element: <LANDINGPAGE />,
            index: true,
          },

          {
            path: "contact",
            element: <CONTACT />,
            index: true,
          },

          {
            path: "products",
            element: <PRODUCTS />, 
            index: true,
          },

          {
            path: "farming",
            element: <FARMING />,
            index: true,
          },

          {
            path: "aboutus",
            element: <ABOUTUS />,
            index: true,
          },

          {
            path: "ourservices",
            element: <OURSERVICES />,
            index: true,
          },


        
    ]);
    return routes;
}