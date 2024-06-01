import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Products, { loader as productsLoader } from "./pages/Products";
import NewProduct, { action as newProductAction } from "./pages/NewProduct";
import EditProduct, { loader as editProductLoader } from "./pages/EditProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        element: <Products />,
        index: true,
        loader: productsLoader,
      },
      {
        path: "/productos/nuevo",
        element: <NewProduct />,
        action: newProductAction,
      },
      {
        path: "productos/:id/editar", // ROA Pattern, Resource-oriented design
        element: <EditProduct />,
        loader: editProductLoader,
      },
    ],
  },
]);
