import GridCard from "./components/GridCard";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Contact from "./components/Contact";
import LocalTime from "./components/LocalTime";
import WhatNow from "./components/WhatNow";
import ThemeSwap from "./components/ThemeSwap";
import Trademark from "./components/Trademark";
import ProjectLink from "./components/ProjectLink";

function HomePage() {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 mb-3 flex justify-center overflow-y-auto [scrollbar-width:none]">
      <div
        className={`relative my-4 grid w-full max-w-[1200px] min-w-0 grid-cols-1 gap-2 p-2 text-white sm:gap-2 sm:p-4 md:grid-cols-3 md:gap-2 md:p-1 lg:h-screen lg:max-h-[800px] lg:grid-cols-4 lg:grid-rows-8 lg:gap-4`}
      >
        <GridCard
          index={1}
          lgHeight={4}
          lgWidth={3}
          mdHeight={4}
          mdWidth={3}
          comp={Introduction}
        />
        <GridCard
          index={2}
          lgHeight={6}
          lgWidth={1}
          mdHeight={6}
          mdWidth={1}
          comp={About}
        />
        <GridCard
          index={3}
          lgHeight={4}
          lgWidth={1}
          mdHeight={1}
          mdWidth={1}
          comp={Contact}
        />
        <GridCard
          index={5}
          lgHeight={1}
          lgWidth={1}
          mdHeight={1}
          mdWidth={1}
          comp={ProjectLink}
          label="Designs"
          cursor="pointer"
          nav="design"
        />
        <GridCard
          index={4}
          lgHeight={1}
          lgWidth={1}
          mdHeight={1}
          mdWidth={1}
          comp={LocalTime}
        />
        <GridCard
          index={7}
          lgHeight={1}
          lgWidth={1}
          mdHeight={1}
          mdWidth={1}
          comp={ProjectLink}
          cursor="pointer"
          label="Playground"
          nav="playground"
        />
        <GridCard
          index={6}
          lgHeight={2}
          lgWidth={1}
          mdHeight={1}
          mdWidth={1}
          comp={WhatNow}
          label="What am I Working On?"
        />
        <GridCard
          index={9}
          lgHeight={1}
          lgWidth={1}
          mdHeight={1}
          mdWidth={1}
          comp={ProjectLink}
          cursor="pointer"
          label="My Workspace - Project"
          url="https://codepen.io/Daniel-Hicks-the-solid/project/live/AyKGbK"
        />
        <GridCard
          index={10}
          lgHeight={1}
          lgWidth={1}
          mdHeight={1}
          mdWidth={1}
          comp={ProjectLink}
          label="See Where I've Been"
          cursor="pointer"
          nav="theworld"
        />
        <GridCard
          index={8}
          lgHeight={1}
          lgWidth={1}
          mdHeight={1}
          mdWidth={1}
          comp={ProjectLink}
          cursor="pointer"
          label="Crytro Currency - Project"
          url="https://hicksdaniel.github.io/crypto2/"
        />

        <GridCard
          index={11}
          lgHeight={1}
          lgWidth={1}
          mdHeight={1}
          mdWidth={1}
          comp={ThemeSwap}
        />
        <GridCard
          index={12}
          lgHeight={1}
          lgWidth={1}
          mdHeight={1}
          mdWidth={1}
          comp={Trademark}
          label="What do I put in the last spot?"
        />
      </div>
    </div>
  );
}

export default HomePage;
