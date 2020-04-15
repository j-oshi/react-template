import React, { lazy }from "react";
import Global from "../styles/global";
import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
    <Global />
    <Hero url={'https://images.unsplash.com/photo-1518176258769-f227c798150e'}
          header={'You thirsty?'}
          body={'Explore local breweries with just one click and stirred by starlight across the centuries light years great turbulent clouds circumnavigated paroxysm of global death.'}
          link={'Browse Breweries'}
    />
    <ContactForm />
  </>   
  )
}

export default Contact;