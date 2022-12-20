import styled from "@emotion/styled";
import { COLORS } from "styles/colors";

export const ImageDetails = styled.div`
 position: absolute;
 width: 100%;
 top: 40px;
 left: 0;
 z-index: 5;
 background-color: ${COLORS.white};
 transition: all 1s ease-in;
 border-radius: 18px;
 padding: 3.2rem;
 box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
  rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

 td,
 tr {
  text-align: left;
  font-size: 16px;
  color: ${COLORS.grey500};
  border: 1px solid ${COLORS.grey100};
 }

 th {
  color: ${COLORS.grey500};
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
 }
`;
