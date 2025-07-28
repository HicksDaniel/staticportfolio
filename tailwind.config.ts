import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/primereact/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "animate-fade-in-up",
    "animate-test-pulse",
    "lg:row-span-1",
    "lg:row-span-2",
    "lg:row-span-3",
    "lg:row-span-4",
    "lg:row-span-5",
    "lg:row-span-6",
    "lg:row-span-7",
    "lg:row-span-8",
    "lg:col-span-1",
    "lg:col-span-2",
    "lg:col-span-3",
    "lg:col-span-4",
  ],
};

export default config;
