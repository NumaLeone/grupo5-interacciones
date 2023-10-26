import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DesignSystem from "./pages/DesignSystem";

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
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
