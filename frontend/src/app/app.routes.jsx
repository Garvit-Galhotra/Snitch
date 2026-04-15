import { createBrowserRouter } from "react-router";

import Register from "../feature/auth/pages/Register";
import Login from "../feature/auth/pages/Login";
import CreateProduct from "../feature/product/pages/CreateProducts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Hello world</h1>,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/seller/create-product",
    element: <CreateProduct />,
  },
]);
