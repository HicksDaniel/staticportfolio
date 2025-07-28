import GridCard from "./components/GridCard";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Contact from "./components/Contact";
import LocalTime from "./components/LocalTime";
import WhatNow from "./components/WhatNow";
import Visited from "./components/Visited";
import ThemeSwap from "./components/ThemeSwap";
import Trademark from "./components/Trademark";
import ProjectLink from "./components/ProjectLink";

function HomePage() {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 flex h-screen w-screen justify-center overflow-y-auto">
      <div className="relative grid w-full max-w-[1200px] gap-2 overflow-hidden p-2 sm:gap-2 sm:p-4 md:grid-cols-2 md:gap-3 md:p-6 lg:h-screen lg:max-h-[900px] lg:grid-cols-4 lg:grid-rows-8 lg:gap-4">
        <GridCard index={1} cHeight={4} cWidth={3} comp={Introduction} />
        <GridCard index={2} cHeight={6} cWidth={1} comp={About} />
        <GridCard index={3} cHeight={4} cWidth={1} comp={Contact} />
        <GridCard index={4} cHeight={1} cWidth={1} comp={LocalTime} />
        <GridCard
          index={5}
          cHeight={1}
          cWidth={1}
          comp={ProjectLink}
          label="Designs"
          cursor="pointer"
          nav="/design"
        />
        <GridCard index={6} cHeight={2} cWidth={1} comp={WhatNow} />
        <GridCard
          index={7}
          cHeight={1}
          cWidth={1}
          comp={ProjectLink}
          cursor="pointer"
          label="Playground"
          nav="/playground"
        />
        <GridCard
          index={8}
          cHeight={1}
          cWidth={1}
          comp={ProjectLink}
          cursor="pointer"
          label="Crytro Currency - Project"
          url="https://hicksdaniel.github.io/crypto2/"
        />
        <GridCard
          index={9}
          cHeight={1}
          cWidth={1}
          comp={ProjectLink}
          cursor="pointer"
          label="My Workspace - Project"
          url="https://codepen.io/Daniel-Hicks-the-solid/project/live/AyKGbK"
        />
        <GridCard
          index={10}
          cHeight={1}
          cWidth={1}
          comp={Visited}
          label="See Where I've Been"
          cursor="pointer"
          nav="/theworld"
        />
        <GridCard index={11} cHeight={1} cWidth={1} comp={ThemeSwap} />
        <GridCard
          index={12}
          cHeight={1}
          cWidth={1}
          comp={Trademark}
          label="Trademark"
        />
      </div>
    </div>
  );
}

export default HomePage;
