export const selectColor = (
  index: number,
  colorPalette: Array<{ name: string; primary: string; highlight: string }>,
) => {
  const selectedColor = colorPalette[index];

  const root = document.documentElement;
  root.style.setProperty("--color-primary", selectedColor.primary);
  root.style.setProperty("--color-primary-highlight", selectedColor.highlight);
};

export const handleBrightnessChange = (brightness: number) => {
  const hexValue = Math.round((brightness / 100) * 255)
    .toString(16)
    .padStart(2, "0");
  const backgroundColor = `#${hexValue}${hexValue}${hexValue}`;

  document.documentElement.style.setProperty(
    "--background-color",
    backgroundColor,
  );
};
