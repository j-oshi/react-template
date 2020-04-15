import React, { Suspense, lazy } from 'react';
import { Router, Link } from "@reach/router";

const Header = lazy(() => import('./header/Index'));
const Footer = lazy(() => import('./Footer'));

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const NoMatchPage = () => {
  return (
    <h3>404 - Not found</h3>
  );
};

const routes = [
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

const Dynamic = () => <div>This is a dynamic route!</div>;

const Layout = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <Router>
        <Home path="/" />
        <About path="/about" />
        <Contact path="/contact" />
        {routes.map(path =>
          <Dynamic path={path.link} key={path.id}/>
        )}
        <NoMatchPage default />
      </Router>
      <Footer>&copy; Osh 2019</Footer>
    </Suspense>
  )
}

export default Layout;