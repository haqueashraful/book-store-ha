import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/router.jsx";
import { Context } from "./Component/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </Context>
  </React.StrictMode>
);
