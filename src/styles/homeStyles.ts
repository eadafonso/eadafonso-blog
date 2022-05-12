import { styled } from "@stitches/react";

export const MainContainer = styled("main", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  marginTop: "2rem",
});

export const InfoContainer = styled("div", {
  paddingTop: "2rem",
  paddingBottom: "2rem",
  width: "55%",
});

export const Text = styled("p", {
  marginTop: 20,
  marginBottom: 15,
});

export const AvatarContainer = styled("div", {
  width: "45%",

  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
});

export const Avatar = styled("img", {
  width: "130px",
  height: "130px",
  borderRadius: 65,
});

export const List = styled("ul", {
  marginTop: "15px",
  listStyle: "initial",
  paddingLeft: 40,
});

export const ListItem = styled("li", {
  marginTop: "15px",
  marginBottom: "15px",
});

export const MainContent = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
});

export const CardContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  marginTop: 40,
});

export const Card = styled("div", {
  width: "250px",
  height: "230px",
  marginRight: 30,

  "&:last-child": {
    marginRight: 0,
  },
});

export const CardImage = styled("img", {
  width: "100%",
  height: "150px",
});

export const CardTitle = styled("h2", {
  fontSize: "1rem",
  marginTop: 15,
});

export const LinkContainer = styled("div", {
  display: "flex",
  alignItems: "center",

  svg: {
    marginLeft: 20,
  },
});

export const HeaderArticles = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "row",
});

export const NewsletterContainer = styled("div", {
  width: "100%",
  height: "250px",
  background: "#eff6ff",
  marginTop: 30,
  marginBottom: 30,
  border: "1px solid rgb(191 219 254)",
  borderRadius: 5,

  display: "flex",

  justifyContent: "center",
  flexDirection: "column",
  paddingLeft: 40,
  paddingRight: 40,

  h2: {
    marginBottom: 15,
  },

  p: {
    marginBottom: 10,
  },
});

export const InputContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  marginTop: 15,

  input: {
    width: "85%",
    height: "40px",
    background: "red",
    backgroundColor: "#fff",
    border: 0,
    borderRadius: 4,
    paddingLeft: 25,
  },

  button: {
    width: "15%",
    marginLeft: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#ddd",
    borderRadius: 5,

    fontWeight: "bold",
    fontSize: 14,
    cursor: "pointer",
    opacity: "0.8",

    "&:hover": {
      opacity: 1,
    },
  },
});

export const PlayContainer = styled("div", {
  width: "100%",

  div: {
    display: "flex",
    alignItems: "center",

    svg: {
      marginRight: 20,
    },
  },
});
