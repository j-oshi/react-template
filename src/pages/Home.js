import React, { lazy } from "react";
import Global from "../styles/global";
import { CaptionCard, CardSection } from "../components/Card";

import { windowWidth } from "../helper/Functions";

const Carousel = lazy(() => import('../components/carousel/Index'));
const Banner = lazy(() => import('../components/Banner'));
const Subscribe = lazy(() => import('../components/Subscribe'));
const Parallax = lazy(() => import('../components/Parallax'));




// import { useFetch } from "../utils/FetchData";

const lorem =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sed iure blanditiis voluptatum nulla quidem minus quam tempora obcaecati necessitatibus inventore! Vitae totam quam pariatur facilis fugit maxime adipisci eaque.";

const data = [
  {
    id: Math.random(),
    title: "Box titulo 1",
    src: "https://i.picsum.photos/id/100/2500/1656.jpg",
    text: lorem,
    link: "#",
    linkText: "Visit site"
  },
  {
    id: Math.random(),
    title: "Box titulo 2",
    src: "https://i.picsum.photos/id/1003/1181/1772.jpg",
    text: lorem,
    link: "#",
    linkText: "Visit site"
  },
  {
    id: Math.random(),
    title: "Box titulo 3",
    src: "https://i.picsum.photos/id/100/2500/1656.jpg",
    text: lorem,
    link: "#",
    linkText: "Visit site"
  },
  {
    id: Math.random(),
    title: "Box titulo 4",
    src: "https://i.picsum.photos/id/1019/5472/3648.jpg",
    text: lorem,
    link: "#",
    linkText: "Visit site"
  },
  {
    id: Math.random(),
    title: "Box titulo 3",
    src: "https://i.picsum.photos/id/1022/6000/3376.jpg",
    text: lorem,
    link: "#",
    linkText: "Visit site"
  },
  {
    id: Math.random(),
    title: "Box titulo 4",
    src: "https://i.picsum.photos/id/100/2500/1656.jpg",
    text: lorem,
    link: "#",
    linkText: "Visit site"
  },
  {
    id: Math.random(),
    title: "Box titulo 4",
    src: "https://i.picsum.photos/id/1019/5472/3648.jpg",
    text: lorem,
    link: "#",
    linkText: "Visit site"
  },
  {
    id: Math.random(),
    title: "Box titulo 3",
    src: "https://i.picsum.photos/id/1022/6000/3376.jpg",
    text: lorem,
    link: "#",
    linkText: "Visit site"
  },
  {
    id: Math.random(),
    title: "Box titulo 4",
    src: "https://i.picsum.photos/id/100/2500/1656.jpg",
    text: lorem,
    link: "#",
    linkText: "Visit site"
  },
];

const Home = () => {
  console.log(windowWidth());
  // const [data, loading] = useFetch(process.env.REACT_APP_SERVE_BASE);
  return (
    <>
      <Carousel />
      <Banner />
      <Parallax
        url={'https://images.unsplash.com/photo-1518176258769-f227c798150e'}
        header={'You thirsty?'}
        body={'Explore local breweries with just one click and stirred by starlight across the centuries light years great turbulent clouds circumnavigated paroxysm of global death.'}
        link={'Browse Breweries'}
      />
      <Global />
      <CardSection>
        {data.map(({ id, src, title, text, linkText, link }) => (
          <CaptionCard key={id} src={src} title={title} text={text} linkText={linkText} link={link} />
        ))}
      </CardSection>
      <Subscribe />
      {/* <Card boxData={data} /> */}
      {/* {loading ? (
        "Loading..."
      ) : (
        <ul>
          {data.test}
          {data.map(({ id, title, url }) => (
            <li key={`photo-${id}`}>
              <img alt={title} src={url} />
            </li>
          ))}
        </ul>
      )} */}
    </>
  );
}

export default Home;