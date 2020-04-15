import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "@reach/router";
import { device } from "../utils/Device";

const Button = styled.button`
  background-color: transparent;
  color: white;
  cursor: pointer;
  padding: 10px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
`;

const Icon = styled.span`
  float: right;
  box-sizing: border-box;
  transition: transform 0.2s;
  width: 20px;
  height: 20px;
  transform: ${(props) => (props.show ? `rotate(0deg)` : `rotate(180deg)`)};
  position: relative;
  @media ${device.laptop} {
    display: none;
  }
  &::before {
    content: "";
    display: block;
    width: ${(props) => (props.show ? "0px" : "20px")};
    height: 0px;
    border-bottom: solid 2px #a1a1a1;
    position: absolute;
    bottom: 11px;
    transform: rotate(90deg);
    transition: width 0.2s;
  }
  &::after {
    content: "";
    display: block;
    width: 20px;
    height: 0px;
    border-bottom: solid 2px #a1a1a1;
    position: absolute;
    bottom: 11px;
  }
`;

const Content = styled.div`
  width: 100%;
  padding: 0 10px;
  overflow: hidden;
  color: #ffffff;
  height: ${(props) => (props.show ? "100px" : "0px")};
  transition: height 0.3s ease;
  @media ${device.laptop} {
    height: auto;
  }
`;

const NavLink = styled(Link)`
  padding: 5px 8px 5px 0px;
  text-decoration: none;
  font-size: 16px;
  color: #818181;
  display: block;
  -webkit-transition: all 0.1s ease;
  -moz-transition: all 0.1s ease;
  transition: all 0.1s ease;
  &:hover {
    color: #f1f1f1;
  }
`;

export const FooterNavLinkTab = (props) => {
  return <NavLink to={props.link}>{props.children}</NavLink>;
};

FooterNavLinkTab.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

const Collapsible = (link) => {
  const [show, setShow] = useState(false);

  const contentDisplay = () => {
    if (show === false) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  return (
    <>
      <Button onClick={() => contentDisplay()}>
        Testing <Icon show={show} />
      </Button>
      <Content show={show}>
        {link.footerLink.map((path) => (
          <FooterNavLinkTab link={path.link} key={path.id}>
            {path.name}
          </FooterNavLinkTab>
        ))}
      </Content>
    </>
  );
};

export default Collapsible;
