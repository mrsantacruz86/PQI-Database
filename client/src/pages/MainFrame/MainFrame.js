import React from 'react';
import "./MainFrame.css";
import HNavbar from '../../components/HNavbar';

class MainFrame extends React.Component {

  render() {
    return (
      <React.Fragment>
        <HNavbar />
        {this.props.children}
        {/* <h1>Main Frame</h1> */}
      </React.Fragment>
    );
  }
}

export default (MainFrame);