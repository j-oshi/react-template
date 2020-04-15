import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import px2vw from "../utils/px2vws";
import { device } from "../utils/Device";
import { Button } from "./Button";

export const CardSection = styled.section`
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); 
  grid-gap: 1rem;
`;

export const Card = styled.article`
  border: 1px solid #E2E2E2;
  border-radius: .5rem;
`;

export const ImageCaption = styled.figure`
  max-height: 220px;
  overflow: hidden;
  border-top-left-radius: .5rem;
  border-top-right-radius: .5rem;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  transition: all .2s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;

export const Caption = styled.figcaption`
  position: absolute;
  bottom: 0;
  background-color: rgba(0,0,0,.7);
  width: 100%;
`;

export const CaptionText = styled.h3`
  color: white;
  padding: .75rem;
  font-size: 1.25rem;
`;

export const Text = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin: 1rem .75rem;
  color: #666666;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;

export const CaptionCard = ({ id, src, title, text, linkText, link}) => {
  return (
    <Card key={id}>
      <ImageCaption>
        <Image src={src} />
        <Caption>
          <CaptionText>{title}</CaptionText>
        </Caption>
      </ImageCaption>
      <Text>{text}</Text>
      <Button link={link}>{linkText}</Button>
    </Card>
  )
};

CaptionCard.propTypes = {
  id: PropTypes.string,
  src: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  linkText: PropTypes.string,
  link: PropTypes.string,
}