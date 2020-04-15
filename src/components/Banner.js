import React from "react";
import styled from "styled-components";
import px2vw from "../utils/px2vws";
import { device } from "../utils/Device";
import { Button } from "./Button";

const BannerStyle = styled.section`
  ${"" /* background: url(${props => props.url}) center;
    background-size: cover; */}
  padding: 3rem 2rem;

  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 1rem;
  @media ${device.laptop} { 
    grid-template-columns: 1fr 2fr;
  }
`;

export const ImageCaption = styled.figure`
  ${"" /* max-height: 220px; */}
  overflow: hidden;
  border-radius: 0.5rem;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  color: Black;
  margin: .5rem;
`;

const Body = styled.p`
  font-size: 1rem;
  font-weight: 200;
  color: Black;
  margin: .5rem;
`;

const Banner = (props) => {
  return (
    <BannerStyle>
      <ImageCaption>
        <Image src="https://i.picsum.photos/id/100/2500/1656.jpg" />
      </ImageCaption>
      <article>
        <Title>Find out more about us</Title>
        <Body>
        Acier Limited engages in agric-business with its primary focus being the exportation of  agricultural commodities.
        </Body>
        <Body>
        We work with farmer cooperatives, small holder farmers, producers, processors and off-takers.
        </Body> 
        <Body>
        We also provide inputs (seeds, seedlings, fertilizers and agro-chemicals), aggregation centres and extension services that together improve  the agricultural value chain
        </Body>
        <Button link="#">Read more</Button>
      </article>
    </BannerStyle>
  );
};

export default Banner;
