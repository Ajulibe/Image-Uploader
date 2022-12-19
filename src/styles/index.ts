import { css } from "@emotion/react";
import { COLORS } from "./colors";

export const GlobalStyles = css`
 html {
  font-size: 62.5%;
 }

 body {
  width: 100%;
  height: 100vh;
  min-height: 100%;
  font-family: "Inter", , BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
   "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
   sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${COLORS.background};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.4s ease-in;
 }

 a {
  text-decoration: none !important;
  transition: color 0.5s;
 }
`;

export default GlobalStyles;
