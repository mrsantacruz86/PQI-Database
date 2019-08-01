import React from 'react';
import { Link } from 'react-router-dom';

const HouseAuditsList = () => {
  return (
    <div>
      <h1>HouseAuditsList</h1>
      <div className="btn btn-primary">
        <Link to="/houseaudits/new">Create audit</Link>
      </div>
    </div>
  );
};

export default HouseAuditsList;
