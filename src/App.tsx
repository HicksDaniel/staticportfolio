import React, { useState } from "react";
import GridCard from "./components/GridCard";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

function App() {
  const [value, setValue] = useState("");
  return (
    <div className="loader bg-darkslate-700 fixed top-0 right-0 bottom-0 left-0 z-50 flex h-screen w-screen items-center justify-center text-3xl font-black text-neutral-50 uppercase">
      <div className="relative m-auto grid w-full max-w-6xl gap-2 overflow-hidden p-2 text-white sm:gap-2 sm:p-4 md:grid-cols-2 md:gap-3 md:p-6 lg:h-screen lg:max-h-[800px] lg:grid-cols-4 lg:grid-rows-8 lg:gap-4">
        <div className="lg:col-span-3 lg:row-span-4 lg:overflow-x-hidden lg:overflow-y-auto">
          <p className="text-xl font-bold">Main</p>
        </div>
        <GridCard cardHeight="6" cardWidth="1">
          <p className="text-xl font-bold">Right-Tall</p>
        </GridCard>
        <div className="bg-[red] lg:col-span-1 lg:row-span-4 lg:overflow-x-hidden lg:overflow-y-auto">
          <p className="text-xl font-bold">Bottom-Left</p>
        </div>
        <div className="lg:col-span-1 lg:row-span-1 lg:overflow-x-hidden lg:overflow-y-auto">
          <p className="text-xl font-bold">asdf</p>
        </div>
        <div className="lg:col-span-1 lg:row-span-1 lg:overflow-x-hidden lg:overflow-y-auto">
          <p className="text-xl font-bold">Hello World</p>
        </div>
        <div className="lg:col-span-1 lg:row-span-2 lg:overflow-x-hidden lg:overflow-y-auto">
          <p className="text-xl font-bold">asdf</p>
        </div>
        <div className="lg:col-span-1 lg:row-span-1 lg:overflow-x-hidden lg:overflow-y-auto">
          <p className="text-xl font-bold">Hello World</p>
        </div>

        <div className="lg:col-span-1 lg:row-span-1 lg:overflow-x-hidden lg:overflow-y-auto">
          <p className="text-xl font-bold">Hello World</p>
        </div>
        <div className="lg:col-span-1 lg:row-span-1 lg:overflow-x-hidden lg:overflow-y-auto">
          <p className="text-xl font-bold">Hello World</p>
        </div>
        <div className="lg:col-span-1 lg:row-span-1 lg:overflow-x-hidden lg:overflow-y-auto">
          <p className="text-xl font-bold">Countries Visited</p>
        </div>
        <div className="align-center flex lg:col-span-1 lg:row-span-1 lg:overflow-x-hidden lg:overflow-y-auto">
          <p className="m-auto text-xl font-bold">PUT OUR COLORS HERE</p>
        </div>
        <div className="align-center flex lg:col-span-1 lg:row-span-1 lg:overflow-x-hidden lg:overflow-y-auto">
          <p className="m-auto text-sm font-bold">@2025</p>
        </div>
      </div>
    </div>
  );
}

export default App;
// <div className="loader bg-darkslate-700 fixed top-0 right-0 bottom-0 left-0 z-50 flex h-screen w-screen items-center justify-center text-3xl font-black text-neutral-50 uppercase">
//   <div className="relative m-auto grid w-full max-w-6xl gap-2 overflow-hidden p-2 text-white sm:gap-2 sm:p-4 md:grid-cols-2 md:gap-3 md:p-6 lg:h-screen lg:max-h-[800px] lg:grid-cols-4 lg:grid-rows-8 lg:gap-4">
//     <div className="lg:col-span-3 lg:row-span-4 lg:overflow-x-hidden lg:overflow-y-auto">
//       <p className="text-xl font-bold">Main</p>
//     </div>
//     <GridCard cardHeight="6" cardWidth="1">
//       <p className="text-xl font-bold">Right-Tall</p>
//     </GridCard>
//     <div className="lg:col-span-1 lg:row-span-4 lg:overflow-x-hidden lg:overflow-y-auto">
//       <p className="text-xl font-bold">Bottom-Left</p>
//     </div>
//     <div className="lg:col-span-1 lg:row-span-1 lg:overflow-x-hidden lg:overflow-y-auto">
//       <p className="text-xl font-bold">asdf</p>
//     </div>
//     <div className="lg:col-span-1 lg:row-span-1 lg:overflow-x-hidden lg:overflow-y-auto">
//       <p className="text-xl font-bold">Hello World</p>
//     </div>
//     <div className="lg:col-span-1 lg:row-span-2 lg:overflow-x-hidden lg:overflow-y-auto">
//       <p className="text-xl font-bold">asdf</p>
//     </div>
//     <div className="lg:col-span-1 lg:row-span-1 lg:overflow-x-hidden lg:overflow-y-auto">
//       <p className="text-xl font-bold">Hello World</p>
//     </div>

//     <div className="lg:col-span-1 lg:row-span-1 lg:overflow-x-hidden lg:overflow-y-auto">
//       <p className="text-xl font-bold">Hello World</p>
//     </div>
//     <div className="lg:col-span-1 lg:row-span-1 lg:overflow-x-hidden lg:overflow-y-auto">
//       <p className="text-xl font-bold">Hello World</p>
//     </div>
//     <div className="lg:col-span-1 lg:row-span-1 lg:overflow-x-hidden lg:overflow-y-auto">
//       <p className="text-xl font-bold">Countries Visited</p>
//     </div>
//     <div className="align-center flex lg:col-span-1 lg:row-span-1 lg:overflow-x-hidden lg:overflow-y-auto">
//       <p className="m-auto text-xl font-bold">PUT OUR COLORS HERE</p>
//     </div>
//     <div className="align-center flex lg:col-span-1 lg:row-span-1 lg:overflow-x-hidden lg:overflow-y-auto">
//       <p className="m-auto text-sm font-bold">@2025</p>
//     </div>
//   </div>
// </div>
