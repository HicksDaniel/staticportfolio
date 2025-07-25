import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage.tsx";
import WorldGlobe from "./components/WorldGlobe.tsx";
import Layout from "./Layout.tsx";
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
    ],
  },
]);

export default router;
