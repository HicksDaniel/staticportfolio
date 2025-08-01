import { createHashRouter } from "react-router-dom";
import HomePage from "./HomePage";
import GlobeContainer from "./components/GlobeContainer";
import Designs from "./components/Designs";
import Playground from "./components/Playground";
import App from "./App";

const router = createHashRouter(
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
  { basename: "/staticportfolio" },
);

export default router;
