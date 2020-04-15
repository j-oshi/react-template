import React from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";
import { Link } from "@reach/router";
import { device } from "../../utils/Device";
import {
  fadeIn,
  popIn,
  slideInLeft,
  slideInRight,
} from "../../utils/animation";

const Container = styled.article`
  width: 100%;
  overflow: hidden;
  display: flex;
  transform: translateX(0);
  transition: transform ease-out 0.45s;
`;

const Wrapper = styled.div`
  width: 100%;
`;

const Slide = styled.div`
    background: url(${(props) => props.url}) center;
    background-size: cover;
    display: inline-block;
	  min-width: 100%;
    max-width: 100%;

    padding: 4rem 2rem;
    animation: 0.2s ${fadeIn} ease-out;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    ${'' /* @media ${device.laptop} {
      height: 600px;
    } */}
    ${'' /* padding-top: calc(591.44 / 1127.34 * 100%); */}
`;

const LeftButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: calc(50% - 22px);
  width: auto;
  margin-top: -22px;
  padding: 8px 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  background-color: Transparent;
  border: none;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const RightButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: calc(50% - 22px);
  width: auto;
  margin-top: -22px;
  padding: 8px 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  right: 0;
  border-radius: 3px 0 0 3px;
  user-select: none;
  background-color: Transparent;
  border: none;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const fullexpand = keyframes`
   /* In these keyframes, the progress-bar is stationary */
   0%, 20%, 40%, 60%, 80%, 100% { width: 0%; opacity: 0; }

   /* In these keyframes, the progress-bar starts to come alive */
   4%, 24%, 44%, 64%, 84% { width: 0%; opacity: 0.3; }

   /* In these keyframes, the progress-bar moves forward for 3 seconds */
   16%, 36%, 56%, 76%, 96% { width: 100%; opacity: 0.7; }

   /* In these keyframes, the progress-bar has finished his path */
   17%, 37%, 57%, 77%, 97% { width: 100%; opacity: 0.3; }

   /* In these keyframes, the progress-bar will disappear and then resume the cycle */
   18%, 38%, 58%, 78%, 98% { width: 100%; opacity: 0; }
`;

export const ProgressBar = styled.div`
  position: relative;
  top: -5px;
  width: 680px;
  height: 5px;
  background: #000;
  animation: ${fullexpand} 25s ease-out infinite;
`;

export const SlideshowContainer = (props) => {
  return <Container>{props.children}</Container>;
};

Container.propTypes = {
  children: PropTypes.node,
};

export const SlideshowWrapper = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

SlideshowWrapper.propTypes = {
  children: PropTypes.node,
};

const CaptionHeader = styled.h1`
  font-size: 4rem;
  padding-bottom: 1rem;
  color: white;
  animation: 2s ${slideInLeft} ease-out;
`;

const CaptionBody = styled.p`
  font-size: 1.5rem;
  font-weight: 200;
  color: white;
  animation: 2s ${slideInRight} ease-out;
`;

const CaptionLink = styled.a`
  padding: 1rem 1.4rem;
  margin-top: 0.75rem;
  color: white;
  background-color: goldenrod;
  text-decoration: none;
  border-radius: 0.25rem;
  text-align: center;
  display: inline-block;
  animation: 3s ${popIn} ease-out;

  &:hover {
    opacity: 0.6;
  }
  &:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

export const SlideshowSlide = (props) => {
  return (
    <Slide url={props.url}>
      <CaptionHeader>{props.header}</CaptionHeader>
      <article>
        <CaptionBody>{props.body}</CaptionBody>
        <CaptionLink>{props.link}</CaptionLink>
      </article>
    </Slide>
  );
};

SlideshowSlide.propTypes = {
  children: PropTypes.node,
};

export const SlideLeftButton = (props) => {
  return <LeftButton onClick={props.slide}>{props.children}</LeftButton>;
};

SlideLeftButton.propTypes = {
  slide: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export const SlideRightButton = (props) => {
  return <RightButton onClick={props.slide}>{props.children}</RightButton>;
};

SlideRightButton.propTypes = {
  slide: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};
