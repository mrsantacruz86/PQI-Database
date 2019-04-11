import React from 'react';
import "./MainFrame.css";
import HNavbar from '../HNavbar';

class MainFrame extends React.Component {

  render() {
    return (
      <React.Fragment>
        <HNavbar/>
        <h1>This is a sample landing page made with bootstrap</h1>
      </React.Fragment>
    );
  }
}

export default (MainFrame);