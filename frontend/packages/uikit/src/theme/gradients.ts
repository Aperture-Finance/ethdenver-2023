import { Gradients } from "./types";

export const baseGradients = {
  darkBlue: "linear-gradient(176.67deg, #010F41 0%, #161B7B 100%)",
  violet: "linear-gradient(176.67deg, #161B7B 0%, #903982 100%)",
  lightBlue: "linear-gradient(176.67deg, #424BCE 0%, #379FFF 100%)",
  bluePurple: "linear-gradient(176.7deg, #379FFF 0%, #903982 100%)",
  yellow: "linear-gradient(176.7deg, #FFCF01 0%, #FFAF29 100%)",
  yellowRed: "linear-gradient(176.67deg, #FFAF29 0%, #903982 100%)",
};

export const lightGradients: Gradients = {
  ...baseGradients,
};

export const darkGradients: Gradients = {
  ...baseGradients,
};
