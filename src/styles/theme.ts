import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    title: "#303030",
    title_secondary: "#dbdbdb",
    white: "#FAFAFA",
    button: {
      default: "#2f85f5",
      hover: "#1d5caf",
      logout: "#d6423d",
      logout_hover: "#b32520",
    },
    nav: {
      link: "#F1F1F1",
      link_active: "#2f85f5",
    },
  },
  font: {
    family: {
      default: "'Poppins', sans-serif",
    },
  },
} as const;
