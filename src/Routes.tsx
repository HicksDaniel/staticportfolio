import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage.tsx";
import GlobeContainer from "./components/GlobeContainer.tsx";
import Designs from "./components/Designs.tsx";
import Playground from "./components/Playground.tsx";
import App from "./App.tsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "theworld",
          element: <GlobeContainer />,
        },

        {
          path: "design",
          element: <Designs />,
        },
        {
          path: "playground",
          element: <Playground />,
        },
      ],
    },
  ],
  {
    basename: "/staticportfolio",
  },
);

export default router;
