import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, Row, Col, Card, Container } from 'react-bootstrap';
import moment from 'moment';

import { houseAuditItems } from './houseAudits.json';

const CollapseRow = props => {
  const audit = props.data;

  return (
    <Accordion>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey={audit._id}>
          <Row>
            <Col>{moment(audit.date).format('MM/DD/YYYY')}</Col>
            <Col>{audit.house}</Col>
            <Col>{audit.department}</Col>
            <Col>{audit.auditor}</Col>
            <Col>{audit.score}%</Col>
          </Row>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={audit._id}>
          <Card.Body>
            <div className="border-bottom">
              <strong>Id: </strong>
              {audit._id}
            </div>

            <Row className="border-bottom py-3">
              <Col md={9}>
                <Row>
                  {houseAuditItems.map((item, index) =>
                    !audit.items[item.name] ? (
                      ''
                    ) : (
                      <Col xs={12} md={6} lg={4} key={index}>
                        <strong>{item.label}: </strong>
                        <div className="text-red">{audit.items[item.name].score}%</div>
                      </Col>
                    )
                  )}
                </Row>
              </Col>
              <Col md={3}>
                <Link
                  className="btn btn-sm btn-secondary"
                  exact
                  to={`/houseaudits/show/${audit._id}`}
                >
                  <i className="fas fa-file-invoice mr-2" />
                  {`\t Details`}
                </Link>
                <Link
                  className="btn btn-sm btn-secondary"
                  exact
                  to={`/houseaudits/edit/${audit._id}`}
                >
                  <i className="fas fa-pencil-alt mr-2" />
                  {`\t Edit`}
                </Link>
                <Link
                  className="btn btn-sm btn-danger"
                  exact
                  to={`/houseaudits/delete/${audit._id}`}
                >
                  <i className="fas fa-trash-alt mr-2" />
                  {`\t Delete`}
                </Link>
              </Col>
            </Row>
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      {/*
       */}
      {/* </Accordion.Collapse> */}
      {/* </Accordion> */}
      {/* <pre>{JSON.stringify(audit, '', 2)}</pre> */}
    </Accordion>
  );
};

export default CollapseRow;
