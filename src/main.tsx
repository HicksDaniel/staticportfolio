import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { PrimeReactProvider } from "primereact/api";
import Tailwind from "primereact/passthrough/tailwind";
import { twMerge } from "tailwind-merge";
import { RouterProvider } from "react-router-dom";
import router from "./Routes";

import "./index.css";
import "primeicons/primeicons.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
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
      <RouterProvider router={router} />
    </PrimeReactProvider>
    ,
  </StrictMode>,
);
