import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage.tsx";
import WorldGlobe from "./components/WorldGlobe.tsx";

import Designs from "./components/Designs.tsx";
import Playground from "./components/Playground.tsx";
import App from "./App.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/theworld",
        element: <WorldGlobe />,
      },
      {
        path: "/design",
        element: <Designs />,
      },
      {
        path: "/playground",
        element: <Playground />,
      },
    ],
  },
]);

export default router;
