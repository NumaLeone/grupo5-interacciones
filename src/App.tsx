import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DesignSystem from "./pages/DesignSystem";
import IngredientsPage from "./pages/IngredientsPage";
import CartItems from "./pages/CartItems";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
      path: "/design",
      element: <DesignSystem />,
    },
    {
      path: "/ingredients-page",
      element: <IngredientsPage />,
    },
    { path: "/cartItems", element: <CartItems /> },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
