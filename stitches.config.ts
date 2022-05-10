import { createStitches } from "@stitches/react";

export const { styled, getCssText, createTheme, globalCss } = createStitches({
  theme: {
    colors: {
      text: "#111111",
      background: "#f6f6f6",
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
    fontFamily: "DM Sans",
    maxWidth: "1000px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 0,
    marginBottom: 0,
  },

  ul: {
    listStyle: "none",
  },

  a: {
    textDecoration: "none",
    color: "inherit",
  },

  list: {
    background: "red",
  },
});

//You can declare the styles here or in pages/_app.tsx
GlobalStyles();
