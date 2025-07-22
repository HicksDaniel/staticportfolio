import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { PrimeReactProvider } from "primereact/api";
import Tailwind from "primereact/passthrough/tailwind";
import { twMerge } from "tailwind-merge";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <PrimeReactProvider
      value={{
        unstyled: true,
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
  </React.StrictMode>,
);
