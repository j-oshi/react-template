import styled from "styled-components";
import px2vw from "../utils/px2vws";
import  { device } from "../utils/Device";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${px2vw(32)};
  max-width: 100%;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

export const Box = styled.div`
  display: flex;
  width: ${px2vw(320, 320)};
  min-height: ${px2vw(200, 320)};
  flex-direction: column;
  padding: ${px2vw(20)};
  margin: ${px2vw(10)};
  background-color: ${props => props.bgColor};
  height: 100%;

  @media ${device.tablet} {
    width: ${px2vw(320, 768)};
    min-height: ${px2vw(200, 768)};
    height: 100%;
  }

  @media ${device.laptop} {
    width: ${px2vw(500)};
    min-height: ${px2vw(300)};
    height: 100%;
  }
`;

export const BoxTitle = styled.h3`
  color: #333;
  font-size: 2rem;
  text-align: center;

  @media ${device.laptop} {
    font-size: 1.5rem;
  }
`;

export const BoxText = styled.p`
  margin-top: ${px2vw(20)};
  color: #666;
  font-size: 1.5rem;

  @media ${device.laptop} {
    font-size: 1rem;
  }
`;
