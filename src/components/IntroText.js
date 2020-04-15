import React, { useRef } from "react";
import styled from "styled-components";
import { device } from "../utils/Device";

const Container = styled.section`
  display: grid;
  grid-template-columns: minmax(auto, 40em);
  grid-template-rows: auto;
  justify-content: center;
  padding: 3rem 2rem;
`;

const Content = styled.article`
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

const Introduction = () => {
  return (
    <Container>
      <Content>
        <h2>Welcome to out about page</h2>
        <br />
        <p>
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </Content>
    </Container>
  );
};

export default Introduction;