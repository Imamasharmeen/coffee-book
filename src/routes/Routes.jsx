import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Dashboard from "../pages/Dashboard";
import Coffees from "../pages/Coffees";
import Home from "../pages/Home";
import CoffeeCard from "../component/CoffeeCard";

const route =createBrowserRouter ([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          path: "/",
          element: <Home></Home>,
          loader: ()=>fetch('../categories.json'),
          children:[
            {
              path: "/",
              element: <CoffeeCard></CoffeeCard>,
              loader: ()=> fetch('../coffees.json'),
            },
            {
              path: "/category/:category",
              element: <CoffeeCard></CoffeeCard>,
              loader: ()=> fetch('../coffees.json'),
            },
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