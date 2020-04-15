import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    powderWhite: "#FFFDF9",
    persianGreen: "#06B49A",
    lightBlue: "#AFDBD2",
    onyx: "#36313D"
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  },
  borderRadius: "5px",
  boxShadow: "0 1px 3px 0 rgba(0,0,0,0.16),0 1px 5px 0 rgba(0,0,0,0.12)",
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;

