import React from 'react';
import { Router } from "@reach/router";
import Layout from './layouts/DefaultLayout';
import DashLayout from './layouts/DashLayout';
import Theme from './utils/Theme';

function App() {
  return (
    <Theme>
      <Router>
        <Layout path="/*" />
        <DashLayout path="/dashboard/*" />       
      </Router>
    </Theme>
  );
}

export default App;