import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './layouts/DefaultLayout';
import Theme from './utils/Theme';


function App() {
  return (
    <Theme>
      <Layout />
    </Theme>
  );
}

export default App;

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div></div>