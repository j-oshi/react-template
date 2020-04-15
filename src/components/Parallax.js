import React from "react";
import styled from "styled-components";
import px2vw from "../utils/px2vws";
import { device } from "../utils/Device";

const ParallaxStyle = styled.section`
  background: url(${(props) => props.url}) center;
  background-size: cover;
  padding: 4rem 2rem;

  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));

  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;
`;

const ParallaxHeader = styled.h2`
  font-size: 4rem;
  padding-bottom: 1rem;
  color: white;
`;

const ParallaxBody = styled.p`
  font-size: 1.5rem;
  font-weight: 200;
  color: white;
`;

const ParallaxLink = styled.a`
  padding: 1rem;
  margin-top: 0.75rem;
  color: white;
  background-color: goldenrod;
  text-decoration: none;
  border-radius: 0.25rem;
  text-align: center;
  display: inline-block;
  transition: all 0.3s;
  &:hover {
    opacity: 0.6;
  }
  &:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

const Parallax = (props) => {
  return (
    <ParallaxStyle url={props.url}>
      <ParallaxHeader>{props.header}</ParallaxHeader>
      <article>
        <ParallaxBody>{props.body}</ParallaxBody>
        <ParallaxLink>{props.link}</ParallaxLink>
      </article>
    </ParallaxStyle>
  );
};

export default Parallax;
