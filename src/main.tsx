import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { PrimeReactProvider } from "primereact/api";
import Tailwind from "primereact/passthrough/tailwind";
import { twMerge } from "tailwind-merge";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

import "./index.css";
import "primeicons/primeicons.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <PrimeReactProvider
        value={{
          pt: Tailwind,
          ptOptions: {
            mergeSections: true,
            mergeProps: true,
            classNameMergeFunction: twMerge,
          },
        }}
      >
        <App />
      </PrimeReactProvider>
    </RouterProvider>
  </React.StrictMode>,
);
