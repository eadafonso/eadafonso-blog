import { css, styled } from "@stitches/react";
import { redirect } from "next/dist/server/api-utils";

export const Container = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "5rem",
  background: "$background",
  color: "$text",
});

export const Logo = styled("a", {
  fontSize: "1.5rem",
  fontFamily: "Poppins",
  fontWeight: 600,
});

export const LinkContainer = styled("nav", {
  display: "flex",
  alignItems: "center",
  flexDirection: "row",

  "& + a": {
    marginLeft: "1rem",
  },
});

export const Link = styled("a", {
  marginLeft: "1.5rem",
  opacity: "0.8",
  color: "#555",
  fontWeight: 500,

  "&:hover": {
    color: "#111",
    opacity: "1",
  },

  "&:active": {
    color: "#111",
  },
});

export const ButtonTheme = styled("button", {
  width: "38px",
  height: "35px",
  marginLeft: "1.8rem",
  border: 0,
  borderRadius: 4,
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  opacity: "0.8",
  background: "#ddd",

  "&:hover": {
    opacity: 1,
  },
});
