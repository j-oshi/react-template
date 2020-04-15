import React, { Suspense, lazy, useState } from 'react';
import { Router } from "@reach/router";

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

const Layout = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <Router>
        <Home path="/" />
        <About path="/about" />
        <Contact path="/contact" />
        <NoMatchPage default />
      </Router>
      <Footer>&copy; Osh 2019</Footer>
    </Suspense>
  )
}

export default Layout;