import styled from "@emotion/styled";
import { appear } from "utils/mixins";
import { COLORS } from "styles/colors";

export const Container = styled.div`
 background-color: ${COLORS.backgroundWhite};
 display: flex;
 flex-direction: column;
 overflow: hidden;
 border-radius: 24px;
 box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
  rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
 animation: ${appear} 0.4s ease-in;
 /* border: 1px solid red; */

 @media only screen and (max-width: 500px) {
  width: 90vw;
 }
`;

export const Header = styled.div`
 color: ${COLORS.primary};
 font-size: 2.4rem;
 font-weight: 700;
 text-align: center;
 margin-bottom: 20px;
 text-shadow: 3px 4px 7px rrgba(0, 0, 0, 0.8);
`;
