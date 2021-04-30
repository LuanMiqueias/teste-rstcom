import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    title: "#303030",
    white: "#FAFAFA",
    button: {
      default: "#071AC8",
      hover: "#000e8f",
    },
  },
  font: {
    family: {
      default: "'Poppins', sans-serif",
    },
  },
} as const;
