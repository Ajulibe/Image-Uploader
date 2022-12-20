import { css } from "@emotion/react";
import { COLORS } from "./colors";
import { flexmiddle } from "utils/mixins";

export const GlobalStyles = css`
 html {
  font-size: 62.5%;
 }

 body {
  margin: 0;
  width: 100vw;
  height: 100vh;
  font-family: "Inter", , BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
   "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
   sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${COLORS.background};
  ${flexmiddle}
  transition: all 0.2s ease-in;
  box-sizing: border-box;
 }

 a {
  text-decoration: none !important;
  transition: color 0.5s;
 }
`;

export default GlobalStyles;
