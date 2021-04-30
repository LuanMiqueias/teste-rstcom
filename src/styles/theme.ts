import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    title: "#303030",
    white: "#FAFAFA",
    button: "#071AC8",
  },
  font: {
    family: {
      default: "'Poppins', sans-serif",
    },
  },
} as const;
