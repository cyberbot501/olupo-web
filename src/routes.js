import React from 'react'
import { useRoutes } from "react-router-dom";
import LANDINGPAGE from './pages/landing';
import CONTACT from './pages/contact'

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


        
    ]);
    return routes;
}