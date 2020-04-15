import React, { useRef } from "react";
import styled from "styled-components";
import { device } from "../utils/Device";

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-template-rows: auto auto;
  justify-content: center;
  align-items: center;
  padding: 0rem 2rem;
  grid-gap: 1em;
`;

const TextContent = styled.article`
  & > h2 {
    text-align: center;
  }
  & > h3 {
    text-align: center;
  }
  & > p {
    text-align: center;
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

const TextANDImage = () => {
  return (
    <Container>
      <TextContent>
        <h2>Welcome to out about page</h2>
        <br />
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <br />
        <p>
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <br />
        <h3>
          Share it
        </h3>
      </TextContent>
      <ImageCaption>
        <Image src="https://i.picsum.photos/id/100/2500/1656.jpg" />
      </ImageCaption>
    </Container>
  );
};

export default TextANDImage;
