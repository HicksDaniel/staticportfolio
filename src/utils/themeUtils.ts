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
  const value = Math.round((brightness / 100) * 255);

  const backgroundColor = `rgb(${value},${value},${value})`;

  document.documentElement.style.setProperty(
    "--background-color",
    backgroundColor,
  );
};
