import React from "react";
import styled from "styled-components";
import px2vw from "../utils/px2vws";
import  { device } from "../utils/Device";


const HeroStyle = styled.section`
  background: url(${(props) => props.url}) center;
  background-size: cover;
  padding: 4rem 2rem;

  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`;

const HeroHeader = styled.h1`
  font-size: 4rem;
  padding-bottom: 1rem;
  color: white;
`;

const HeroBody = styled.p`
  font-size: 1.5rem;
  font-weight: 200;
  color: white;
`;

const HeroLink = styled.a`
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
`;

const Hero = (props) => {
  return (
    <HeroStyle url={props.url}>
      <HeroHeader>{props.header}</HeroHeader>
      <article>
        <HeroBody>{props.body}</HeroBody>
        <HeroLink>{props.link}</HeroLink>
      </article>
    </HeroStyle>
  );
};

export default Hero;