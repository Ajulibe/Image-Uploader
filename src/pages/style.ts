import styled from "@emotion/styled";
import { appear } from "utils/mixins";

export const Container = styled.div`
 background-color: rgba(248, 248, 248, 1);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 border-radius: 24px;
 box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
  rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
 animation: ${appear} 0.8s ease-in;
`;
