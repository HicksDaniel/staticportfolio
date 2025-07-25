import GridCard from "./components/GridCard";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Contact from "./components/Contact";
import LocalTime from "./components/LocalTime";
import Design from "./components/Design";
import WhatNow from "./components/WhatNow";
import Playgroung from "./components/Playgroung";
import Blog from "./components/Blog";
import Visited from "./components/Visited";
import Mobile from "./components/Mobile";
import ThemeSwap from "./components/ThemeSwap";
import Trademark from "./components/Trademark";

function HomePage() {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 z-50 flex h-screen w-screen items-center justify-center overflow-y-auto">
      <div className="relative m-auto grid w-full max-w-6xl gap-2 overflow-hidden p-2 text-white sm:gap-2 sm:p-4 md:grid-cols-2 md:gap-3 md:p-6 lg:h-screen lg:max-h-[800px] lg:grid-cols-4 lg:grid-rows-8 lg:gap-4">
        <GridCard cHeight={4} cWidth={3} comp={Introduction} />
        <GridCard cHeight={6} cWidth={1} comp={About} />
        <GridCard cHeight={4} cWidth={1} comp={Contact} />
        <GridCard cHeight={1} cWidth={1} comp={LocalTime} />
        <GridCard
          cHeight={1}
          cWidth={1}
          comp={Design}
          cursor="pointer"
          nav="/design"
        />
        <GridCard cHeight={2} cWidth={1} comp={WhatNow} />
        <GridCard
          cHeight={1}
          cWidth={1}
          comp={Playgroung}
          cursor="pointer"
          nav="/playground"
        />
        <GridCard cHeight={1} cWidth={1} comp={Blog} cursor="pointer" />
        <GridCard cHeight={1} cWidth={1} comp={Mobile} cursor="pointer" />
        <GridCard
          cHeight={1}
          cWidth={1}
          comp={Visited}
          cursor="pointer"
          nav="/theworld"
        />
        <GridCard cHeight={1} cWidth={1} comp={ThemeSwap} />
        <GridCard cHeight={1} cWidth={1} comp={Trademark} />
      </div>
    </div>
  );
}

export default HomePage;
