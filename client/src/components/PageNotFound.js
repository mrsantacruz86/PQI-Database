import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PageNotFound extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="container">
          <div className="jumbotron">
            <h1>404: Page not Found :(</h1>
            <p>
              The page that you are looking for appeard to have been moved, deleted or does not
              exist. You can enter a valid URL or return Home.
            </p>

            <a className="btn btn-primary" href="/" role="button">
              Return to Home
            </a>
          </div>

          {/* Footer */}
          <footer>
            <h3>PQI Audit Tools</h3>
            <p>&#169; Copyright 2018, Nelson Diaz</p>
          </footer>
          {/* End footer */}
        </main>
      </React.Fragment>
    );
  }
}

PageNotFound.propTypes = {
  classes: PropTypes.object.isRequired
};
PageNotFound.contextTypes = {
  router: PropTypes.object.isRequired
};

export default PageNotFound;
