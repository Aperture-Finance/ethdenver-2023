import { Colors } from "./types";

export const baseColors = {
  white: "#FFFFFF",
  black: "#000000",
  gray:"#f9f9f9",
  gray1:"#f1f1f1",
  gray2:"#e1e1e1",
  error:'red',
  primary:"red",
  primary2:"#FB5871",
  primary3:"#FAD494",
  primary4:"#FFE9C3",
  primary5:"#FFF9EE",
  bg1:'#202328',
  bg2:"#2B3137",
  bg3:"#494F55",
  white2:"#D1D4D8",
  yellow:"#FED32B",
  red: "#FB5871",
  background:'#F5F5F7',
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
