import React, { useRef } from "react";
import styled from "styled-components";
import { device } from "../utils/Device";

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr repeat(auto-fit, minmax(260px, 1fr)) 1fr;
  grid-template-rows: auto auto;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 57px 2rem;
  justify-content: center;
  justify-items: stretch;
  grid-gap: 1rem;
  @media ${device.laptop} {
    grid-template-columns: 320px minmax(auto, 30em);
  }
  align-items: center;
`;

const TextWrapper = styled.div`
    display: inline-block;
    color: white;
`;

const FormWrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr auto; 
  padding: 0.5em 0;
  grid-gap: 0.5em;
`;

const Input = styled.input`
  padding: 0.5em;
  color: #000000;
  background: ${(props) => props.theme.colors.powderWhite};
  border: none;
  border-radius: 3px;
`;

const SubscribeButton = styled.a`
  padding: 0.5rem 1.2rem;
  background-color: goldenrod;
  text-decoration: none;
  color: white;
  border-radius: 0.25rem;
  text-align: center;
  display: inline-block;
  transition: all 0.3s;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

const Subscribe = () => {
  const inputRef = useRef(null);
  const seInput = () => {
    const email = inputRef.current.value;
    const emailCheck = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    const emailValid = emailCheck ? true : false;
    console.log(emailValid);
  };

  return (
    <Container>
      <TextWrapper>
        <h2>Subscribe Our Newsletter</h2>
        <p>
          Subscribe newsletter to get offers and about new places to discover.
        </p>
      </TextWrapper>
      <FormWrapper>
        <Input
          placeholder="Hover to focus!"
          ref={inputRef}
        />
        <SubscribeButton onClick={() => seInput()} >Submit</SubscribeButton>
      </FormWrapper>
    </Container>
  );
};

export default Subscribe;
