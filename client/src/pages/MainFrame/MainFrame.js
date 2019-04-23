import React from 'react';
import "./MainFrame.css";
import HNavbar from '../../components/HNavbar';

class MainFrame extends React.Component {

  render() {
    return (
      <React.Fragment>
        <HNavbar />
        <div className="container-fluid fixed-nav-top">
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}

export default (MainFrame);