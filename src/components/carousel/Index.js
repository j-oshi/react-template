import React, { useState, useEffect } from "react";

import {
  SlideshowContainer,
  SlideshowWrapper,
  SlideshowSlide,
  SlideLeftButton,
  SlideRightButton,
  ProgressBar,
} from "./Slider";

const testData = [
  {
    title: "Curiosity",
    value: "2440 SOLS ON MARS",
    url: "https://i.picsum.photos/id/100/2500/1656.jpg",
  },
  {
    title: "Opportunity",
    value: "12 YEARS ON MARS",
    url: "https://i.picsum.photos/id/1002/4312/2868.jpg",
  },
  {
    title: "Insight",
    value: "320 SOLS ON MARS",
    url: "https://i.picsum.photos/id/1008/5616/3744.jpg",
  },
  {
    title: "Orbiters",
    value: "3 MISSIONS AT MARS",
    url: "https://i.picsum.photos/id/1012/3973/2639.jpg",
  },
  {
    title: "Future",
    value: "WHATS NEXT",
    url: "https://i.picsum.photos/id/1019/5472/3648.jpg",
  },
];

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [slide, setSlide] = useState(null);

  const generatedSlides = testData.map((slide, i) => (
    <SlideshowSlide
      key={i}
      url={slide.url}
      header={"You thirsty?"}
      body={
        "Explore local breweries with just one click and stirred by starlight across the centuries light years great turbulent clouds circumnavigated paroxysm of global death."
      }
      link={"Browse Breweries"}
    />
  ));

  const numOfGeneratedSlides = { amount: generatedSlides.length };

  const slideState = (index, numberOfSlides) => {
    switch (true) {
      case index >= 0:
        return index % numberOfSlides;
      case index < -numberOfSlides && index % -numberOfSlides === 0:
        return 0;
      case index < 0 && index > -numberOfSlides - 1:
        return (index + numberOfSlides) % numberOfSlides;
      case index < 0 && index === -numberOfSlides:
        return 0;
      case index < -numberOfSlides &&
        -((numberOfSlides + index) / numberOfSlides) > 1:
        return numberOfSlides + ((numberOfSlides + index) % numberOfSlides);
      case index <= -numberOfSlides && index !== -10:
        return numberOfSlides + ((numberOfSlides + index) % numberOfSlides);
      default:
        return 0;
    }
  };

  useEffect(() => {
    const slideShow = () => {
      const next = slideState(index, numOfGeneratedSlides.amount);
      const nextSlide = generatedSlides[next];
      setSlide(nextSlide);
    };

    slideShow();
  }, [index]);

  useEffect(() => {
    const id = setTimeout(() => setIndex(index + 1), 6000);
    return () => clearTimeout(id);
  });

  // const slideController = {
  //     numOfSlides: renderSlide.length,
  //     translateValue: 0,
  // };

  // const [hidden, setHidden] = useState(false);
  // const routes = [
  //     {
  //         "id": 0,
  //         "name": "Home",
  //         "link": "/"
  //     },
  //     {
  //         "id": 1,
  //         "name": "About",
  //         "link": "/about"
  //     },
  //     {
  //         "id": 2,
  //         "name": "Contact",
  //         "link": "/contact"
  //     }
  // ];

  return (
    <>
      <SlideshowContainer
      // ref={slideRef}
      >
        <SlideshowWrapper>
          {slide}
          {/* <ProgressBar /> */}
        </SlideshowWrapper>
        <SlideLeftButton slide={() => setIndex(index - 1)}>
          &#10094;
        </SlideLeftButton>
        <SlideRightButton slide={() => setIndex(index + 1)}>
          &#10095;
        </SlideRightButton>
      </SlideshowContainer>
    </>
  );
};

export default Carousel;
