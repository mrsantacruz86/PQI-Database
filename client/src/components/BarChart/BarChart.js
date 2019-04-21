import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Chart from "chart.js";

class BarChart extends Component {
	chartRef = React.createRef();

	labels = this.props.data.map(item => {
		return item.house;
	});
	values = this.props.data.map(item => {
		return item.avg;
	});

	componentDidMount() {
		const myChartRef = this.chartRef.current.getContext("2d");

		new Chart(myChartRef, {
			type: "bar",
			data: {
				//Bring in data
				labels: this.labels,
				datasets: [
					{
						label: "Scores",
						data: this.values,
						backgroundColor: 'rgba(255, 99, 132, 0.2)',
						borderColor: 'rgba(255, 99, 132, 1)',
						borderWidth: 1
					}
				]
			},
			options: {
				//Customize chart options
			}
		});
	}
	render() {
		return (
			<div>
				<canvas
					id="myChart"
					ref={this.chartRef}
				/>
			</div>
		)
	}
}
BarChart.propTypes = {
	data: PropTypes.array
}

export default BarChart;