import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Product from "./pages/Product";
import Dashboard from "./pages/Dashboard";
import PurchaseHistory from "./pages/PurchaseHistory";
import NewProduct from "./pages/NewProduct";
import LandingPage from "./pages/LandingPage";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/products",
        element: <Product />,
      },
      {
        path: "/history",
        element: <PurchaseHistory />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/products/new",
        element: <NewProduct />,
      },
    ],
  },
]);

export default router;
