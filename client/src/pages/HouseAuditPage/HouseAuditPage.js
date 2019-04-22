import React from 'react';
import { connect } from 'react-redux';
import DataTable from "../../components/DataTable";
import moment from "moment";
import BarChart from '../../components/BarChart';
import { Button, Form, FormGroup, Input, Label, FormText, Card, CardBody, CardTitle } from 'reactstrap';
import './HouseAuditPage.css';
import data from '../../components/DataTable/house-audits.json';
import { percentage } from '../../utils/numbers';



class HouseAuditPage extends React.Component {

  handleInputChange = (e) => {
    e.preventDefault();
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    const { auth } = this.props.app;
    const dataset = chartData(data);
    console.log(dataset);
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle><h5>House Audit</h5></CardTitle>
            <Button color="primary" className="mb-3 mr-1">New Audit</Button>
            <Button color="primary" className="mb-3 mr-1">Generate Report</Button>
            <BarChart data={dataset} />
            <DataTable></DataTable>
          </CardBody>
        </Card>
      </div>
    );
  }
}
const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps, {})(HouseAuditPage);

//function to filter the data for one house
// function filterByHouse(arr) {
//   return arr.filter(item => moment(item.date).isSameOrAfter("01/01/2019") && item.dept === "UAC")
// }

function chartData(arr) {
  let filtered = arr.filter(item => moment(item.date).isSameOrAfter("01/01/2019") && item.dept === "UAC");
  let newArray = filtered.map(item => ({
    House: item.house,
    labelHousehold: percentage(item.avg, 0) + "%",
    Household: Number(percentage(item.avg, 0)),
    labelMaintenance: percentage(item.avgM, 0) + "%",
    Maintenance: Number(percentage(item.avgM, 0))
  }));
  return newArray
} 