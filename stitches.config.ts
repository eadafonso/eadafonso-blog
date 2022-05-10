import { createStitches } from "@stitches/react";

export const { styled, getCssText, createTheme, globalCss } = createStitches({
  theme: {
    colors: {
      text: "black",
      background: "white",
    },
  },
});

export const darkTheme = createTheme({
  colors: {
    text: "white",
    background: "#111111",
  },
});

export const GlobalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  body: {
    background: "$background",
    color: "$text",
  },
});
//You can declare the styles here or in pages/_app.tsx
GlobalStyles();
