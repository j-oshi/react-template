import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "@reach/router";
import { device } from "../utils/Device";

const ButtonLink = styled(Link)`
  padding: 0.5rem 1.2rem;
  margin: 0.5rem;
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

export const BigButton = styled(ButtonLink)`
  padding: 1rem 1.2rem;
  margin-top: 0.75rem;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

export const Button = (props) => {
  return <ButtonLink to={props.link}>{props.children}</ButtonLink>;
};

Button.propTypes = {
  link: PropTypes.string,
  children: PropTypes.string,
};

export const LargeButton = (props) => {
  return <BigButton to={props.link}>{props.children}</BigButton>;
};

LargeButton.propTypes = {
  link: PropTypes.string,
  children: PropTypes.string,
};
