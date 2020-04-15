import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "@reach/router";
import { device } from "../../utils/Device";

const LogoStyle = styled(Link)`
  padding: 16px;
  width: auto;
  border: none;
  outline: 0;
  text-decoration: none;
`;

const Logo = (props) => {
  return <LogoStyle to="/">{props.children}</LogoStyle>;
};

Logo.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Logo; 