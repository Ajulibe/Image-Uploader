import styled from "@emotion/styled";
import { COLORS } from "styles/colors";
import { flexmiddle, appear } from "utils/mixins";

interface IProps {
 url: string;
}

export const Container = styled.div`
 position: "relative";
 width: "100vw";
 height: "100vh";
 ${flexmiddle}
`;

export const ContainerSection = styled.div<IProps>`
 min-width: ${({ url }) => url && "80vw"};
 ${flexmiddle}
 position: relative;
 max-height: 100vh;
 background: ${({ url }) => url && `${COLORS.backgroundWhite}`};

 .image__wrapper {
  animation: ${appear} 0.8s ease-in;
 }

 .button__container {
  position: absolute;
  z-index: 5;
  align-self: end;
  bottom: 5vh;

  .download__button {
   background-color: ${COLORS.primary};
   color: ${COLORS.white};
   box-shadow: 0px 1px 25px -5px rgb(66 153 225 / 48%),
    0 10px 10px -5px rgb(66 153 225 / 13%);
  }

  .new__button {
   color: ${COLORS.primary};
   background: ${COLORS.white};
  }

  button {
   padding: 14px 40px;
   border-radius: 40px;
   font-weight: bold;
   font-size: 16px;
   margin: 0 10px;
   filter: drop-shadow(4px 4px 48px rgba(0, 0, 0, 0.18));
  }
 }
`;

export const Section = styled.div`
 height: 100%;
 font-weight: 400;
 font-size: 16px;
 color: ${COLORS.lightblue};
 width: 100%;
 padding: 40px;
 ${flexmiddle}
 text-align: center;
 overflow: scroll;
 transition: all 1s ease-in;
`;

export const ImageDetails = styled.div`
 position: absolute;
 top: 40px;
 left: 0;
 z-index: 5;
 background-color: ${COLORS.white};
 transition: all 1s ease-in;
 font-size: 16px;
 border-radius: 18px;
 padding: 3.2rem;
 box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
  rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

 th,
 td {
  text-align: left;
  font-size: 16px;
  color: ${COLORS.primary};
 }
`;
