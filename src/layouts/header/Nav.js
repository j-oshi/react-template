import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "@reach/router";
import { device } from "../../utils/Device";

const Anchor = styled(Link)`
  display: inline-block;
  padding: 16px;
  width: auto;
  border: none;
  outline: 0;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: none;
  vertical-align: middle;
  overflow: hidden;
  text-decoration: none;
  background-color: inherit;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    background-color: #ddd;
    color: black;
  }
`;

const NavTab = styled.nav`
  display: none;
  @media ${device.laptop} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    justify-self: end;
  }
`;

const DropDownButton = styled.div`
  border: none;
  outline: none;
  padding: 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
  color: #818181;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  right: 20px;
`;

const NavDropdown = styled.span`
  float: right;
  display: inline-block;
  overflow: hidden;
  &:hover ${DropDownContent} {
    display: block;
  }
`;

const NavLink = (props) => (
  <Anchor
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          color: isCurrent ? "red" : "#818181",
        },
      };
    }}
  />
);

const NavLinkTab = ({ url, text }) => {
  return <NavLink to={url}>{text}</NavLink>;
};

NavLinkTab.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const DefaultNav = (data) => {
  const { routes } = data;
  return (
    <>
      {routes.map((path) => (
        <NavLinkTab url={path.link} text={path.name} key={path.id} />
      ))}
    </>
  );
};

const DropdownNav = (data) => {
  const { routes } = data;
  const breakOffPoint = 4;
  return (
    <>
      {routes.reduce((result, currentPath, i) => {
        if (i >= 0 && i <= breakOffPoint - 1) {
          const row = (
            <NavLinkTab
              url={currentPath.link}
              text={currentPath.name}
              key={currentPath.id}
            />
          );
          result.push(row);
        }
        return result;
      }, [])}
      <NavDropdown>
        <DropDownButton>
          More <i className="fa fa-caret-down"></i>
        </DropDownButton>
        <DropDownContent>
          {routes.reduce((result, currentPath, i) => {
            if (i >= breakOffPoint && i <= routes.length - 1) {
              const row = (
                <NavLinkTab
                  url={currentPath.link}
                  text={currentPath.name}
                  key={currentPath.id}
                />
              );
              result.push(row);
            }
            return result;
          }, [])}
        </DropDownContent>
      </NavDropdown>
    </>
  );
};

const Nav = (props) => {
  const { routes, turnOnDropDown } = props;
  const defaultTabs = <DefaultNav routes={routes} />;
  const dropDownTabs = <DropdownNav routes={routes} />;
  return <NavTab>{turnOnDropDown === false ? defaultTabs : dropDownTabs}</NavTab>;
};

export default Nav;
