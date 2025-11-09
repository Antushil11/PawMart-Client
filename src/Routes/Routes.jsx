import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../components/Home/Home";
import AllPetsSupplies from "../Pages/AllPetsSupplies/AllPetsSupplies";



export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
        {
            index: true,
            element:<Home></Home>

        },

        {
            path:"/allpetsupplies",
            element:<AllPetsSupplies></AllPetsSupplies>

        }
    ]
  },
]);