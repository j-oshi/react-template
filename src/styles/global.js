import { createGlobalStyle } from "styled-components";
import px2vw from "../utils/px2vws";
import  { size } from "../utils/Device";

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
      font-size: ${px2vw(36)};

      @media (min-width: ${size.tablet}) {
        font-size: ${px2vw(18)};
      }

      @media (min-width: ${size.laptop}) {
        font-size: ${px2vw(16)};
      }
    }
`;

export default Global;