import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import NotFound from "./components/NotFound.jsx";
import Home from "./pages/Home.jsx";
import CountryDetails from "./pages/CountryDetails.jsx";
import { ThemeContextProvider } from "./context/ThemeContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} errorElement={<NotFound />}>
      <Route errorElement={<NotFound />}>
        <Route path="/" element={<Home />} />
        <Route path="name/:countryName" element={<CountryDetails />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  </React.StrictMode>
);
