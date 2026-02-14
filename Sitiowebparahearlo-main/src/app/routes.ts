import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Catalog from "./pages/Catalog";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/nosotros",
    Component: About,
  },
  {
    path: "/catalogo",
    Component: Catalog,
  },
  {
    path: "/producto/:id",
    Component: ProductDetail,
  },
  {
    path: "/carrito",
    Component: Cart,
  },
]);
