import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DataTable.css';


class DataTable extends Component {
  render() {
    return (
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Title</h4>
          <table class="table">
            <thead>
              <tr>
                <th>header1</th>
                <th>header2</th>
                <th>header3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">1</td>
                <td>2</td>
                <td>3</td>
              </tr>
              <tr>
                <td scope="row">1</td>
                <td>2</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps, {})(DataTable)