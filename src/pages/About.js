import React, { lazy }from "react";
import Global from "../styles/global";
import Hero from "../components/Hero";
import IntroText from "../components/IntroText";
import TextANDImage from "../components/TextANDImage"; 

const About = () => {
  return (
    <>
      <Global />
      <Hero url={'https://images.unsplash.com/photo-1518176258769-f227c798150e'}
            header={'You thirsty?'}
            body={'Explore local breweries with just one click and stirred by starlight across the centuries light years great turbulent clouds circumnavigated paroxysm of global death.'}
            link={'Browse Breweries'}
      />
      <IntroText />
      <TextANDImage />
    </>   
  )
}

export default About;