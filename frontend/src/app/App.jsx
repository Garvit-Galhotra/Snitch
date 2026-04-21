import React from "react";
import { RouterProvider } from "react-router";

import "./App.css";
import { routes } from "./app.routes";
import { useAuth } from "../features/auth/hooks/useAuth";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const App = () => {
  const { handleGetMe } = useAuth();

  const user = useSelector((state) => state.auth.user);

  console.log(user);

  useEffect(() => {
    handleGetMe();
  }, []);

  return <RouterProvider router={routes} />;
};

export default App;
