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
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import { fallbackListings } from "../data/mockData";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: (
      <span className="loading loading-spinner loading-lg"></span>
    ),
    children: [
      {
        index: true,
        element: <Home></Home>,
      },

      {
        path: "/allpetsupplies",
        element: <AllPetsSupplies></AllPetsSupplies>,
        loader: async () => {
          try {
            const res = await fetch("https://paw-mart-server-neon.vercel.app/models");
            if (!res.ok) return fallbackListings;
            const data = await res.json();
            return Array.isArray(data) && data.length > 0 ? data : fallbackListings;
          } catch {
            return fallbackListings;
          }
        },
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
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
