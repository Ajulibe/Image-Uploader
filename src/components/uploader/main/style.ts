import styled from "@emotion/styled";
import { COLORS } from "styles/colors";
import { flexmiddle, appear } from "utils/mixins";

interface IProps {
 url: string;
}

export const Container = styled.div`
 position: "relative";
 height: "100vh";
 ${flexmiddle};
 flex-direction: column;
 overflow: hidden;

 .image__wrapper {
  animation: ${appear} 0.6s ease-in;
  overflow: hidden;
  img {
   max-height: 100vh;
  }
 }
`;

export const ContainerSection = styled.div<IProps>`
 min-width: ${({ url }) => url && "100vw"};
 ${flexmiddle};
 position: relative;
 max-height: 100vh;
 background: ${({ url }) => url && `${COLORS.backgroundWhite}`};

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
   padding: 1.4rem 4rem;
   border-radius: 4rem;
   font-weight: bold;
   font-size: 1.6rem;
   margin: 0 10px;
   filter: drop-shadow(4px 4px 48px rgba(0, 0, 0, 0.18));
  }

  @media screen and (max-width: 500px) {
   button {
    padding: 1rem 2rem;
    font-size: 1.2rem;
   }
  }

  @media screen and (max-width: 345px) {
   button {
    padding: 0.6rem 1rem;
    font-size: 0.8rem;
   }
  }
 }
`;

export const Section = styled.div`
 height: 100%;
 font-weight: 400;
 font-size: 14px;
 color: ${COLORS.lightblue};
 padding: 40px;
 ${flexmiddle}
 text-align: center;
 overflow: hidden;
 transition: all 1s ease-in;

 @media only screen and (max-width: 500px) {
  padding: 20px;
 }
`;
