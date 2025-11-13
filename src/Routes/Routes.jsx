import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../components/Home/Home";
import AllPetsSupplies from "../Pages/AllPetsSupplies/AllPetsSupplies";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import AddListing from "../Pages/AddListing/AddListing";
import MyListings from "../Pages/MyListings/MyListings";
import MyOrders from "../Pages/MyOrders/MyOrders";
import PrivateRoute from "./PrivateRoute";
import CategorySection from "../Pages/Category/CategorySection";
import CategoryFilteredProduct from "../Pages/Category/CategoryFilteredProduct";
import ListingDetails from "../Pages/ListingDetails/ListingDetails";
import Profile from "../Pages/Profile/Profile";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    hydrateFallbackElement: <span className="loading loading-spinner loading-lg"></span>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },

      {
        path: "/allpetsupplies",
        element: <AllPetsSupplies></AllPetsSupplies>,
        loader: () => fetch("http://localhost:3000/models"),
      },
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/addlisting",
        element: (
          <PrivateRoute>
            <AddListing></AddListing>
          </PrivateRoute>
        ),
      },
      {
        path: "/mylistings",
        element: (
          <PrivateRoute>
          
            <MyListings></MyListings>
          </PrivateRoute>
        ),
      },
      {
        path: "listingdetails/:id",
        element: (
          <PrivateRoute>
            
            <ListingDetails></ListingDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/models/${params.id}`),
      },
      {
        path: "/myorders",
        element: (
          <PrivateRoute>
            <MyOrders></MyOrders>
          </PrivateRoute>
        ),
      },
      { path: "/", element: <CategorySection></CategorySection> },

      {
        path: "/category-filtered-product/:categoryName",
        element: <CategoryFilteredProduct></CategoryFilteredProduct>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
