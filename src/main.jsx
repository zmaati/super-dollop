import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import FilesPage from "../pages/FilesPage";
import ContactMe from "../pages/ContactPage";
import ErrorBoundary from "../pages/ErrorBoundary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/files",
    element: <FilesPage />,
  },
  {
    path: "/contact",
    element: <ContactMe />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
