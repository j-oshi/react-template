import React, { useRef } from "react";
import styled from "styled-components";
import { device } from "../utils/Device";

import StyleForm from "./form/Form";
import StyleLabel from "./form/Label";
import StyleInput from "./form/Input";
import StyleTextarea from "./form/Textarea";

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  padding: 3rem 2rem;
  justify-content: center;

  align-items: center;

  & > h2 {
    text-align: center;
  }
  & > p {
    text-align: center;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-template-rows: auto;
  padding: 2rem;
  grid-gap: 1em;
`;

const ImageCaption = styled.figure`
  overflow: hidden;
  border-radius: 0.5rem;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
`;

const Button = styled.a`
  padding: 1rem 1.4rem;
  margin-top: 0.75rem;
  color: white;
  background-color: goldenrod;
  text-decoration: none;
  border-radius: 0.25rem;
  text-align: center;
  display: inline-block;

  &:hover {
    opacity: 0.6;
  }
  &:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

const FormWrapper = styled.div`
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
`;

const Form = () => {
  return (
    <>
      <StyleForm>
        <StyleInput 
          type="text"
          id="name"
          name="name"
          placeholder="Name"      
        />
        <StyleInput 
          type="text"
          id="email"
          name="email"
          placeholder="Email"      
        />
        <StyleTextarea 
          name="Message" 
          cols="40" 
          rows="10" 
          placeholder="Message" 
        />
        <Button>Send</Button>
       </StyleForm>
    </>
  );
};

const ContactForm = () => {
  // const inputRef = useRef(null);
  // const seInput = () => {
  //   const email = inputRef.current.value;
  //   const emailCheck = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
  //   const emailValid = emailCheck ? true : false;
  //   console.log(emailValid);
  // };

  return (
    <Container>
      <h2>Contact Us</h2>
      <p>Leave us a message:</p>
      <Content>
        <ImageCaption>
          <Image src="https://i.picsum.photos/id/100/2500/1656.jpg" />
        </ImageCaption>
        <FormWrapper>
          <Form />
        </FormWrapper>
      </Content>
    </Container>
  );
};

export default ContactForm;
