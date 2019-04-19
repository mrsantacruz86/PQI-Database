import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import './DataTable.css';
// @ts-ignore
import data from './house-audits.json';
const headers = [
  { name: "id", order: 1, label: "Audit Id" },
  { name: "date", order: 1, label: "Date" },
  { name: "House", order: 2, label: "House" },
  { name: "Dept", order: 3, label: "Dept" },
  { name: "auditor", order: 4, label: "Auditor" },
  { name: "AVG_D", order: 5, label: "Documentation" },
  { name: "AVG_S", order: 6, label: "Safety" },
  { name: "AVG_H", order: 7, label: "Housekeeping" },
  { name: "Avg", order: 8, label: "Household Score" },
  { name: "F_AVG", order: 9, label: "Maintenance Score" },
]


class DataTable extends Component {

  render() {
    // console.log(data[0]);
    return (
      <div className="card">
        <div className="card-body">
          {/* <h4 className="card-title">Title</h4> */}
          <Table hover responsive>
            <thead>
              <tr>
                {headers.map(header => <th>{header.label}</th>)}
              </tr>
            </thead>
            <tbody>
              {data.map(record => (
                <tr>
                  {headers.map(field =>
                    <td>{record[field.name]}</td>
                  )}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps, {})(DataTable)