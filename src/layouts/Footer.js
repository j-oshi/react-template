import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Collapsible from "../components/Collapsible";
import { Link } from "@reach/router";
import { device } from "../utils/Device";

const Bar = styled.footer`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  background-color: black;
  z-index: 20;
  padding: 16px;
`;

const WidgetContainer = styled.footer`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  justify-content: space-evenly;   
`;

const Widdget = styled.article`
  display: block;
  width: 100%;
  color: white;
  justify-self: center;
  @media ${device.laptop} {
    padding: 2rem;
  }
`;

const CopyBar = styled.article`
  display: block;
  color: white;
  justify-self: center;
  padding: 2rem;
`;

const Copyright = (props) => {
  const yearNow = new Date().getFullYear();
  return (
    <CopyBar>
      {props.children} - {yearNow}
    </CopyBar>
  );
};

Copyright.propTypes = {
  children: PropTypes.string.isRequired,
};

const FooterBar = (props) => {
  const routes = [
    {
      id: 0,
      name: "Home",
      link: "/",
    },
    {
      id: 1,
      name: "About",
      link: "/about",
    },
    {
      id: 2,
      name: "Contact",
      link: "/contact",
    },
  ];


  return (
    <Bar>
      <WidgetContainer>
        <Widdget>
          <Collapsible footerLink={routes}/>
        </Widdget>
        <Widdget>
          <Collapsible footerLink={routes}/>
        </Widdget>
        <Widdget>
          <Collapsible footerLink={routes}/>
        </Widdget>
        <Widdget>
          <Collapsible footerLink={routes}/>
        </Widdget>
      </WidgetContainer>
      <Copyright>{props.children}</Copyright>
    </Bar>
  );
};

FooterBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FooterBar;
