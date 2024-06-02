import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Products, {
  loader as productsLoader,
  action as updateAvailabilityAction,
} from "./pages/Products";
import NewProduct, { action as newProductAction } from "./pages/NewProduct";
import { action as deleteProductAction } from "./components/ProductDetail";
import EditProduct, {
  loader as editProductLoader,
  action as editProductAction,
} from "./pages/EditProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        element: <Products />,
        index: true,
        loader: productsLoader,
        action: updateAvailabilityAction,
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
        action: editProductAction,
      },
      {
        path: "productos/:id/eliminar", // ROA Pattern, Resource-oriented design
        action: deleteProductAction,
      },
    ],
  },
]);
