import { Colors } from "./types";

export const baseColors = {
  dark: "#666D85",
  darkBlue: "#161B7B",
  blue: "#424BCE",
  lightBlue: "#379FFF",
  yellow: "#FFCF01",
  orange: "#FFAF29",
  purple: "#903982",
  white: "#FFFFFF",
  black: "#000000"
};

export const lightColors: Colors = {
  ...baseColors,

  textAlt: "#FFFFFF",
  textDisabled: "#6D6978",
  success: "#1A9A64",

  unselected: '#807994',
  backgroundSwitch: '#F5F5F5',
  buttonOutline: '#7E51FD',

  crab: "#8571FF",
  bull: "#35B47F",
  available: "#C7DFD5",
  full: "rgba(17, 13, 24, 0.15)",
  new: "linear-gradient(50.13deg, #8627FF 14.11%, #8094FF 85.68%)",
};

export const darkColors: Colors = {
  ...baseColors,

  textAlt: "#000000",
  textDisabled: "#7E8D97",
  success: "#11FFA9",

  unselected: '#807994',
  backgroundSwitch: 'rgba(13, 23, 24, 0.55)',
  buttonOutline:
  'linear-gradient(259.88deg, #0ef7f8 0%, #95c0ff 50.25%, #ad60ff 100%)',
  
  crab: "#85DAE5",
  bull: "#A7B0FF",
  available: "#4E6667",
  full: "rgba(105, 131, 142, 0.35)",
  new: "linear-gradient(270deg, #11FFA9 7.14%, #11FFFF 98.57%)",
};
