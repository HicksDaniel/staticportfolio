import ReactDOM from "react-dom/client";

import { PrimeReactProvider } from "primereact/api";
import Tailwind from "primereact/passthrough/tailwind";
import { twMerge } from "tailwind-merge";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import router from "./Routes";

import "./index.css";
import "primeicons/primeicons.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
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
  </PrimeReactProvider>,
);
