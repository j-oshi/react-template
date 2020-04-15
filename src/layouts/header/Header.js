import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from "@reach/router";
import { device } from '../../utils/Device';

const Bar = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: #000 !important;
  background-color: ${props => props.theme.colors.powderWhite};
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);
  z-index: 20;
`;

const MobileIcon = styled.a`
  justify-self: end;
  display: block;
  ${'' /* right: 0;
  top: 0; */}
  background-color: #333;
  color: #ddd;
  padding: 16px;
  @media ${device.laptop} { 
    display: none;
  }
`;

const SideNavWrapper = styled.aside`
  height: 100%; 
  width: 250px; 
  position: fixed; 
  z-index: 30; 
  top: 0;
  right: 0;
  background-color: #111; 
  overflow-x: hidden; 
  padding-top: 60px; 
  transform: ${props => props.slide ? 'translateX(0%)' : 'translateX(100%)'};
  -webkit-transition: all 0.2s ease; 
  -moz-transition: all 0.2s ease; 
  transition: all 0.2s ease; 
`;

const SideNav = styled(Link)`
    padding: 5px 8px 5px 32px;
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

const SideNavClose = styled.a`
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
    color: #818181;
    -webkit-transition: all 0.1s ease; 
    -moz-transition: all 0.1s ease; 
    transition: all 0.1s ease; 
    &:hover {
        color: #f1f1f1;
    }
`;

const SideNavLink = props => (
  <SideNav
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          color: isCurrent ? "red" : "#818181"
        }
      };
    }}
  />
);

export const HeaderBar = props => {
  return <Bar>{props.children}</Bar>
}

HeaderBar.propTypes = {
  children: PropTypes.node.isRequired,
}

export const HeaderMobileIcon = ({ show }) => {
  return <MobileIcon onClick={show}><i className="fa fa-bars"></i></MobileIcon>
}

HeaderMobileIcon.propTypes = {
  show: PropTypes.func.isRequired,
}

export const SideNavSlider = (props) => {
  return <SideNavWrapper slide={props.slideBack}>{props.children}</SideNavWrapper>
}

SideNavSlider.propTypes = {
  slideBack: PropTypes.bool.isRequired,
  children: PropTypes.array.isRequired,
}

export const CloseSideNavSlider = ({ hide }) => {
  return <SideNavClose onClick={hide}>&times;</SideNavClose>
}

CloseSideNavSlider.propTypes = {
  hide: PropTypes.func.isRequired,
}

export const SideNavLinkTab = (props) => {
  return <SideNavLink to={props.link}>{props.children}</SideNavLink>
}

SideNavLinkTab.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}