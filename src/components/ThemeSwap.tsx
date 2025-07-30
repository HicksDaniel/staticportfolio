import React, { useState, useEffect } from "react";
import { selectColor, handleBrightnessChange } from "../libs/utils/themeUtils";
import { colorPalette } from "../libs/colorpalette";

export default function ThemeSwap() {
  const [activeColorIndex, setActiveColorIndex] = useState(0);
  const [backgroundBrightness, setBackgroundBrightness] = useState(10);

  useEffect(() => {
    // I dont' really want to use a useEffect here. But since i'm altering the DOM directly, I don't see a way around it, without restructuing.
    selectColor(activeColorIndex, colorPalette);
    handleBrightnessChange(backgroundBrightness);
  }, []);

  const handleColorSelect = (index: number) => {
    selectColor(index, colorPalette);
    setActiveColorIndex(index);
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const brightness = parseInt(e.target.value);
    console.log(brightness);
    handleBrightnessChange(brightness);
    setBackgroundBrightness(brightness);
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-2">
      <div className="flex gap-1">
        {colorPalette.map((color, index) => (
          <button
            key={color.name}
            onClick={() => handleColorSelect(index)}
            className={`h-6 w-6 cursor-pointer rounded-full border-2 transition-all hover:scale-110 ${
              activeColorIndex === index
                ? "border-white"
                : "border-1 border-gray-400"
            }`}
            style={{ backgroundColor: color.primary }}
            title={`Switch to ${color.name}`}
          />
        ))}
      </div>
      <div className="flex items-center gap-2">
        <i className="pi pi-moon text-sm" />
        <input
          type="range"
          min="0"
          max="100"
          value={backgroundBrightness}
          onChange={handleSliderChange}
          className="accent-primary"
          style={{
            width: `${colorPalette.length * 20 + (colorPalette.length - 2) * 4}px`,
          }}
        />
        <i className="pi pi-sun text-sm" />
      </div>
    </div>
  );
}
