import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Dashboard from "../pages/Dashboard";
import Coffees from "../pages/Coffees";
import Home from "../pages/Home";

const route =createBrowserRouter ([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          path: "/",
          element: <Home></Home>,
          children:[
            
          ]
        },
        {
          path: "/coffees",
          element: <Coffees></Coffees>,
        },
        {
          path: "/dashboard",
          element: <Dashboard></Dashboard>,
        },

      ]
    },
  ]);
  export {route}