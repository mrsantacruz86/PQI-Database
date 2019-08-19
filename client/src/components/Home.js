import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <Row>
          <Col md={4} className="px-5">
            <img src="hhch-logo.svg" alt="His House Children's Home Logo" />
          </Col>
          <Col md={8} className="px-3 d-flex align-items-center">
            <div>
              <h1 className="display-3">PQI TOOLS</h1>
              <p>
                Welcome to PQI Tools! This is a collection of electronic form designed to improve
                the eficiency of the inspections our deparmet conducts.
              </p>
              <p>
                We cover many different areas and departments. Please explore the content bellow for
                a complete list of our services.
              </p>
            </div>
          </Col>
        </Row>
      </div>

      {/* Three columns of text below the carousel */}
      <div className="row">
        <div className="col-lg-4">
          <svg
            className="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: 140x140"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777" />
            <text x="50%" y="50%" fill="#777" dy=".3em">
              140x140
            </text>
          </svg>
          <h2>Heading</h2>
          <p>
            Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id
            nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum
            at eros. Praesent commodo cursus magna.
          </p>
          <p>
            <a className="btn btn-secondary" href="#" role="button">
              View details &raquo;
            </a>
          </p>
        </div>
        {/* /.col-lg-4 */}
        <div className="col-lg-4">
          <svg
            className="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: 140x140"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777" />
            <text x="50%" y="50%" fill="#777" dy=".3em">
              140x140
            </text>
          </svg>
          <h2>Heading</h2>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem
            nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac
            cursus commodo, tortor mauris condimentum nibh.
          </p>
          <p>
            <a className="btn btn-secondary" href="#" role="button">
              View details &raquo;
            </a>
          </p>
        </div>
        {/* /.col-lg-4 */}
        <div className="col-lg-4">
          <svg
            className="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: 140x140"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777" />
            <text x="50%" y="50%" fill="#777" dy=".3em">
              140x140
            </text>
          </svg>
          <h2>Heading</h2>
          <p>
            Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
            Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus
            commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
          </p>
          <p>
            <a className="btn btn-secondary" href="#" role="button">
              View details &raquo;
            </a>
          </p>
        </div>
        {/* /.col-lg-4 */}
      </div>
      {/* /.row */}
    </div>
  );
};

export default Home;
