
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const colorPicker = (colors) => colors[randomIntegerFromInterval(0, colors.length)];
