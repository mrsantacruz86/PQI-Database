import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BarChart, Bar, LabelList, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { percentage } from '../utils/numbers';

class HouseScoresChart extends Component {
  chartRef = React.createRef();

  labels = this.props.data.map(item => {
    return item.house;
  });
  values = this.props.data.map(item => {
    return item.avg;
  });

  render() {
    const { data } = this.props;
    return (
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 10,
          left: 10,
          bottom: 20
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="name" fill="#007bff">
          <LabelList dataKey="label" position="top" />
        </Bar>
        {/* <Bar dataKey="Maintenance" fill="#dc3545">
          <LabelList dataKey="label" position="top" />
        </Bar> */}
      </BarChart>
    );
  }
}

HouseScoresChart.propTypes = {
  data: PropTypes.array
};

export default HouseScoresChart;
