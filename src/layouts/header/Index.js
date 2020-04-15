import React, { useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import {
  HeaderBar,
  HeaderMobileIcon,
  SideNavSlider,
  CloseSideNavSlider,
  SideNavLinkTab,
} from "./Header";

const Header = () => {
  const [hidden, setHidden] = useState(false);
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
    {
      id: 3,
      name: "Page1",
      link: "/page1",
    },
    {
      id: 4,
      name: "Page2",
      link: "/page2",
    },
    {
      id: 5,
      name: "Page3",
      link: "/page3",
    },
  ];

  return (
    <>
      <HeaderBar>
        <Logo>Testing</Logo>
        <Nav routes={routes} turnOnDropDown={true}/>
        <HeaderMobileIcon show={() => setHidden(true)} />
      </HeaderBar>
      <SideNavSlider slideBack={hidden}>
        <CloseSideNavSlider hide={() => setHidden(false)} />
        {routes.map((path) => (
          <SideNavLinkTab link={path.link} key={`side-${path.id}`}>
            {path.name}
          </SideNavLinkTab>
        ))}
      </SideNavSlider>
    </>
  );
};

export default Header;
