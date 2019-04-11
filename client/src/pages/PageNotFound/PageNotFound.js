import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./PageNotFound.css";


class PageNotFound extends Component {

  handleClick = () => {
    this.context.router.history.push("/");
  }

  render() {
    return (
      <React.Fragment>

        <main>
          {/* Hero unit */}
          <div className="jumbotron">
            <h1>404: Page not Found :(</h1>
            <p>The page that you are looking for appeard to have been moved, deleted or does not exist. You can enter a valir URL or return Home.</p>

            <a className="btn btn-lg btn-primary" href="/docs/4.3/components/navbar/" role="button">Return to Home</a>
          </div>

        </main >

        {/* Footer */}
        < footer>
          <h3>PQI Audit Tools</h3>
          <p>&#169; Copyright 2018, Nelson Diaz</p>
        </footer >
        {/* End footer */}
      </React.Fragment >
    );
  }
}

PageNotFound.propTypes = {
  classes: PropTypes.object.isRequired,
};
PageNotFound.contextTypes = {
  router: PropTypes.object.isRequired
};

export default PageNotFound;